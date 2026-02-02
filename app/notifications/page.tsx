'use client';

import Link from "next/link";
import { ArrowLeft, Settings, MoreHorizontal, Heart, MessageCircle, Repeat2, UserPlus, AtSign } from "lucide-react";
import { useState } from "react";

export default function NotificationsPage() {
    const [activeTab, setActiveTab] = useState("all");

    const tabs = [
        { id: "all", label: "All" },
        { id: "verified", label: "Verified" },
        { id: "mentions", label: "Mentions" },
    ];

    const notifications = [
        {
            id: 1,
            type: "like",
            users: [
                { name: "John Developer", handle: "@johndev", avatar: "👨‍💻" },
                { name: "Sarah Code", handle: "@sarahcode", avatar: "👩‍💻" },
            ],
            content: "Just deployed my new Next.js app! Check it out 🚀",
            timestamp: "2h ago",
            icon: <Heart size={24} className="text-red-400" fill="currentColor" />,
        },
        {
            id: 2,
            type: "retweet",
            users: [
                { name: "Tech Weekly", handle: "@techweekly", avatar: "📱", verified: true },
            ],
            content: "React Server Components are changing the game for web development",
            timestamp: "4h ago",
            icon: <Repeat2 size={24} className="text-green-400" />,
        },
        {
            id: 3,
            type: "follow",
            users: [
                { name: "Code Master", handle: "@codemaster", avatar: "🧑‍💻" },
                { name: "Dev Pro", handle: "@devpro", avatar: "👨‍🔧" },
                { name: "JS Ninja", handle: "@jsninja", avatar: "🥷" },
            ],
            timestamp: "6h ago",
            icon: <UserPlus size={24} className="text-blue-400" />,
        },
        {
            id: 4,
            type: "mention",
            users: [
                { name: "Web Dev Daily", handle: "@webdevdaily", avatar: "🌐", verified: true },
            ],
            content: "Great article on TypeScript! @sarahdev you should check this out",
            timestamp: "8h ago",
            icon: <AtSign size={24} className="text-blue-400" />,
        },
        {
            id: 5,
            type: "reply",
            users: [
                { name: "React Expert", handle: "@reactexpert", avatar: "⚛️", verified: true },
            ],
            content: "Totally agree! Server components are the future. Have you tried the new hooks?",
            timestamp: "10h ago",
            icon: <MessageCircle size={24} className="text-blue-400" />,
        },
        {
            id: 6,
            type: "like",
            users: [
                { name: "Frontend Dev", handle: "@frontenddev", avatar: "💻" },
                { name: "CSS Wizard", handle: "@csswizard", avatar: "🎨" },
                { name: "UI Designer", handle: "@uidesigner", avatar: "✨" },
                { name: "Code Ninja", handle: "@codeninja", avatar: "🥷" },
            ],
            content: "Here's a quick tutorial on Tailwind CSS best practices",
            timestamp: "12h ago",
            icon: <Heart size={24} className="text-red-400" fill="currentColor" />,
        },
        {
            id: 7,
            type: "retweet",
            users: [
                { name: "JavaScript Daily", handle: "@jsdaily", avatar: "📰", verified: true },
            ],
            content: "10 VS Code extensions every developer needs in 2024",
            timestamp: "1d ago",
            icon: <Repeat2 size={24} className="text-green-400" />,
        },
    ];

    const renderNotification = (notification: typeof notifications[0]) => {
        const userCount = notification.users.length;
        const displayUsers = notification.users.slice(0, 3);
        const remainingCount = userCount - 3;

        return (
            <div
                key={notification.id}
                className="border border-slate-700 p-4 hover:bg-slate-900/40 transition-colors cursor-pointer"
            >
                <div className="flex gap-4">
                    <div className="w-10 flex justify-center pt-1">
                        {notification.icon}
                    </div>
                    <div className="flex-1">
                        <div className="flex gap-2 mb-2">
                            {displayUsers.map((user, index) => (
                                <div key={index} className="text-2xl">
                                    {user.avatar}
                                </div>
                            ))}
                            {remainingCount > 0 && (
                                <div className="text-2xl text-slate-500">+{remainingCount}</div>
                            )}
                        </div>
                        <div className="mb-1">
                            <span className="font-bold hover:underline">
                                {displayUsers[0].name}
                            </span>
                            {userCount > 1 && (
                                <span className="text-slate-300">
                                    {userCount === 2 ? " and " : ", "}
                                    <span className="font-bold hover:underline">
                                        {displayUsers[1]?.name}
                                    </span>
                                    {userCount > 2 && (
                                        <span className="text-slate-300">
                                            {userCount === 3 ? " and " : ", "}
                                            {userCount === 3 ? (
                                                <span className="font-bold hover:underline">
                                                    {displayUsers[2]?.name}
                                                </span>
                                            ) : (
                                                <span className="font-bold hover:underline">
                                                    and {remainingCount} other{remainingCount > 1 ? "s" : ""}
                                                </span>
                                            )}
                                        </span>
                                    )}
                                </span>
                            )}
                            <span className="text-slate-300">
                                {notification.type === "like" && " liked your post"}
                                {notification.type === "retweet" && " reposted your post"}
                                {notification.type === "follow" && " followed you"}
                                {notification.type === "mention" && " mentioned you"}
                                {notification.type === "reply" && " replied to your post"}
                            </span>
                        </div>
                        {notification.content && (
                            <p className="text-slate-400 text-sm">{notification.content}</p>
                        )}
                        <div className="text-slate-500 text-sm mt-1">{notification.timestamp}</div>
                    </div>
                    <button className="hover:bg-slate-800 p-2 rounded-full transition-colors h-fit">
                        <MoreHorizontal size={16} className="text-slate-500" />
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="flex">
                <main className="flex-1 w-2xl border-r border-slate-700">
                    {/* Header */}
                    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border border-slate-700">
                        <div className="flex items-center justify-between p-4">
                            <div className="flex items-center gap-8">
                                <Link href="/" className="hover:bg-slate-900 p-2 rounded-full transition-colors">
                                    <ArrowLeft size={20} />
                                </Link>
                                <h1 className="text-xl font-bold">Notifications</h1>
                            </div>
                            <button className="hover:bg-slate-900 p-2 rounded-full transition-colors">
                                <Settings size={20} />
                            </button>
                        </div>

                        {/* Tabs */}
                        <div className="flex border-b border-slate-700">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex-1 py-4 font-bold transition-colors border-b-2 ${activeTab === tab.id
                                        ? "border-blue-500 text-white"
                                        : "border-transparent text-slate-500 hover:text-white hover:bg-slate-900/40"
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </header>

                    {/* Notifications List */}
                    <div>
                        {notifications.map(renderNotification)}
                    </div>
                </main>
            </div>
        </div>
    );
}