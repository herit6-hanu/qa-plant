import Link from "next/link";
import { Sprout } from "lucide-react";
export default function Navbar() {
    return (
        <header className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-2xl font-bold text-green-700"
                >
                    <span>QA Plant</span>

                    <Sprout
                        size={26}
                        strokeWidth={2.5}
                        className="text-green-600"
                    />
                </Link>

                <nav className="hidden md:flex gap-8 text-gray-700">
                    <Link href="/">Home</Link>
                    <Link href="/categories">Categories</Link>
                    <Link href="/questions">Questions</Link>
                    <Link href="/mock-tests">Mock Tests</Link>
                    <Link href="/dashboard">Dashboard</Link>
                </nav>

                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    Login
                </button>
            </div>
        </header>
    );
}