import Link from "next/link";

export default function CTA() {
    return (
        <section className="py-24">
            <div className="max-w-5xl mx-auto px-6">

                <div className="rounded-3xl bg-gradient-to-r from-green-600 to-green-700 text-white p-12 text-center">

                    <h2 className="text-4xl font-bold">
                        Ready To Grow Your QA Career?
                    </h2>

                    <p className="mt-4 text-green-100">
                        Start preparing with QA Plant today.
                    </p>

                    <Link
                        href="/categories"
                        className="inline-block mt-8 bg-white text-green-700 font-semibold px-8 py-4 rounded-xl"
                    >
                        Start Learning
                    </Link>

                </div>
            </div>
        </section>
    );
}