import { cards } from "../../Data/Cards";
import CardItem from "./CardItem";

export default function CardGrid() {
  return (
    <section id="#" className="bg-black text-white py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-semibold">
            Smart IT Solutions That Grow With You
          </h2>
          <p className="text-gray-400 mt-3">
            Tailored tech to boost efficiency, security, and results.
          </p>
        </div>

        <div
          className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 py-5
        "
        >
          {cards.map((card) => (
            <CardItem
              key={card.id}
              image={card.image}
              title={card.title}
              desc={card.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
