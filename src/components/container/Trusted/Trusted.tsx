export default function Trusted() {
  return (
    <div className="brand justify-around">
  <div className="px-2 py-2 text-center">
    <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
      Trusted by Global Innovators & Leading Brands
    </h1>
  </div>

  <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden py-20 mt-10">
    {/* LEFT GRADIENT */}
    <div
      className="
        absolute left-0 top-0 h-full w-32 z-10 pointer-events-none
        bg-gradient-to-r from-white to-transparent
        dark:from-slate-950
      "
    />

    {/* RIGHT GRADIENT */}
    <div
      className="
        absolute right-0 top-0 h-full w-32 z-10 pointer-events-none
        bg-gradient-to-l from-white to-transparent
        dark:from-slate-950
      "
    />

    {/* LOGO SLIDER */}
    <div
      className="
        flex gap-12 whitespace-nowrap animate-slide-left
        mix-blend-multiply
        dark:mix-blend-luminosity
      "
    >
      {/* LOGO LIST */}
      {[
        "company-logo-1.png",
        "company-logo-2.png",
        "company-logo-3.png",
        "company-logo-4.png",
        "company-logo-5.png",
        "company-logo-6.png",
        "company-logo-7.png",
        "company-logo-8.png",
        "company-logo-9.png",
      ].map((logo, i) => (
        <img
          key={i}
          src={`/assets/${logo}`}
          alt="Company logo"
          className="h-16 md:h-20 object-contain inline-block"
        />
      ))}

      {/* DUPLICATE FOR LOOP */}
      {[
        "company-logo-1.png",
        "company-logo-2.png",
        "company-logo-3.png",
        "company-logo-4.png",
        "company-logo-5.png",
        "company-logo-6.png",
        "company-logo-7.png",
        "company-logo-8.png",
        "company-logo-9.png",
      ].map((logo, i) => (
        <img
          key={`dup-${i}`}
          src={`/assets/${logo}`}
          alt="Company logo"
          className="h-16 md:h-20 object-contain inline-block"
        />
      ))}
    </div>
  </div>
</div>

  );
}
