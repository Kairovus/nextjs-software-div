import { Search } from "lucide-react";
import type { Post } from "@/components/post-feed";
import PostFeed from "@/components/post-feed";
import PostComposer from "@/components/post-composer";





export default function HomePage() {
  const posts: Post[] = [];

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
          <h2 className="text-xl font-bold mb-4">What&apos;s happening?!</h2>
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
    </>
  );
}
