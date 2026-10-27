"use client";

import { useSession, signOut } from "next-auth/react";

export default function DashboardPage() {
    const { data: session } = useSession();

    return (
        <main className="min-h-screen p-10">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold text-green-700">
                    Welcome {session?.user?.name} 👋
                </h1>

                <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                    Logout
                </button>
            </div>

            <div className="mt-8 bg-white p-6 rounded-2xl shadow">

                {session?.user?.image && (
                    <img
                        src={session.user.image}
                        alt="Profile"
                        className="w-24 h-24 rounded-full mb-4"
                    />
                )}

                <p>
                    <strong>Name:</strong> {session?.user?.name}
                </p>

                <p>
                    <strong>Email:</strong> {session?.user?.email}
                </p>

            </div>
        </main>
    );
}