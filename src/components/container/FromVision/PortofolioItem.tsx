type Props = {
  image: string;
  title: string;
  desc: string;
};

export default function PortofolioItem({ image, title, desc }: Props) {
  return (
    <div
      className="
       w-[400px] px-2 py-2.5"
    >
      <img src={image} alt={title} className="w-full h-auto rounded-xl" />

      <div className="p-3">
        <p className="text-orange-400 text-sm mt-2">{desc}</p>
        <h3 className=" text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
}
