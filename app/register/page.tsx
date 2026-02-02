'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, User as UserIcon } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch('/actions/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'register', username: formData.name, email: formData.email, password: formData.password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || 'Registration failed');
        setIsLoading(false);
        return;
      }

      // Save user session
      localStorage.setItem('user', JSON.stringify(data.user));

      // on success, navigate to a content page
      router.push('/home');
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
            <h1 className="text-3xl font-bold mb-2">Create account</h1>
            <p className="text-slate-500">Join the conversation today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div className="relative">
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <div className="relative flex items-center">
                <UserIcon className="absolute left-4 text-slate-500" size={20} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-slate-900 text-white rounded-lg py-3 pl-12 pr-4 border border-slate-700 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="relative">
              <label className="block text-sm font-medium mb-2">Email</label>
              <div className="relative flex items-center">
                <Mail className="absolute left-4 text-slate-500" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-slate-900 text-white rounded-lg py-3 pl-12 pr-4 border border-slate-700 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="relative">
              <label className="block text-sm font-medium mb-2">Confirm Password</label>
              <div className="relative flex items-center">
                <Lock className="absolute left-4 text-slate-500" size={20} />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-slate-900 text-white rounded-lg py-3 pl-12 pr-4 border border-slate-700 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-500 text-white font-bold py-3 rounded-full hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            >
              {isLoading ? "Creating account..." : "Sign up"}
            </button>
          </form>

          {/* Terms */}
          <p className="text-xs text-slate-500 text-center">
            By signing up, you agree to our{" "}
            <Link href="#" className="text-blue-400 hover:text-blue-300">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-blue-400 hover:text-blue-300">
              Privacy Policy
            </Link>
          </p>

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-slate-500">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-400 hover:text-blue-300 font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
