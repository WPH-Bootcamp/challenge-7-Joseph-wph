import FooterNav from "./FooterNav";
import SocialIcons from "./SocialIcons";


export default function Footer() {
return (
<footer className="bg-black py-20">
<div className="max-w-6xl mx-auto px-4">
<div className="bg-gradient-to-b from-[#0B0F14] to-[#070A0F] rounded-3xl border border-white/10 p-10 md:p-14">
{/* TOP */}
<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
{/* LEFT */}
<div>
<h2 className="text-white text-3xl md:text-4xl font-semibold leading-tight">
LET'S DISCUSS<br />YOUR IDEAS
</h2>
</div>


{/* LOGO */}
<div className="md:mt-1">
<img
src="/assets/Logo.png"
alt="Logo"
className="h-8 w-auto"
/>
</div>
</div>


{/* DIVIDER */}
<div className="w-full h-px bg-white/10 my-10" />


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