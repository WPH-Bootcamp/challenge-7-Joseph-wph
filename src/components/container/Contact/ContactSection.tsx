import ContactForm from "./ContactForm";

interface ContactSectionProps {
  onSubmit: (data: { name: string; email: string; message: string }) => void;
}

export default function ContactSection({ onSubmit }: ContactSectionProps) {
  return (
    <section className="py-16 bg-white text-gray-900 dark:bg-black dark:text-white transition-colors">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-2">
          Ready to Start? Let's Talk.
        </h2>
        <p className="text-center mb-10 text-gray-600 dark:text-gray-400">
          Tell us what you need, and we’ll get back to you soon.
        </p>
      </div>

      <ContactForm onSubmit={onSubmit} />
    </section>
  );
}
