
import { Link } from "react-router-dom";
import heroImage from "../../assets/hero-1.jpg";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative h-screen bg-cover text-white flex flex-col justify-between font-[righteous]"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <nav className="flex justify-between p-8 text-xl font-semibold">
        <div>
          <Link to="/" className="text-4xl hover:text-[#95FF8D] transition">
            Home
          </Link>
        </div>

        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Running
            <br />
            for
            <br />
            Change
          </h1>
        </div>

        <div className="text-right space-y-2">
          <Link
            to="/about"
            className="text-4xl block hover:text-[#95FF8D] transition"
          >
            About Us
          </Link>
        </div>
      </nav>

      <div className="flex justify-between">
        <div className="bg-black/60 text-xl p-4 m-6 rounded-md max-w-md">
          <div className="flex justify-between">
            <span>Location:</span>
            <span>Green Bay Trail, Glencoe, IL</span>
          </div>
          <div className="flex justify-between">
            <span>Date:</span>
            <span>May 12, 2025</span>
          </div>
          <div className="flex justify-between">
            <span>Time:</span>
            <span>6 AM - NOON</span>
          </div>
        </div>
        <div className="pt-20">
          <button className="w-30 h-10 text-black font-bold bg-[#95FF8D] rounded-2xl hover:bg-green-900 duration-200 transition cursor-pointer">
            REGISTER
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
