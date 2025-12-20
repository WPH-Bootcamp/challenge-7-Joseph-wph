const socials = [
  {
    name: "Facebook",
    dark: "/assets/Facebook-Dark.png",
    light: "/assets/Facebook-Light.svg",
  },
  {
    name: "Instagram",
    dark: "/assets/Instagram-Dark.png",
    light: "/assets/Instagram-Light.svg",
  },
  {
    name: "LinkedIn",
    dark: "/assets/Linkedin-Dark.png",
    light: "/assets/Linkedin-Light.svg",
  },
  {
    name: "TikTok",
    dark: "/assets/Tiktok-Dark.png",
    light: "/assets/Tiktok-Light.svg",
  },
];

export default function SocialIcons() {
  return (
    <div className="flex gap-4">
      {socials.map((item) => (
        <a
          key={item.name}
          href="#"
          className="
            w-10 h-10 rounded-full
            flex items-center justify-center
            border border-gray-300
            hover:border-gray-400

            dark:border-white/10
            dark:hover:border-white/30

            transition-colors
          "
        >
          {/* LIGHT MODE */}
          <img
            src={item.light}
            alt={item.name}
            className="w-4 h-4 dark:hidden"
          />

          {/* DARK MODE */}
          <img
            src={item.dark}
            alt={item.name}
            className="w-4 h-4 hidden dark:block"
          />
        </a>
      ))}
    </div>
  );
}
