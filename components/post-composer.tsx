'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PostComposer() {
  const router = useRouter();
  const [content, setContent] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const handlePost = async () => {
    if (!content.trim()) return;

    const userStr = localStorage.getItem('user');
    if (!userStr) {
      alert("Please sign in to post");
      return;
    }

    const user = JSON.parse(userStr);

    setIsPosting(true);
    try {
      const res = await fetch('/actions/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'create',
          content,
          authorId: user.id
        })
      });

      if (!res.ok) {
        throw new Error('Failed to create post');
      }

      console.log("Post created successfully");
      setContent("");
      router.refresh();
    } catch (error) {
      console.error("Failed to post:", error);
      alert("Failed to create post. Please try again.");
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <div className="border-b border-slate-700 p-4 px-20 w-full">
      <div className="flex gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
          U
        </div>
        <div className="flex-1">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full bg-transparent text-2xl text-white placeholder-slate-600 resize-none outline-none"
            placeholder="What's happening?!"
            rows={3}
          />
          <div className="flex justify-end mt-4">
            <button
              onClick={handlePost}
              disabled={!content.trim() || isPosting}
              className="bg-blue-500 text-white font-bold px-8 py-2 rounded-full hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPosting ? "Posting..." : "Post"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
