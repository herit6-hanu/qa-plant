export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-green-50 p-10">
      <h1 className="text-5xl font-bold text-green-700 mb-6">
        Categories 🌱
      </h1>

      <p className="text-gray-600 mb-10">
        Choose a topic and start preparing.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "Manual Testing",
          "API Testing",
          "SQL",
          "Java",
          "Selenium",
          "Playwright",
          "Cypress",
          "Agile",
          "Jira",
        ].map((category) => (
          <div
            key={category}
            className="bg-white rounded-xl p-6 shadow border"
          >
            <h2 className="text-xl font-semibold text-green-700">
              {category}
            </h2>
          </div>
        ))}
      </div>
    </main>
  );
}