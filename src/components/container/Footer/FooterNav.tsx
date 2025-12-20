const links = [
  { label: "About", id: "About" },
  { label: "Service", id: "Services" },
  { label: "Projects", id: "Projects" },
  { label: "Testimonials", id: "Testimonials" },
  { label: "FAQ", id: "FAQ" },
];

export default function FooterNav() {
  return (
    <nav className="flex flex-col md:flex-row gap-6 text-sm text-white/80">
      {links.map((link) => (
        <a
          href={`#${link.id}`}
          className="hover:text-orange-400 cursor-pointer"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
