import { useState } from "react";
import Button from "../../ui/Button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { label: "About", id: "About" },
    { label: "Service", id: "Services" },
    { label: "Projects", id: "Projects" },
    { label: "Testimonials", id: "Testimonials" },
    { label: "FAQ", id: "FAQ" },
  ];

  return (
    <nav
      className="
        fixed top-0 w-full z-50
        bg-white text-gray-900
        dark:bg-black dark:text-white
        transition-colors
      "
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div>
          {/* LIGHT */}
          <img
            src="/assets/Logo-Light.png"
            alt="logo"
            className="h-8 w-auto dark:hidden"
          />

          {/* DARK */}
          <img
            src="/assets/Logo-Dark.png"
            alt="logo"
            className="h-8 w-auto hidden dark:block"
          />
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-sm">
          {menu.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="
                  hover:text-orange-500
                  transition-colors
                "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* DESKTOP BUTTON */}
        <div className="hidden md:block">
          <Button label="Let's Talk" className="px-6 py-2 text-sm" />
        </div>

        {/* HAMBURGER */}
        <button
          className="md:hidden text-gray-900 dark:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            md:hidden
            bg-white text-gray-900
            dark:bg-black dark:text-white
            px-6 pb-6
            transition-colors
          "
        >
          <ul className="flex flex-col gap-6 text-sm">
            {menu.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="hover:text-orange-500"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <Button label="Let's Talk" className="w-full py-3 mt-6" />
        </div>
      )}
    </nav>
  );
}
