const features = [
    "AI Mock Interview",
    "Resume Review",
    "Interview Simulator",
    "Coding Playground",
];

export default function FutureFeatures() {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-center text-4xl font-bold">
                    Coming Soon 🚀
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

                    {features.map((item) => (
                        <div
                            key={item}
                            className="rounded-2xl border-2 border-dashed border-green-300 p-6 text-center bg-green-50"
                        >
                            <h3 className="font-semibold text-green-700">
                                {item}
                            </h3>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}