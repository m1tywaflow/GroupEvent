import strideImg from "../../assets/strideImg.png";
import { Link } from "react-router-dom";
export default function HeroSection() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex flex-col justify-between text-white font-[righteous]"
      style={{
        backgroundImage: `url(${strideImg})`,
      }}
    >
      <nav className="flex justify-between items-start p-8 text-lg md:text-3xl font-medium">
        <Link to="/" className="hover:text-[#95FF8D] transition text-white">
          Home
        </Link>

        <div className="text-center leading-tight">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Running
            <br />
            for
            <br />
            Change
          </h1>
        </div>
        <Link
          to="/about"
          className="hover:text-[#95FF8D] transition text-white"
        >
          About Us
        </Link>
      </nav>
      <div className="flex justify-center items-center h-full -mt-32">
        <h1 className="text-[60px] md:text-[90px] font-bold text-center">
          May 12, 2025
        </h1>
      </div>
    </section>
  );
}
