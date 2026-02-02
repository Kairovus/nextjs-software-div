'use client';

import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

export default function Rightbar() {
    const pathname = usePathname();
    if (pathname === "/login" || pathname === "/register") return null;

    return (
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
                        <div
                            key={i}
                            className="hover:bg-slate-800 p-3 rounded cursor-pointer transition-colors"
                        >
                            <div className="text-sm text-slate-500">Trending Worldwide</div>
                            <div className="font-bold text-base">#ReactJS</div>
                            <div className="text-sm text-slate-500">1.2M Posts</div>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
        
    );
}
