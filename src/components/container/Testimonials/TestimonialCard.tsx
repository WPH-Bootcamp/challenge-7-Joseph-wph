type Props = {
  item: {
    name: string;
    role: string;
    text: string;
    image: string;
    rating: number;
  };
};

export default function TestimonialCard({ item }: Props) {
  return (
    <div className="w-full h-[300px]  max-w-md bg-[#0f1419] rounded-2xl p-8 shadow-xl">
      {/* Quote */}
      <div className="relative z-20">
        <img
          src="/assets/Quote.png"
          alt="Quote"
          className="w-12 h-12 mb-2 -mt-10 ml-2"
        />
      </div>

      <div className="flex flex-col items-center gap-6 mt-2">
        {/* Stars */}
        <div className="flex justify-center gap-1">
          {Array.from({ length: item.rating }).map((_, i) => (
            <span key={i} className="text-yellow-400">
              ★
            </span>
          ))}
        </div>

        {/* Text */}
        <p className="text-gray-200 text-center leading-relaxed max-w-md">
          {item.text}
        </p>

        {/* Author */}
        <div className="text-center">
          <p className="font-semibold">{item.name}</p>
          <p className="text-orange-500 text-sm">{item.role}</p>
        </div>

        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>
    </div>
  );
}
