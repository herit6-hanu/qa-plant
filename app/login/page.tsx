"use client";
import Link from "next/link";
import { Sprout } from "lucide-react";
import { signIn } from "next-auth/react";
export default function LoginPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 flex items-center justify-center px-6">
            <div className="w-full max-w-md">

                {/* Logo */}
                <div className="text-center mb-8">
                    <div className="flex justify-center items-center gap-2">
                        <h1 className="text-4xl font-extrabold text-green-700">
                            QA Plant
                        </h1>

                        <div className="translate-y-1">
                            <Sprout
                                size={40}
                                className="text-green-600"
                                strokeWidth={2.5}
                            />
                        </div>
                    </div>

                    <p className="text-gray-500 mt-4">
                        Learn 🌱 Practice 🌿 Grow 🌳 Get Hired 🚀
                    </p>
                </div>

                {/* Card */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">

                    <h2 className="text-3xl font-bold text-center text-gray-900">
                        Welcome Back
                    </h2>

                    <p className="text-center text-gray-500 mt-2">
                        Continue your QA preparation journey
                    </p>

                    {/* OAuth Buttons */}
                    <div className="mt-8 space-y-4">

                        <button
                            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                            className="w-full border border-gray-300 rounded-xl py-3 px-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition font-semibold shadow-sm cursor-pointer"
                        >
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                alt="Google"
                                className="w-5 h-5"
                            />

                            Continue with Google
                        </button>

                        <button className="w-full border border-gray-300 rounded-xl py-3 px-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition font-semibold shadow-sm">
                            <img
                                src="https://www.svgrepo.com/show/512317/github-142.svg"
                                alt="GitHub"
                                className="w-5 h-5"
                            />
                            Continue with GitHub
                        </button>

                    </div>

                    {/* Divider */}
                    <div className="relative my-8">
                        <div className="border-t"></div>

                        <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-3 text-sm text-gray-400">
                            OR
                        </span>
                    </div>

                    {/* Email Form */}
                    <form className="space-y-4">

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                        />

                        <div className="flex justify-end">
                            <Link
                                href="#"
                                className="text-sm text-green-700 hover:underline"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        <a
                            href="/dashboard"
                            className="block text-center w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-3 font-semibold transition"
                        >
                            Sign In
                        </a>

                    </form>

                    {/* Guest Mode */}
                    <button className="w-full mt-4 border border-green-600 text-green-700 rounded-xl py-3 font-semibold hover:bg-green-50 transition">
                        Continue as Guest
                    </button>

                    {/* Register */}
                    <p className="text-center text-gray-500 mt-6">
                        New to QA Plant?{" "}
                        <Link
                            href="/register"
                            className="text-green-700 font-semibold hover:underline"
                        >
                            Create Account
                        </Link>
                    </p>

                </div>

            </div>
        </main>
    );
}