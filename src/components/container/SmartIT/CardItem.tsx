type Props = {
  image: string;
  title: string;
  desc: string;
};

export default function CardItem({ image, title, desc }: Props) {
  return (
    <div
  className="
    w-full rounded-xl px-6 py-2.5 border
    bg-grey-100 border-gray-300
    dark:bg-slate-950 dark:border-slate-800
    transition-colors
  "
>
  <img
    src={image}
    alt={title}
    className="w-20 -mt-12 ml-1"
  />

  <div className="p-3">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
      {title}
    </h3>
    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
      {desc}
    </p>
  </div>
</div>

  );
}
