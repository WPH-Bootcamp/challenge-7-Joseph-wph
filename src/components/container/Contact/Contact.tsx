import { useState } from "react";
import ContactSection from "./ContactSection";
import SuccessModal from "../../Modal/SuccessModal";
import ErrorModal from "../../Modal/ErrorModal";

export default function Contact() {
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  const handleSubmit = async (data: {
    name: string;
    email: string;
    message: string;
  }) => {
    // ❌ VALIDASI
    if (!data.name || !data.email || !data.message) {
      setErrorOpen(true);
      return;
    }

    try {
      // simulasi API
      await new Promise((resolve) => setTimeout(resolve, 1000));
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

