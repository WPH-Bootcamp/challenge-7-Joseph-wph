import FAQList from "./FAQList";
import ConsultationCard from "./ConsultationCard";

export default function FAQSection() {
  return (
    <section id="FAQ" className="bg-black text-white py-16">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-semibold mb-2">Need Help? Start Here.</h2>
        <p className="text-gray-400 mb-6">
          Everything you need to know — all in one place.
        </p>
      </div>

      {/* DIVIDER */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="w-full h-px bg-white/10" />
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* FAQ */}
        <div className="md:col-span-2">
          <FAQList />
        </div>

        {/* DESKTOP CARD */}
        <div className="hidden md:block self-start">
          <ConsultationCard />
        </div>
      </div>

      {/* MOBILE CARD */}
      <div className="md:hidden px-4 mt-12">
        <ConsultationCard />
      </div>
    </section>
  );
}
