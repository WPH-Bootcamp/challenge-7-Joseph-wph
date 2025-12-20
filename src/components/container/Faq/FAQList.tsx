import FAQItem from "./FAQItem";


const faqs = [
{
q: "What services do you offer?",
a: "We provide custom web/app development, cloud solutions, UX/UI design, and more.",
},
{ q: "How do I know if this is right for my business?" },
{ q: "How much does a project cost?" },
{ q: "How long does it take?" },
{ q: "Can I start with a small project first?" },
];


export default function FAQList() {
return (
<div className="divide-y divide-white/10">
{faqs.map((item, i) => (
<FAQItem key={i} {...item} />
))}
</div>
);
}