import { useState } from "react";


interface Props {
q: string;
a?: string;
}


export default function FAQItem({ q, a }: Props) {
const [open, setOpen] = useState(!!a);


return (
<div className="py-6">
<button
onClick={() => setOpen(!open)}
className="w-full flex justify-between items-center text-left"
>
<span className="text-lg font-medium">{q}</span>
<span className="text-2xl">{open ? "-" : "+"}</span>
</button>


{open && a && (
<p className="text-gray-400 mt-3 max-w-xl">{a}</p>
)}
</div>
);
}