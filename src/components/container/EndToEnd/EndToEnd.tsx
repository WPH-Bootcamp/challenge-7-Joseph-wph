import EndToEndCard from "./EndToEndCard";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "5+", label: "Years of Experience" },
  { value: "10+", label: "Industry Awards Won" },
  { value: "100%", label: "Client Satisfaction Rate" },
];

export default function EndToEnd() {
  return (
    <section className=" py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            End-to-End IT Solutions That Drive Results
          </h2>
          <p className="text-gray-400 mt-4 max-w-[600px] mx-auto">
            From strategy to execution, we deliver solutions that grow your
            business.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
          {stats.map((item, index) => (
            <EndToEndCard key={index} value={item.value} label={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
