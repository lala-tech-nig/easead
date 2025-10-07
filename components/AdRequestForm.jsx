"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdRequestForm() {
  const [form, setForm] = useState({ name: "", email: "", goal: "", budget: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/submitAd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      router.push("/thank-you");
    } catch (err) {
      alert("Submission failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        name="name"
        placeholder="Your Full Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full border rounded-lg p-3"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full border rounded-lg p-3"
      />
      <input
        type="text"
        name="goal"
        placeholder="Your Ad Goal (e.g. Promote my salon)"
        value={form.goal}
        onChange={handleChange}
        required
        className="w-full border rounded-lg p-3"
      />
      <input
        type="number"
        name="budget"
        placeholder="Your Budget (₦)"
        value={form.budget}
        onChange={handleChange}
        required
        className="w-full border rounded-lg p-3"
      />
      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Ad Request"}
      </button>
    </form>
  );
}
