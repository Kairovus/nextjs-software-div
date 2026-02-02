'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Home as HomeIcon, Search, Bell, Mail, User, LogOut } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  if (pathname === "/login" || pathname === "/register") return null;

  const navItems = [
    { icon: <HomeIcon size={20} />, label: "Home", href: "/home" },
    { icon: <Search size={20} />, label: "Explore", href: "/explore" },
    { icon: <Bell size={20} />, label: "Notifications", href: "/notifications" },
    { icon: <Mail size={20} />, label: "Messages", href: "/messages" },
    { icon: <User size={20} />, label: "Profile", href: "/profile" },
  ];

  const actions = [
    { label: "Post", href: "/actions/post" },
    { label: "Like", href: "/actions/like" },
    { label: "Follow", href: "/actions/follow" },
    { label: "User", href: "/actions/user" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login"); 
  };

  return (
    <aside className="w-64 border-r border-slate-700 p-4 sticky top-0 h-screen flex flex-col">
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

      {/* Logout Button */}
      <div className="mt-auto">
        <button
          onClick={handleLogout}
          className="flex items-center gap-4 text-xl hover:bg-slate-900 p-3 rounded-full transition-colors w-full text-left"
        >
          <LogOut size={20} />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
}
