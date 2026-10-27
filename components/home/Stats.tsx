export default function Stats() {
    return (
        <section className="bg-white py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 text-center">

                    <div>
                        <h3 className="text-5xl font-bold text-green-700">
                            500+
                        </h3>
                        <p>Questions</p>
                    </div>

                    <div>
                        <h3 className="text-5xl font-bold text-green-700">
                            10+
                        </h3>
                        <p>Categories</p>
                    </div>

                    <div>
                        <h3 className="text-5xl font-bold text-green-700">
                            25+
                        </h3>
                        <p>Mock Tests</p>
                    </div>

                    <div>
                        <h3 className="text-5xl font-bold text-green-700">
                            1000+
                        </h3>
                        <p>Community Members</p>
                    </div>

                </div>
            </div>
        </section>
    );
}