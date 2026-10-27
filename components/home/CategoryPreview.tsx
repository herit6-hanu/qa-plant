import CategoryCard from "@/components/category/CategoryCard";
import { categories } from "@/data/categories";

export default function CategoryPreview() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-10">
        Popular Categories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            description={category.description}
          />
        ))}
      </div>
    </section>
  );
}