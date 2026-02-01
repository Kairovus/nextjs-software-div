import Link from "next/link";
import { Heart, Search, Home as HomeIcon, Bell, Mail, Bookmark, User, MoreHorizontal } from "lucide-react";
import PostFeed from "@/components/post-feed";
import PostComposer from "@/components/post-composer";

export default function HomePage() {
  const posts = [];

  const navItems = [
    { icon: <HomeIcon size={20} />, label: "Home", href: "/" },
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

          <PostComposer />
          <PostFeed posts={posts} />
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
