'use client';


import { Search, Settings, MoreHorizontal, Heart, MessageCircle, Repeat2, Share } from "lucide-react";
import { useState } from "react";

export default function ExplorePage() {
    const [activeTab, setActiveTab] = useState("for-you");
    const [searchQuery, setSearchQuery] = useState("");

    const tabs = [
        { id: "for-you", label: "For you" },
        { id: "trending", label: "Trending" },
        { id: "news", label: "News" },
        { id: "sports", label: "Sports" },
        { id: "entertainment", label: "Entertainment" },
    ];

    const trendingTopics = [
        {
            id: 1,
            category: "Technology",
            title: "AI Development",
            posts: "125K",
            description: "Latest updates in artificial intelligence"
        },
        {
            id: 2,
            category: "Programming",
            title: "#NextJS",
            posts: "45.2K",
        },
        {
            id: 3,
            category: "Trending",
            title: "React 19",
            posts: "89.5K",
            description: "New React features announced"
        },
        {
            id: 4,
            category: "Technology",
            title: "TypeScript 5.0",
            posts: "32.1K",
        },
        {
            id: 5,
            category: "Developer Tools",
            title: "#VSCode",
            posts: "67.8K",
        },
    ];

    const explorePosts = [
        {
            id: 1,
            author: {
                name: "Tech Daily",
                handle: "@techdaily",
                avatar: "📱",
                verified: true,
            },
            content: "Breaking: New framework released that combines the best of React and Vue! 🚀",
            image: "🖼️",
            timestamp: "2h ago",
            likes: 1234,
            replies: 234,
            retweets: 456,
        },
        {
            id: 2,
            author: {
                name: "Dev Community",
                handle: "@devcom",
                avatar: "💻",
                verified: true,
            },
            content: "10 JavaScript tips that will make you a better developer. Thread 🧵👇",
            timestamp: "4h ago",
            likes: 2341,
            replies: 456,
            retweets: 789,
        },
        {
            id: 3,
            author: {
                name: "Code Master",
                handle: "@codemaster",
                avatar: "👨‍💻",
                verified: false,
            },
            content: "Just shipped my first Next.js 14 app with server components. The performance is insane! 🔥",
            timestamp: "6h ago",
            likes: 567,
            replies: 89,
            retweets: 123,
        },
        {
            id: 4,
            author: {
                name: "Web Dev Weekly",
                handle: "@webdevweekly",
                avatar: "🌐",
                verified: true,
            },
            content: "CSS Grid vs Flexbox: When to use which? A comprehensive guide for 2024",
            image: "📊",
            timestamp: "8h ago",
            likes: 890,
            replies: 145,
            retweets: 234,
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="flex">
                {/* Main Content */}
                <main className="flex-1 max-w-2xl border-r border-slate-700">
                    {/* Header with Search */}
                    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-slate-700">
                        <div className="p-4">
                            <div className="flex items-center gap-4">
                                <div className="flex-1 relative">
                                    <Search className="absolute left-4 top-3 transform text-slate-500 mt-3" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full bg-slate-900 text-white pl-12 pr-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <button className="hover:bg-slate-900 p-2 rounded-full transition-colors">
                                    <Settings size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex overflow-x-auto scrollbar-hide">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-6 py-4 font-bold transition-colors border-b-2 whitespace-nowrap ${activeTab === tab.id
                                        ? "border-blue-500 text-white"
                                        : "border-transparent text-slate-500 hover:text-white hover:bg-slate-900/40"
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </header>

                    {/* Content */}
                    <div>
                        {/* Trending Section */}
                        {activeTab === "trending" && (
                            <div className="border-b border-slate-700">
                                {trendingTopics.map((topic, index) => (
                                    <div
                                        key={topic.id}
                                        className="p-4 hover:bg-slate-900/40 transition-colors cursor-pointer border-b border-slate-700 last:border-b-0"
                                    >
                                        <div className="flex justify-between items-start">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                                                    <span>{index + 1}</span>
                                                    <span>·</span>
                                                    <span>{topic.category}</span>
                                                    <span>·</span>
                                                    <span>Trending</span>
                                                </div>
                                                <h3 className="font-bold text-base mb-1">{topic.title}</h3>
                                                {topic.description && (
                                                    <p className="text-sm text-slate-500 mb-1">{topic.description}</p>
                                                )}
                                                <div className="text-sm text-slate-500">{topic.posts} posts</div>
                                            </div>
                                            <button className="hover:bg-slate-800 p-2 rounded-full transition-colors">
                                                <MoreHorizontal size={16} className="text-slate-500" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Posts Feed */}
                        <div>
                            {explorePosts.map((post) => (
                                <article
                                    key={post.id}
                                    className="border-b border-slate-700 p-4 hover:bg-slate-900/40 transition-colors cursor-pointer"
                                >
                                    <div className="flex gap-4">
                                        <div className="text-3xl">{post.author.avatar}</div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <span className="font-bold hover:underline">{post.author.name}</span>
                                                    {post.author.verified && <span className="text-blue-400">✓</span>}
                                                    <span className="text-slate-500">{post.author.handle}</span>
                                                    <span className="text-slate-500">·</span>
                                                    <span className="text-slate-500">{post.timestamp}</span>
                                                </div>
                                                <button className="hover:bg-slate-800 p-2 rounded-full transition-colors">
                                                    <MoreHorizontal size={16} className="text-slate-500" />
                                                </button>
                                            </div>
                                            <p className="mt-2 text-base text-white">{post.content}</p>

                                            {post.image && (
                                                <div className="mt-3 bg-slate-900 rounded-2xl h-64 flex items-center justify-center text-6xl border border-slate-700">
                                                    {post.image}
                                                </div>
                                            )}

                                            <div className="mt-3 flex justify-between text-slate-500 text-sm max-w-md">
                                                <button className="flex items-center gap-2 hover:text-blue-400 group transition-colors">
                                                    <div className="p-2 group-hover:bg-blue-400/10 rounded-full transition-colors">
                                                        <MessageCircle size={18} />
                                                    </div>
                                                    <span>{post.replies}</span>
                                                </button>
                                                <button className="flex items-center gap-2 hover:text-green-400 group transition-colors">
                                                    <div className="p-2 group-hover:bg-green-400/10 rounded-full transition-colors">
                                                        <Repeat2 size={18} />
                                                    </div>
                                                    <span>{post.retweets}</span>
                                                </button>
                                                <button className="flex items-center gap-2 hover:text-red-400 group transition-colors">
                                                    <div className="p-2 group-hover:bg-red-400/10 rounded-full transition-colors">
                                                        <Heart size={18} />
                                                    </div>
                                                    <span>{post.likes}</span>
                                                </button>
                                                <button className="flex items-center gap-2 hover:text-blue-400 group transition-colors">
                                                    <div className="p-2 group-hover:bg-blue-400/10 rounded-full transition-colors">
                                                        <Share size={18} />
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </main>

                {/* Right Sidebar */}
                
            </div>
        </div>
    );
}