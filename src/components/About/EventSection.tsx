import { MoveUpRight } from "lucide-react";

export default function EventSection() {
  return (
    <section className="bg-[#95FF8D] w-full py-32 flex flex-col items-center justify-center text-center">
      <div className="max-w-2xl">
        <h1 className="text-8xl md:text-7xl font-extrabold mb-6 text-black">
          Upcoming Event
        </h1>
        <p className="text-black text-sm md:text-base leading-relaxed mb-10">
          Ditch the gridlock and embrace the open road. Run, donate, or bring
          the vibe on <strong>May 12, 2025</strong> starting at the Green Bay
          Trail.
        </p>
        <div className="flex justify-center gap-4">
          <button
            className="bg-[#404040] text-[#95FF8D] flex items-center gap-2 px-6 py-2.5 rounded-full text-sm md:text-base font-medium 
            hover:bg-white hover:text-black transition duration-200 cursor-pointer"
          >
            REGISTER
            <MoveUpRight size={18} />
          </button>
          <button
            className="bg-[#404040] text-[#95FF8D] flex items-center gap-2 px-6 py-2.5 rounded-full text-sm md:text-base font-medium 
            hover:bg-white hover:text-black transition duration-200 cursor-pointer"
          >
            NEWSLETTER
            <MoveUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
