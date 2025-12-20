import { useState } from "react";
import ContactSection from "./ContactSection";
import SuccessModal from "../../Modal/SuccessModal";
import ErrorModal from "../../Modal/ErrorModal";

export default function Contact() {
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      await new Promise((resolve, reject) =>
        setTimeout(() => (Math.random() > 0.3 ? resolve(true) : reject()), 1000)
      );

      setSuccessOpen(true);
    } catch {
      setErrorOpen(true);
    }
  };

  return (
    <>
      <ContactSection onSubmit={handleSubmit} />

      <SuccessModal open={successOpen} onClose={() => setSuccessOpen(false)} />

      <ErrorModal open={errorOpen} onClose={() => setErrorOpen(false)} />
    </>
  );
}
