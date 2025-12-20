import Button from "../../ui/Button";

export default function Hero() {
  return (
    <section
      id="About"
      className="
        pt-32
        bg-white text-gray-900
        dark:bg-black dark:text-white
        transition-colors
      "
    >
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Your Tech Partner for{" "}
            <span className="text-orange-500">Smarter Growth</span>
          </h1>

          <p className="mt-6 max-w-md text-gray-600 dark:text-gray-400">
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </p>

          <Button
            label="Let's Talk"
            className="flex items-center justify-center px-10 py-4 mt-8"
          />
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          {/* LIGHT MODE IMAGE */}
          <img
            src="/assets/Image-Hero-Light.svg"
            alt="Hero Light"
            className="
              w-full
              max-w-sm
              md:max-w-full
              mx-auto
              block
              dark:hidden
            "
          />

          {/* DARK MODE IMAGE */}
          <img
            src="/assets/Image-Hero-Dark.png"
            alt="Hero Dark"
            className="
              w-full
              max-w-sm
              md:max-w-full
              mx-auto
              hidden
              dark:block
            "
          />
        </div>
      </div>
    </section>
  );
}
