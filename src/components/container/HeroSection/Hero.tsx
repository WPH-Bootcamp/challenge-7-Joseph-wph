import Button from "../../ui/Button";

export default function Hero() {
  return (
    <section id="About" className="bg-black text-white pt-32">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Your Tech Partner for{" "}
            <span className="text-orange-500">Smarter Growth</span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-md">
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </p>

          <Button
            label="Let's Talk"
            className="flex items-center justify-center px-10 py-4 mt-8"
          />
        </div>

        {/* Right Image */}
        <div className="w-full">
          <img
            src="/assets/image-hero.png"
            alt="Hero"
            className="w-full max-w-sm mx-auto md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
