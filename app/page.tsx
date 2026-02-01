'use client';

import Link from "next/link";
import { Heart, MessageCircle, Share, Search, Home, Bell, Mail, Bookmark, User, MoreHorizontal } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [liked, setLiked] = useState<{ [key: number]: boolean }>({});

  const posts = [
    {
      id: 1,
      author: "Alex Dev",
      handle: "@alexdev",
      avatar: "👨‍💻",
      content: "Just launched my new project! Check it out and let me know what you think.",
      timestamp: "2h ago",
      likes: 234,
      replies: 45,
      retweets: 89,
    },
    {
      id: 2,
      author: "Sarah Code",
      handle: "@sarahcode",
      avatar: "👩‍💻",
      content: "React 19 is amazing. The new features are game-changers for performance.",
      timestamp: "4h ago",
      likes: 567,
      replies: 123,
      retweets: 234,
    },
    {
      id: 3,
      author: "Dev Tips",
      handle: "@devtips",
      avatar: "💡",
      content: "Pro tip: Use semantic HTML for better accessibility and SEO rankings.",
      timestamp: "6h ago",
      likes: 890,
      replies: 156,
      retweets: 445,
    },
  ];

  const navItems = [
    { icon: <Home size={20} />, label: "Home", href: "/" },
    { icon: <Search size={20} />, label: "Explore", href: "#" },
    { icon: <Bell size={20} />, label: "Notifications", href: "#" },
    { icon: <Mail size={20} />, label: "Messages", href: "#" },
    { icon: <Bookmark size={20} />, label: "Bookmarks", href: "#" },
    { icon: <User size={20} />, label: "Profile", href: "/profile" },
  ];

  const actions = [
    { label: "Post", href: "/actions/post" },
    { label: "Like", href: "/actions/like" },
    { label: "Follow", href: "/actions/follow" },
    { label: "User", href: "/actions/user" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-slate-700 p-4 sticky top-0 h-screen">
          {/* Logo */}
          <div className="text-2xl font-bold mb-8 text-blue-400">𝕏</div>

          {/* Navigation */}
          <nav className="space-y-6 mb-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 text-xl hover:bg-slate-900 p-3 rounded-full transition-colors"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Post Button */}
          <button className="w-full bg-blue-500 text-white font-bold py-3 rounded-full text-lg hover:bg-blue-600 transition-colors mb-8">
            Post
          </button>

          {/* Actions Section */}
          <div className="mt-8 pt-8 border-t border-slate-700">
            <h3 className="text-sm font-semibold text-slate-500 mb-4">FEATURES</h3>
            <div className="space-y-3">
              {actions.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className="block text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  → {action.label}
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Feed */}
        <main className="flex-1 max-w-2xl border-r border-slate-700">
          {/* Header */}
          <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-slate-700 p-4">
            <h2 className="text-xl font-bold">Home</h2>
          </header>

          {/* Post Composer */}
          <div className="border-b border-slate-700 p-4">
            <div className="flex gap-4">
              <div className="text-2xl">👤</div>
              <div className="flex-1">
                <textarea
                  className="w-full bg-transparent text-2xl text-white placeholder-slate-600 resize-none outline-none"
                  placeholder="What's happening?!"
                  rows={3}
                />
                <div className="flex justify-end mt-4">
                  <button className="bg-blue-500 text-white font-bold px-8 py-2 rounded-full hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Feed */}
          <div>
            {posts.map((post) => (
              <article
                key={post.id}
                className="border-b border-slate-700 p-4 hover:bg-slate-900/40 transition-colors cursor-pointer"
              >
                <div className="flex gap-4">
                  <div className="text-3xl">{post.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold hover:underline">{post.author}</span>
                        <span className="text-slate-500 ml-2">{post.handle}</span>
                        <span className="text-slate-500 ml-2">·</span>
                        <span className="text-slate-500 ml-2">{post.timestamp}</span>
                      </div>
                      <MoreHorizontal size={16} className="text-slate-500" />
                    </div>
                    <p className="mt-2 text-base text-white">{post.content}</p>
                    <div className="mt-3 flex text-slate-500 gap-8 text-sm">
                      <div className="flex items-center gap-2 hover:text-blue-400 group">
                        <div className="p-2 group-hover:bg-blue-400/10 rounded-full">
                          <MessageCircle size={16} />
                        </div>
                        {post.replies}
                      </div>
                      <div className="flex items-center gap-2 hover:text-green-400 group">
                        <div className="p-2 group-hover:bg-green-400/10 rounded-full">
                          <Share size={16} />
                        </div>
                        {post.retweets}
                      </div>
                      <div
                        className="flex items-center gap-2 hover:text-red-400 group"
                        onClick={() => setLiked((prev) => ({ ...prev, [post.id]: !prev[post.id] }))}
                      >
                        <div className="p-2 group-hover:bg-red-400/10 rounded-full">
                          <Heart size={16} fill={liked[post.id] ? "currentColor" : "none"} />
                        </div>
                        {post.likes + (liked[post.id] ? 1 : 0)}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-80 p-4 hidden lg:block">
          {/* Search */}
          <div className="bg-slate-900 rounded-full p-3 flex items-center gap-3 mb-6">
            <Search size={20} className="text-slate-500" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none w-full"
            />
          </div>

          {/* What's Happening */}
          <div className="bg-slate-900 rounded-2xl p-4 mb-4">
            <h2 className="text-xl font-bold mb-4">What's happening?!</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="hover:bg-slate-800 p-3 rounded cursor-pointer transition-colors">
                  <div className="text-sm text-slate-500">Trending Worldwide</div>
                  <div className="font-bold text-base">#ReactJS</div>
                  <div className="text-sm text-slate-500">1.2M Posts</div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
