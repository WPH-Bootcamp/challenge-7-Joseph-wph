import FooterNav from "./FooterNav";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="py-20 dark:bg-black transition-colors">
      <div className="max-w-6xl mx-auto px-4">
        <div
          className="
            rounded-3xl p-10 md:p-14
            border border-gray-200
            bg-gray-100
            dark:bg-gradient-to-b dark:from-[#0B0F14] dark:to-[#070A0F]
            dark:border-white/10
            transition-colors
          "
        >
          {/* TOP */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            {/* LEFT */}
            <div>
              <h2
                className="
                text-3xl md:text-4xl font-semibold leading-tight
                text-gray-900
                dark:text-white
              "
              >
                LET&apos;S DISCUSS
                <br />
                YOUR IDEAS
              </h2>
            </div>

            {/* LOGO */}
            <div className="md:mt-1">
              {/* LIGHT MODE */}
              <img
                src="/assets/Logo-Light.png"
                alt="Logo"
                className="h-8 w-auto dark:hidden"
              />

              {/* DARK MODE */}
              <img
                src="/assets/Logo-Dark.png"
                alt="Logo"
                className="h-8 w-auto hidden dark:block"
              />
            </div>
          </div>

          {/* DIVIDER */}
          <div className="w-full h-px my-10 bg-gray-200 dark:bg-white/10" />

          {/* BOTTOM */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <FooterNav />
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
}
