import { useState } from "react";
import { industries } from "../../Data/Industries";

export default function IndustrySection() {
  const [active, setActive] = useState(industries[0]);

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-[1200px] mx-auto px-4 py-5">

        {/* Title */}
        <div className="text-left mb-20">
          <h2 className="text-4xl font-semibold">
            Built for Your Industry
          </h2>
          <p className="text-gray-400 mt-3">
            We've helped companies across industries launch smarter, faster,
            and more securely.
          </p>
        </div>

        <div className="
          flex flex-col gap-10
          md:flex-row md:justify-between md:items-start
          w-full max-w-[1440px] mx-auto
        ">

          {/* LEFT MENU */}
          <div className="flex flex-col gap-5">
            {industries.map((item) => {
              const isActive = item.id === active.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setActive(item)}
                  className="flex items-start gap-2 ml-2.5 cursor-pointer"
                >
                  <div
                    className={`
                      h-8 w-[5px] rounded-full transition-colors duration-300
                      ${isActive ? "bg-orange-500" : "bg-slate-500"}
                    `}
                  />
                  <h1
                    className={`
                      font-quicksand font-bold text-2xl leading-none
                      transition-colors duration-300
                      ${isActive ? "text-white" : "text-slate-500"}
                    `}
                  >
                    {item.label}
                  </h1>
                </div>
              );
            })}
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col w-full gap-3 md:w-[840px]">
            <div className="w-full px-2 pb-4">
              <p className="font-quicksand text-2xl leading-9">
                {active.desc}
              </p>
            </div>

            <div className="w-full h-auto md:h-[300px]">
              <img
                src={active.image}
                alt={active.label}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

