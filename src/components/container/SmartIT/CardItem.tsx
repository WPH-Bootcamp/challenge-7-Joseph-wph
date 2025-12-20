type Props = {
  image: string;
  title: string;
  desc: string;
};

export default function CardItem({ image, title, desc }: Props) {
  return (
    <div
      className="
      bg-slate-950 border border-slate-800 rounded-xl w-full px-6 py-2.5"
    >
      <img src={image} alt={title} className="w-20 -mt-12 ml-1" />

      <div className="p-3">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm mt-2">{desc}</p>
      </div>
    </div>
  );
}
