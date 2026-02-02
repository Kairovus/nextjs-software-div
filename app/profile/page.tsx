'use client';

import Link from "next/link";
import { ArrowLeft, Camera, MapPin, Link as LinkIcon, Calendar, MoreHorizontal } from "lucide-react";
import { useState } from "react";

export default function ProfilePage() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState("posts");

  const profileData = {
    name: "Sarah Developer",
    handle: "@sarahdev",
    avatar: "👩‍💻",
    banner: "bg-gradient-to-r from-blue-600 to-purple-600",
    bio: "Full-stack developer | React enthusiast | Coffee lover ☕",
    location: "San Francisco, CA",
    website: "sarahdev.com",
    joined: "Joined March 2023",
    followersCount: 1250,
    followingCount: 342,
    postsCount: 428,
  };

  const tabs = [
    { id: "posts", label: "Posts" },
    { id: "replies", label: "Replies" },
    { id: "media", label: "Media" },
    { id: "likes", label: "Likes" },
  ];

  const samplePosts = [
    {
      id: 1,
      content: "Just released my new open-source project! Check it out on GitHub.",
      timestamp: "2h ago",
      likes: 234,
      replies: 45,
      retweets: 89,
    },
    {
      id: 2,
      content: "React Server Components are game-changers for performance.",
      timestamp: "5h ago",
      likes: 567,
      replies: 123,
      retweets: 234,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white border-r border-slate-700">
      <div className="flex">

        {/* Main Content */}
        <main className="flex-1 max-w-2xl">
          {/* Header */}
          <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-slate-700 p-4 flex items-center gap-4">
            <Link href="/" className="hover:bg-slate-900 p-2 rounded-full transition-colors">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h2 className="text-xl font-bold">{profileData.name}</h2>
              <p className="text-sm text-slate-500">{profileData.postsCount} posts</p>
            </div>
          </header>

          {/* Profile Card */}
          <div>
            {/* Banner */}
            <div className={`h-48 ${profileData.banner} relative`}>
              <button className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/90 p-3 rounded-full transition-colors">
                <Camera size={20} />
              </button>
            </div>

            {/* Profile Info */}
            <div className="px-4 pb-4 border-b border-slate-700">
              <div className="flex justify-between items-start -mt-16 mb-4">
                <div className="text-7xl">{profileData.avatar}</div>
                <button
                  onClick={() => setIsFollowing(!isFollowing)}
                  className={`px-6 py-2 rounded-full font-bold transition-colors ${isFollowing
                      ? "bg-slate-900 text-white border border-slate-700 hover:bg-slate-800"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                    }`}
                >
                  {isFollowing ? "Following" : "Follow"}
                </button>
              </div>

              <div className="mb-4">
                <h1 className="text-2xl font-bold">{profileData.name}</h1>
                <p className="text-slate-500">{profileData.handle}</p>
              </div>

              <p className="text-base mb-4">{profileData.bio}</p>

              <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  {profileData.location}
                </div>
                <div className="flex items-center gap-2">
                  <LinkIcon size={16} />
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    {profileData.website}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {profileData.joined}
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <span className="font-bold">{profileData.followingCount}</span>
                  <span className="text-slate-500">Following</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">{profileData.followersCount}</span>
                  <span className="text-slate-500">Followers</span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-slate-700 flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-4 font-bold transition-colors border-b-2 ${activeTab === tab.id
                      ? "border-blue-500 text-white"
                      : "border-transparent text-slate-500 hover:text-white"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Posts */}
            <div>
              {samplePosts.map((post) => (
                <article
                  key={post.id}
                  className="border-b border-slate-700 p-4 hover:bg-slate-900/40 transition-colors cursor-pointer"
                >
                  <div className="flex gap-4">
                    <div className="text-3xl">👩‍💻</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-bold hover:underline">{profileData.name}</span>
                          <span className="text-slate-500 ml-2">{profileData.handle}</span>
                          <span className="text-slate-500 ml-2">·</span>
                          <span className="text-slate-500 ml-2">{post.timestamp}</span>
                        </div>
                        <MoreHorizontal size={16} className="text-slate-500" />
                      </div>
                      <p className="mt-2 text-base text-white">{post.content}</p>
                      <div className="mt-3 flex text-slate-500 gap-8 text-sm">
                        <div className="flex items-center gap-2 hover:text-blue-400 group">
                          <div className="p-2 group-hover:bg-blue-400/10 rounded-full">💬</div>
                          {post.replies}
                        </div>
                        <div className="flex items-center gap-2 hover:text-green-400 group">
                          <div className="p-2 group-hover:bg-green-400/10 rounded-full">🔄</div>
                          {post.retweets}
                        </div>
                        <div className="flex items-center gap-2 hover:text-red-400 group">
                          <div className="p-2 group-hover:bg-red-400/10 rounded-full">❤️</div>
                          {post.likes}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}
