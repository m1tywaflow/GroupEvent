import strideImg from "../../assets/strideImg.png";
import { ArrowUpRight } from "lucide-react";

const StrideTogether: React.FC = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center text-white font-[righteous] flex items-center justify-center"
      style={{
        backgroundImage: `url(${strideImg})`,
      }}
    >
      <div className="bg-[#1D1D1D]/90 px-8 py-16 text-center rounded-xl w-full mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Stride Together, <br /> Shape Tomorrow.
        </h1>
        <p className="text-sm md:text-base text-gray-300 mb-8 max-w-2xl mx-auto">
          Ditch the gridlock and embrace the open road. Run, donate, or bring
          the vibe as we create pathways for a healthier, more connected
          community, one step at a time.
        </p>

        <button className="bg-[#404040] cursor-pointer text-[#95FF8D] font-semibold py-2 px-6 rounded-full flex items-center justify-center mx-auto gap-2 underline hover:bg-[#95FF8D] hover:text-[#404040] transition duration-200">
          NEWSLETTER
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default StrideTogether;
