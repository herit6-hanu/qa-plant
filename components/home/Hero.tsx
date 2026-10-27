import Link from "next/link";
import { Sprout } from "lucide-react";
export default function Hero() {
    return (
        <section className="relative overflow-hidden py-28">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-green-200 blur-3xl opacity-30" />
            </div>

            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-700 font-medium">
                    🚀 QA Interview Preparation Platform
                </div>

                <h1 className="mt-8 flex items-center justify-center gap-3">
                    <span className="text-5xl md:text-7xl font-extrabold text-green-700 leading-none">
                        QA Plant
                    </span>

                    <div className="translate-y-0.5">
                        <Sprout
                            size={60}
                            strokeWidth={2.5}
                            className="text-green-600"
                        />
                    </div>
                </h1>


                <h2 className="mt-4 text-gray-900 text-3xl md:text-5xl font-bold">
                    Crack Your QA Interview With Confidence
                </h2>

                <p className="mt-8 text-xl md:text-2xl text-green-700 font-semibold">
                    Learn 🌱 Practice 🌿 Grow 🌳 Get Hired 🚀
                </p>

                <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-relaxed">
                    Master Manual Testing, API Testing, SQL, Java,
                    Selenium, Playwright and Automation Testing with
                    structured learning paths and real interview questions.
                </p>

                <div className="mt-12 flex flex-wrap justify-center gap-4">
                    <Link
                        href="/categories"
                        className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold"
                    >
                        Start Learning
                    </Link>

                    <Link
                        href="/categories"
                        className="border border-green-600 text-green-700 px-8 py-4 rounded-xl font-semibold hover:bg-green-50"
                    >
                        Explore Categories
                    </Link>
                </div>
            </div>
        </section>
    );
}