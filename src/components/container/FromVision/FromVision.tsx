import { portofolios } from "../../Data/Portofolios";
import PortofolioItem from "./PortofolioItem";

const FromVision = () => {
  return (
    <section id="Projects" className="bg-black text-white py-24">
      <div className="max-w-[1200px] mx-auto px-4 mt-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-semibold">
            From Vision to Launch! Projects We're Proud Of
          </h2>
          <p className="text-gray-400 mt-3">
            Take a closer look at our recent work powering startups,
            enterprises, and everything in between.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center md:flex-row md:gap-6 md:justify-center">
        {portofolios.map((portofolio) => (
          <PortofolioItem
            key={portofolio.id}
            image={portofolio.image}
            title={portofolio.title}
            desc={portofolio.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default FromVision;
