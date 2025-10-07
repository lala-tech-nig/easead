export default function AdminDashboard() {
  const stats = [
    { label: "Total Submissions", value: 45 },
    { label: "Active Clients", value: 22 },
    { label: "Ongoing Projects", value: 12 },
    { label: "Upcoming Deadlines", value: 7 },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-orange-500 mb-4">Overview</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-gray-50 border border-gray-200 text-center shadow-sm"
          >
            <p className="text-3xl font-semibold text-orange-600 mb-1">
              {stat.value}
            </p>
            <p className="text-gray-700">{stat.label}</p>
          </div>
        ))}
      </div>

      <section className="mt-10">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          Quick Actions
        </h3>
        <div className="flex flex-wrap gap-4">
          {["Add Client", "Add Brand", "New Project", "Review Submissions"].map(
            (btn, i) => (
              <button
                key={i}
                className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
              >
                {btn}
              </button>
            )
          )}
        </div>
      </section>
    </div>
  );
}
