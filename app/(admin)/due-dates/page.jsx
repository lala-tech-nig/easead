export default function DueDatesPage() {
  const dueList = [
    { client: "Tosin Foods", project: "Ad Boost", due: "2025-10-10" },
    { client: "Yemi Designs", project: "Brand Awareness", due: "2025-10-15" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold text-orange-500 mb-6">
        Upcoming Due Dates
      </h2>
      <ul className="space-y-4">
        {dueList.map((item, i) => (
          <li
            key={i}
            className="p-4 bg-white border rounded-lg flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{item.project}</p>
              <p className="text-sm text-gray-600">{item.client}</p>
            </div>
            <span className="text-orange-500 font-semibold">{item.due}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
