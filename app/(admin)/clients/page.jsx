export default function ClientsPage() {
  const clients = [
    { name: "Tosin Foods", contact: "tosin@example.com", projects: 3 },
    { name: "Yemi Designs", contact: "yemi@example.com", projects: 5 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold text-orange-500 mb-6">Clients</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {clients.map((client, i) => (
          <div
            key={i}
            className="p-6 border rounded-lg bg-white shadow hover:shadow-md transition"
          >
            <h3 className="text-xl font-bold text-gray-800">{client.name}</h3>
            <p className="text-gray-600">{client.contact}</p>
            <p className="text-gray-700 mt-2">
              Projects: <span className="font-semibold">{client.projects}</span>
            </p>
            <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
              View Projects
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
