
import leftImg from "../../assets/left.png";
import { MoveUpRight } from "lucide-react";
const SplitSection: React.FC = () => {
  return (
    <section className="flex w-full">
      <div className="relative w-1/2">
        <img
          src={leftImg}
          alt="Runner"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-8xl font-extrabold leading-tight">
            30K <br /> Raised
          </h1>
          <p className="text-sm mt-2 mb-6 opacity-80">
            By North Shore residents
          </p>
          <button className="bg-[#95FF8D] text-black font-semibold px-6 py-2 rounded-full cursor-pointer hover:bg-white transition duration-200">
            ABOUT US
          </button>
        </div>
      </div>
      <div className="w-1/2 bg-[#121212] flex flex-col items-center justify-center text-white text-center px-4">
        <h2 className="text-8xl font-extrabold leading-tight">
          Don’t <br /> Miss a <br /> Step
        </h2>
        <p className="text-sm mt-4 mb-6 opacity-80 max-w-xs">
          Get the latest updates and details about the event.
        </p>
        <button className="bg-[#95FF8D] text-black font-semibold px-6 py-2 rounded-full flex items-center gap-2 cursor-pointer hover:bg-white transition duration-200">
          NEWSLETTER
          <span>
            <MoveUpRight />
          </span>
        </button>
      </div>
    </section>
  );
};

export default SplitSection;
