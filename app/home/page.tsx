
import type { Post } from "@/components/post-feed";
import PostFeed from "@/components/post-feed";
import PostComposer from "@/components/post-composer";

import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export default async function HomePage() {
    const postsData = await prisma.post.findMany({
        orderBy: { createdAt: 'desc' },
        include: {
            author: {
                select: {
                    username: true,
                    email: true,
                    profile: {
                        select: {
                            avatarUrl: true
                        }
                    }
                }
            },
            likes: true
        }
    });

    const posts: Post[] = postsData.map(post => ({
        id: post.id,
        content: post.content,
        username: post.author.username,
        email: post.author.email,
        avatarUrl: post.author.profile?.avatarUrl || "",
        likeCount: post.likes.length,
        createdAt: post.createdAt,
        authorId: post.authorId
    }));

    return (
        <>
            <main className="flex-1 max-w-2xl border-r border-slate-700">
                {/* Header */}
                <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-slate-700 p-4">
                    <h2 className="text-xl font-bold">Home</h2>
                </header>
                <PostComposer />
                <PostFeed posts={posts} />
            </main>

        </>
    );
}
