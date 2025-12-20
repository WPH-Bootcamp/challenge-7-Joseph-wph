import TextInput from "./TextInput";
import TextArea from "./TextArea";
import ServicesCheckbox from "./ServicesCheckbox";

interface ContactFormProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <form onSubmit={onSubmit} className="space-y-8">
        <TextInput label="Name" placeholder="Enter your name" />
        <TextInput label="Email" placeholder="Enter your email" type="email" />
        <TextArea label="Message" placeholder="Enter your message" />

        <ServicesCheckbox />

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-4 rounded-full font-medium"
        >
          Send
        </button>
      </form>
    </div>
  );
}
