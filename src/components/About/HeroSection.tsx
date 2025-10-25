import React from "react";
import { Link } from "react-router-dom";
import heroAbout from "../../assets/heroAbout.png";
export default function HeroSection() {
  return (
    <section
      className="relative h-screen bg-cover text-white flex flex-col justify-between font-[righteous]"
      style={{
        backgroundImage: `url(${heroAbout})`,
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
            to="/event"
            className="text-4xl block hover:text-[#95FF8D] transition"
          >
            Events
          </Link>
        </div>
      </nav>
    </section>
  );
}
