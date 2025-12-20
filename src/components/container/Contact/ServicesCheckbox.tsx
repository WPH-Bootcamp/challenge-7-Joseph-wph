const services = [
"Web Development",
"Mobile App Development",
"UI/UX Design",
"Cloud Solutions",
"Software Development",
"Other",
];


export default function ServicesCheckbox() {
  return (
    <div>
      <p className="text-sm mb-4">Services</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((service) => (
          <label
            key={service}
            className="flex items-center gap-3 text-sm cursor-pointer"
          >
            <input
              type="checkbox"
              className="
                peer
                appearance-none
                w-5 h-5
                rounded-md
                bg-black
                border
                border-slate-600
                checked:bg-orange-500
                checked:border-orange-500
                focus:outline-none
                transition
              "
            />

            {/* CHECK ICON */}
            <span
              className="
                absolute
                w-5 h-5
                flex items-center justify-center
                pointer-events-none
                text-white
                text-sm
                opacity-0
                peer-checked:opacity-100
              "
            >
              ✓
            </span>

            <span className="ml-7">{service}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
