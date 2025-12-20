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
        bg-gradient-to-br from-[#0b0f14] to-[#05070a]
        border border-white/5
        flex flex-col items-center justify-center
        text-center
      "
    >
      <span className="text-[#ff6c37] text-3xl md:text-4xl font-bold">
        {value}
      </span>
      <p className="text-sm md:text-base text-gray-300 mt-2 px-4">
        {label}
      </p>
    </div>
  );
}
