const features = [
    {
        icon: "📚",
        title: "Interview Questions",
        description: "Curated questions from real interviews."
    },
    {
        icon: "🎯",
        title: "Mock Tests",
        description: "Timed assessments with scoring."
    },
    {
        icon: "📈",
        title: "Progress Tracking",
        description: "Track strengths and weaknesses."
    },
    {
        icon: "🔖",
        title: "Bookmarks",
        description: "Save important questions."
    }
];

export default function Features() {
    return (
        <section className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-center text-4xl font-bold">
                    Everything You Need
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="border bg-green-50 rounded-2xl p-6 hover:-translate-y-2 transition"
                        >
                            <div className="text-4xl">
                                {feature.icon}
                            </div>

                            <h3 className="font-semibold text-xl mt-4 text-green-700">
                                {feature.title}
                            </h3>

                            <p className="mt-3 text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}