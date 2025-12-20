import { useState } from "react";
import { testimonials } from "../../Data/Testimonials";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSlider() {
  const [active, setActive] = useState(0);

  return (
    <section id="Testimonials" className="bg-black text-white py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold">
            What Partners Say About Working With Us
          </h2>
          <p className="text-gray-400 mt-3">
            Trusted voices. Real experiences. Proven results.
          </p>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex justify-center px-4">
        <TestimonialCard item={testimonials[active]} />
      </div>

      {/* Desktop */}
      <div className="hidden md:flex relative max-w-6xl mx-auto justify-center items-center h-[420px]">
        {testimonials.map((item, index) => (
          <div
            key={item.id}
            className={`absolute transition-all duration-500 ${
              index === active
                ? "opacity-100 scale-100 z-20"
                : "opacity-30 scale-90 z-10"
            }`}
            style={{ transform: `translateX(${(index - active) * 360}px)` }}
          >
            <TestimonialCard item={item} />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2.5 h-2.5 rounded-full ${
              i === active ? "bg-orange-500" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
