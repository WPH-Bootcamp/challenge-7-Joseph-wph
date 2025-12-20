import ContactForm from "./ContactForm";

interface ContactSectionProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export default function ContactSection({ onSubmit }: ContactSectionProps) {
  return (
    <section className="bg-black text-white py-16">
      {/* layout / heading */}
<div className="max-w-3xl mx-auto px-4">
<h2 className="text-3xl md:text-4xl font-semibold text-center mb-2">
Ready to Start? Let's Talk.
</h2>
<p className="text-gray-400 text-center mb-10">
Tell us what you need, and we’ll get back to you soon.
</p>
</div>

      <ContactForm onSubmit={onSubmit} />
    </section>
  );
}
