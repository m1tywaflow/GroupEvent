import React from "react";
import HeroSection from "../../components/Home/HeroSection";
import StrideTogether from "../../components/Home/StrideTogether";
import SplitSection from "../../components/Home/SplitSection";
import TextSection from "../../components/Home/TextSection";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <StrideTogether />
      <SplitSection />
      <TextSection />
    </>
  );
};

export default Home;
