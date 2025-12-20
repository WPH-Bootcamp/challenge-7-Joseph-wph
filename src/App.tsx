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
  return (
    <div className="min-h-screen bg-black text-white">
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
