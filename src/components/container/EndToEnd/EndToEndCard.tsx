type EndToEndCardProps = {
  value: string;
  label: string;
};

export default function EndToEndCard({ value, label }: EndToEndCardProps) {
  return (
    <div
  className="
    aspect-square
    rounded-full
    flex flex-col items-center justify-center
    text-center
    border

    bg-gradient-to-br
    from-white to-gray-100
    border-gray-200

    dark:from-[#0b0f14] dark:to-[#05070a]
    dark:border-white/5
  "
>
  <span
    className="
      text-3xl md:text-4xl font-bold
      text-orange-600
      dark:text-[#ff6c37]
    "
  >
    {value}
  </span>

  <p
    className="
      text-sm md:text-base mt-2 px-4
      text-gray-700
      dark:text-gray-300
    "
  >
    {label}
  </p>
</div>

  );
}
