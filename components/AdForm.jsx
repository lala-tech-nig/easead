"use client";
import { useState } from "react";

export default function AdForm() {
  const [form, setForm] = useState({
    businessName: "",
    goal: "",
    budget: "",
    contactEmail: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const res = await fetch("/api/submitAd", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);
    setMessage(data.success ? "Ad request submitted!" : "Error submitting ad.");
  };

  return (
    <section id="adform" className="py-20 bg-gray-50 px-6">
      <h2 className="text-3xl font-bold text-center text-orange-500 mb-10">Submit Your Ad Request</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow space-y-4"
      >
        <input
          required
          placeholder="Business Name"
          className="w-full border p-3 rounded-md"
          onChange={(e) => setForm({ ...form, businessName: e.target.value })}
        />
        <textarea
          required
          placeholder="Describe Your Ad Goal"
          className="w-full border p-3 rounded-md"
          rows={4}
          onChange={(e) => setForm({ ...form, goal: e.target.value })}
        />
        <input
          required
          type="number"
          placeholder="Budget (₦)"
          className="w-full border p-3 rounded-md"
          onChange={(e) => setForm({ ...form, budget: e.target.value })}
        />
        <input
          required
          type="email"
          placeholder="Contact Email"
          className="w-full border p-3 rounded-md"
          onChange={(e) => setForm({ ...form, contactEmail: e.target.value })}
        />
        <button
          disabled={loading}
          className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 w-full"
        >
          {loading ? "Submitting..." : "Submit Ad"}
        </button>
        {message && <p className="text-center text-sm text-gray-700 mt-2">{message}</p>}
      </form>
    </section>
  );
}
