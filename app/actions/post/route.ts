import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = 'nodejs';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { action } = body;

        if (action === "create") {
            const { content, authorId } = body;
            
            if (!content || !authorId) {
                return NextResponse.json({ error: "Missing content or authorId" }, { status: 400 });
            }

            // Verify author exists
            const author = await prisma.user.findUnique({
                where: { id: authorId }
            });

            if (!author) {
                return NextResponse.json({ error: "Author not found" }, { status: 404 });
            }

            const post = await prisma.post.create({
                data: {
                    content,
                    authorId
                },
                include: {
                    author: {
                        select: {
                            username: true,
                            profile: {
                                select: {
                                    avatarUrl: true
                                }
                            }
                        }
                    }
                }
            });

            return NextResponse.json({ post }, { status: 201 });
        }

        if (action === "delete") {
            const { postId, userId } = body;

            if (!postId || !userId) {
                return NextResponse.json({ error: "Missing postId or userId" }, { status: 400 });
            }

            // Verify post ownership
            const post = await prisma.post.findUnique({
                where: { id: postId }
            });

            if (!post) {
                return NextResponse.json({ error: "Post not found" }, { status: 404 });
            }

            if (post.authorId !== userId) {
                return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
            }

            await prisma.post.delete({
                where: { id: postId }
            });

            return NextResponse.json({ success: true }, { status: 200 });
        }

        return NextResponse.json({ error: "Invalid action" }, { status: 400 });

    } catch (err) {
        console.error("Error in post route:", err);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
