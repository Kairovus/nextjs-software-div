'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch('/actions/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'signin', email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || 'Sign in failed');
        setIsLoading(false);
        return;
      }

      // Save user session
      localStorage.setItem('user', JSON.stringify(data.user));

      // on success, navigate to a content page
      router.push('/explore');
    } catch (err) {
      setError('Network error');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-4xl font-bold mb-12 text-center text-blue-400">𝕏</div>

        {/* Form Container */}
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Sign in</h1>
            <p className="text-slate-500">Welcome back to the conversation</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div className="relative">
              <label className="block text-sm font-medium mb-2">Email</label>
              <div className="relative flex items-center">
                <Mail className="absolute left-4 text-slate-500" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-slate-900 text-white rounded-lg py-3 pl-12 pr-4 border border-slate-700 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="relative">
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative flex items-center">
                <Lock className="absolute left-4 text-slate-500" size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-900 text-white rounded-lg py-3 pl-12 pr-4 border border-slate-700 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Error */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-500 text-white font-bold py-3 rounded-full hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-black text-slate-500">or</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3">
            <button className="w-full border border-slate-700 text-white font-bold py-3 rounded-full hover:bg-slate-900 transition-colors">
              Sign in with Google
            </button>
            <button className="w-full border border-slate-700 text-white font-bold py-3 rounded-full hover:bg-slate-900 transition-colors">
              Sign in with GitHub
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-slate-500">
              Don't have an account?{" "}
              <Link href="/register" className="text-blue-400 hover:text-blue-300 font-semibold">
                Sign up
              </Link>
            </p>
          </div>

          {/* Forgot Password */}
          <div className="text-center">
            <Link href="#" className="text-blue-400 hover:text-blue-300 text-sm">
              Forgot password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
