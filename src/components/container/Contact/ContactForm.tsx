import { useState } from "react";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import ServicesCheckbox from "./ServicesCheckbox";

interface ContactFormProps {
  onSubmit: (data: {
    name: string;
    email: string;
    message: string;
  }) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="max-w-2xl mx-auto px-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({ name, email, message });
        }}
        className="space-y-8"
      >
        <TextInput
          label="Name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextInput
          label="Email"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextArea
          label="Message"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <ServicesCheckbox />

        <button
          type="submit"
          className="
            w-full py-4 rounded-full font-medium
            bg-orange-500 text-white
            hover:bg-orange-600 transition
          "
        >
          Send
        </button>
      </form>
    </div>
  );
}



