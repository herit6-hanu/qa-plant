const roadmap = [
    "Manual Testing",
    "API Testing",
    "SQL",
    "Java",
    "Selenium",
    "Framework Design"
];

export default function Roadmap() {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-center text-4xl font-bold mb-12">
                    QA Learning Roadmap
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {roadmap.map((step, index) => (
                        <div
                            key={step}
                            className="bg-white border rounded-2xl p-6"
                        >
                            <div className="text-3xl font-bold text-green-700">
                                0{index + 1}
                            </div>

                            <div className="mt-3 font-semibold">
                                {step}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}