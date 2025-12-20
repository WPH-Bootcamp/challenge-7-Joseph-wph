const links = [
  { label: "About", id: "About" },
  { label: "Service", id: "Services" },
  { label: "Projects", id: "Projects" },
  { label: "Testimonials", id: "Testimonials" },
  { label: "FAQ", id: "FAQ" },
];

export default function FooterNav() {
  return (
    <nav className="
      flex flex-col md:flex-row gap-6 text-sm
      text-gray-600
      dark:text-white/80
    ">
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className="
            cursor-pointer
            hover:text-orange-500
            transition-colors
          "
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

