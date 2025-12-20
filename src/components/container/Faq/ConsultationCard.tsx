export default function ConsultationCard() {
  return (
    <div className="bg-[#C05A3A] rounded-3xl p-6 text-white shadow-lg">
      <h3 className="text-2xl font-semibold mb-2">Let’s talk it through</h3>
      <p className="text-sm opacity-90 mb-4">
        book a free consultation with our team.
      </p>

      <img
        src="/assets/Consultation.png"
        alt="Consultation"
        className="w-full
    rounded-xl
    mb-4
    object-cover
    h-auto
    md:h-[260px]"
      />

      <button className="w-full bg-white text-black font-medium py-3 rounded-full">
        Free Consultation
      </button>
    </div>
  );
}
