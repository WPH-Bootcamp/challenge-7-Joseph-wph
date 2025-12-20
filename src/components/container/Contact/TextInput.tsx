interface Props {
label: string;
placeholder: string;
type?: string;
}


export default function TextInput({ label, placeholder, type = "text" }: Props) {
return (
<div>
<label className="block text-sm mb-2">{label}</label>
<input
type={type}
placeholder={placeholder}
className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:border-orange-500"
/>
</div>
);
}