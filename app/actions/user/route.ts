import { NextResponse } from "next/server";
export const runtime = 'nodejs';
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { action } = body;

        if (action === "register") {
            const { username, email, password } = body;
            if (!username || !email || !password) {
                return NextResponse.json({ error: "Missing fields" }, { status: 400 });
            }

            const user = await prisma.user.create({
                data: { username, email, password },
            });

            // create an empty profile
            await prisma.profile.create({
                data: { userId: user.id, bio: `Hi, I'm ${user.username}`, avatarUrl: null },
            }).catch(() => null);

            const safeUser = { id: user.id, username: user.username, email: user.email, createdAt: user.createdAt };
            return NextResponse.json({ user: safeUser }, { status: 201 });
        }

        if (action === "signin") {
            const { email, password } = body;
            if (!email || !password) {
                return NextResponse.json({ error: "Missing fields" }, { status: 400 });
            }

            const user = await prisma.user.findUnique({ where: { email } });
            if (!user || user.password !== password) {
                return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
            }

            const safeUser = { id: user.id, username: user.username, email: user.email, createdAt: user.createdAt };
            return NextResponse.json({ user: safeUser }, { status: 200 });
        }

        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    } catch (err: any) {
        if (err?.code === "P2002") {
            return NextResponse.json({ error: "Username or email already exists" }, { status: 409 });
        }
        console.error(err);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
