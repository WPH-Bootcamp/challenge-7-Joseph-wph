import { useState } from "react";
import { testimonials } from "../../Data/Testimonials";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSlider() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="Testimonials"
      className="
        py-16
        bg-white text-gray-900
        dark:bg-black dark:text-white
        transition-colors duration-300
      "
    >
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold">
            What Partners Say About Working With Us
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Trusted voices. Real experiences. Proven results.
          </p>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden flex justify-center px-4">
        <TestimonialCard item={testimonials[active]} />
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex relative max-w-6xl mx-auto justify-center items-center h-[420px] overflow-hidden">
        {testimonials.map((item, index) => {
          const offset = index - active;

          return (
            <div
              key={item.id ?? index}
              className={`
                absolute transition-all duration-500 ease-out
                ${
                  offset === 0
                    ? "opacity-100 scale-100 z-20"
                    : "opacity-30 scale-90 z-10"
                }
              `}
              style={{
                transform: `translateX(${offset * 360}px)`,
              }}
            >
              <TestimonialCard item={item} />
            </div>
          );
        })}
      </div>

      {/* ================= DOTS ================= */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`
              w-2.5 h-2.5 rounded-full transition-colors
              ${
                i === active
                  ? "bg-orange-500"
                  : "bg-gray-300 dark:bg-gray-600"
              }
            `}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

