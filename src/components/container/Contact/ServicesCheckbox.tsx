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
      <p className="text-sm mb-4 text-gray-700 dark:text-gray-300">
        Services
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((service) => (
          <label
            key={service}
            className="relative flex items-center gap-3 text-sm cursor-pointer"
          >
            <input
              type="checkbox"
              className="
                peer appearance-none
                w-5 h-5 rounded-md
                bg-gray-100 border border-gray-300
                dark:bg-gray-900 dark:border-gray-700
                checked:bg-orange-500 checked:border-orange-500
                transition
              "
            />

            {/* CHECK ICON */}
            <span
              className="
                absolute left-0
                w-5 h-5 flex items-center justify-center
                text-white text-sm
                opacity-0 peer-checked:opacity-100
              "
            >
              ✓
            </span>

            <span className="ml-7 text-gray-800 dark:text-gray-200">
              {service}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

