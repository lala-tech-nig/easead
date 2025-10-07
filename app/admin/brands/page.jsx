export default function BrandsPage() {
  const brands = [
    { name: "CocaCola Nigeria", category: "Beverages" },
    { name: "ShopNow", category: "E-commerce" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold text-orange-500 mb-6">Brands</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {brands.map((brand, i) => (
          <div
            key={i}
            className="p-6 rounded-lg border bg-white shadow hover:shadow-md"
          >
            <h3 className="text-xl font-bold text-gray-800">{brand.name}</h3>
            <p className="text-gray-600">{brand.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
