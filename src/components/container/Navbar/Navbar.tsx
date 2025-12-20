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
    <nav className="fixed top-0 w-full z-50 bg-black text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <img src="/assets/logo-dark.png" alt="logo" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm">
          {menu.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="hover:text-orange-400 cursor-pointer"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button label="Let's Talk" className="px-6 py-2 text-sm" />
        </div>

        {/* Hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black px-6 pb-6">
          <ul className="flex flex-col gap-6 text-sm">
            {menu.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="hover:text-orange-400 cursor-pointer"
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
