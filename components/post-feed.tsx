'use client';

import { Heart, MessageCircle, Share, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";

export interface Post {
  id: string;
  content: string;
  username: string;
  email: string;
  avatarUrl: string;
  likeCount: number;
  createdAt: Date;
  authorId: string;
}

interface PostFeedProps {
  posts: Post[];
}

export default function PostFeed({ posts }: PostFeedProps) {
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  const toggleLike = (postId: string) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  if (posts.length === 0) {
    return (
      <div className="border-b border-slate-700 p-8 text-center text-slate-500">
        <p>No posts yet. Be the first to post!</p>
      </div>
    );
  }

  return (
    <div>
      {posts.map((post) => (
        <article
          key={post.id}
          className="border-b border-slate-700 p-4 hover:bg-slate-900/40 transition-colors cursor-pointer"
        >
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
              {post.username.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold hover:underline">{post.username}</span>
                  <span className="text-slate-500 ml-2">@{post.email.split("@")[0]}</span>
                  <span className="text-slate-500 ml-2">·</span>
                  <span className="text-slate-500 ml-2">
                    {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                  </span>
                </div>
                <MoreHorizontal size={16} className="text-slate-500" />
              </div>
              <p className="mt-2 text-base text-white">{post.content}</p>
              <div className="mt-3 flex text-slate-500 gap-8 text-sm">
                <div className="flex items-center gap-2 hover:text-blue-400 group">
                  <div className="p-2 group-hover:bg-blue-400/10 rounded-full">
                    <MessageCircle size={16} />
                  </div>
                  <span>0</span>
                </div>
                <div className="flex items-center gap-2 hover:text-green-400 group">
                  <div className="p-2 group-hover:bg-green-400/10 rounded-full">
                    <Share size={16} />
                  </div>
                  <span>0</span>
                </div>
                <div
                  className="flex items-center gap-2 hover:text-red-400 group"
                  onClick={() => toggleLike(post.id)}
                >
                  <div className="p-2 group-hover:bg-red-400/10 rounded-full">
                    <Heart
                      size={16}
                      fill={likedPosts.has(post.id) ? "currentColor" : "none"}
                    />
                  </div>
                  <span>{post.likeCount + (likedPosts.has(post.id) ? 1 : 0)}</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
