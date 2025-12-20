import { useEffect } from "react";

import Hero from "./components/container/HeroSection/Hero";
import Navbar from "./components/container/Navbar/Navbar";
import Trusted from "./components/container/Trusted/Trusted";
import EndToEnd from "./components/container/EndToEnd/EndToEnd";
import OurProcess from "./components/container/OurProcess/OurProcess";
import SmartIT from "./components/container/SmartIT/SmartIT";
import Build from "./components/container/Build/Build";
import FromVision from "./components/container/FromVision/FromVision";
import TestimonialsSlider from "./components/container/Testimonials/TestimonialsSlider";
import FAQ from "./components/container/Faq/FAQ";
import Contact from "./components/container/Contact/Contact";
import Footer from "./components/container/Footer/Footer";

function App() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      document.documentElement.classList.toggle("dark", media.matches);
    };

    applyTheme();
    media.addEventListener("change", applyTheme);

    return () => {
      media.removeEventListener("change", applyTheme);
    };
  }, []);

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      <Navbar />
      <Hero />
      <Trusted />
      <EndToEnd />
      <OurProcess />
      <SmartIT />
      <Build />
      <FromVision />
      <TestimonialsSlider />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

