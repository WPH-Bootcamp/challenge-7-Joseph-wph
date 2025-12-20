const socials = [
  { name: "Facebook", src: "/assets/Facebook.png" },
  { name: "Instagram", src: "/assets/Instagram.png" },
  { name: "LinkedIn", src: "/assets/Linkedin.png" },
  { name: "TikTok", src: "/assets/Tiktok.png" },
];

export default function SocialIcons() {
  return (
    <div className="flex gap-4">
      {socials.map((item) => (
        <a
          key={item.name}
          href="#"
          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 transition"
        >
          <img src={item.src} alt={item.name} className="w-3 h-3" />
        </a>
      ))}
    </div>
  );
}
