interface Props {
label: string;
placeholder: string;
}


export default function TextArea({ label, placeholder }: Props) {
return (
<div>
<label className="block text-sm mb-2">{label}</label>
<textarea
rows={5}
placeholder={placeholder}
className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:border-orange-500 resize-none"
/>
</div>
);
}