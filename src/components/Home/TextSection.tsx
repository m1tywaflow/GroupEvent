
import { MoveUpRight } from "lucide-react";

const TextSection: React.FC = () => {
  return (
    <section className="bg-[#95FF8D] w-full h-[600px] flex flex-col justify-between p-16">
      <div>
        <h1 className="text-7xl font-bold leading-tight text-black max-w-5xl">
          Our mission is to improve suburban quality of life by reducing car
          dependency and promoting active transportation.
        </h1>
      </div>

      <div className="flex justify-end">
        <button className="bg-[#404040] text-white flex items-center gap-2 px-6 py-3 rounded-full text-lg font-medium hover:bg-black transition cursor-pointer">
          REGISTER
          <MoveUpRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default TextSection;
