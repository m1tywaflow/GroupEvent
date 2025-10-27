import { MoveUpRight } from "lucide-react";

export default function TextSection() {
  return (
    <section className="bg-black w-full min-h-[600px] flex flex-col justify-between p-16 text-white">
      <div>
        <h1 className="text-6xl font-bold leading-tight max-w-8xl">
          Our mission is to improve suburban quality of life by reducing car
          dependency and promoting active transportation.
        </h1>
      </div>
      <div className="flex justify-between mt-32">
        <div className="max-w-sm">
          <h2 className="text-2xl font-semibold mb-2">Community Well-Being</h2>
          <ul className="list-disc list-inside text-gray-300 text-lg">
            <li>
              Improve the health, safety, and connectivity of suburban
              neighborhoods
            </li>
          </ul>
        </div>
        <div className="max-w-sm">
          <h2 className="text-2xl font-semibold mb-2">Sustainable Mobility</h2>
          <ul className="list-disc list-inside text-gray-300 text-lg">
            <li>
              Foster a culture of biking and walking as viable and desirable
              alternatives
            </li>
          </ul>
        </div>
        <div className="max-w-sm">
          <h2 className="text-2xl font-semibold mb-2">Active Participation</h2>
          <ul className="list-disc list-inside text-gray-300 text-lg">
            <li>
              Believe in the power of collective action and community
              involvement
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-start mt-20">
        <button
          className="bg-[#404040] text-white flex items-center gap-2 px-6 py-3 rounded-full text-lg font-medium 
          hover:bg-white hover:text-black transition duration-200 cursor-pointer"
        >
          REGISTER
          <MoveUpRight size={20} />
        </button>
      </div>
    </section>
  );
}
