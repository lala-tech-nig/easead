export default function SubmissionsPage() {
  const submissions = [
    {
      id: 1,
      name: "Kola Bakery",
      goal: "Increase foot traffic",
      budget: "₦10,000",
      date: "2025-10-05",
    },
    {
      id: 2,
      name: "Chika Boutique",
      goal: "Boost Instagram followers",
      budget: "₦15,000",
      date: "2025-10-06",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold text-orange-500 mb-6">
        Recent Ad Submissions
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg text-left">
          <thead className="bg-orange-100 text-orange-700">
            <tr>
              <th className="px-4 py-3">Business</th>
              <th className="px-4 py-3">Goal</th>
              <th className="px-4 py-3">Budget</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition-all"
              >
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3">{item.goal}</td>
                <td className="px-4 py-3">{item.budget}</td>
                <td className="px-4 py-3">{item.date}</td>
                <td className="px-4 py-3">
                  <button className="text-orange-500 hover:underline">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
