import AdRequestForm from "@/components/AdRequestForm";

export default function StartAdPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-orange-500 mb-6 text-center">
        Start Your Ad
      </h1>
      <p className="text-center text-gray-700 mb-10">
        Tell us your ad goal, budget, and audience — we'll handle the rest.
      </p>
      <AdRequestForm />
    </section>
  );
}
