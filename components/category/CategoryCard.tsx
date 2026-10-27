interface Props {
  title: string;
  description: string;
}

export default function CategoryCard({
  title,
  description,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-green-700">
        {title}
      </h3>

      <p className="mt-3 text-gray-600">
        {description}
      </p>
    </div>
  );
}