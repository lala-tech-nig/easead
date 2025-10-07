export default function ProjectsPage() {
  const projects = [
    { title: "Ad for Tosin Foods", status: "Ongoing", due: "2025-10-20" },
    { title: "Yemi Designs Brand Push", status: "Pending", due: "2025-10-25" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold text-orange-500 mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="p-6 border rounded-lg bg-white shadow hover:shadow-md"
          >
            <h3 className="text-lg font-bold">{p.title}</h3>
            <p className="text-gray-700 mt-2">
              Status:{" "}
              <span
                className={`font-semibold ${
                  p.status === "Ongoing"
                    ? "text-orange-500"
                    : "text-gray-500"
                }`}
              >
                {p.status}
              </span>
            </p>
            <p className="text-gray-700">Due: {p.due}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
