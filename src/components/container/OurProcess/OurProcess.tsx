import { processSteps } from "../../Data/Process";

export default function OurProcess() {
  return (
    <section className="py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white">
            Our Process
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Clear steps. Smart execution. Results you can count on.
          </p>
        </div>

        <div className="relative">
          {/* Center Line */}
          <div
            className="
          absolute top-11 left-6 md:left-1/2 md:-translate-x-1/2
          h-[750px] md:h-[900px] w-[2px]
          bg-gray-300 dark:bg-gray-700
        "
          />

          <div className="flex flex-col gap-10 md:gap-16">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className={`
              relative flex items-start md:items-center
              ${
                step.side === "left"
                  ? "md:justify-start md:pr-[52%]"
                  : "md:justify-end md:pl-[52%]"
              }
            `}
              >
                {/* Step Circle */}
                <div
                  className="
                flex-shrink-0 w-10 h-10 rounded-full
                bg-orange-500
                flex items-center justify-center
                font-semibold text-white
                md:absolute md:left-1/2 md:-translate-x-1/2
                mt-2
              "
                >
                  {step.id}
                </div>

                {/* Card */}
                <div
                  className="
                ml-4 md:ml-0
                w-full max-w-[500px] h-[116px]
                rounded-2xl px-6 py-5
                bg-gray-100 dark:bg-[#0b0f14]
                shadow-md dark:shadow-lg
              "
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <span className="text-gray-400 dark:text-gray-500">⌃</span>
                  </div>

                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
