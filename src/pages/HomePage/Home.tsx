import HeroSection from "../../components/Home/HeroSection";
import StrideTogether from "../../components/Home/StrideTogether";
import SplitSection from "../../components/Home/SplitSection";
import TextSection from "../../components/Home/TextSection";
import FooterSection from "../../components/Home/FooterSection";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <StrideTogether />
      <SplitSection />
      <TextSection />
      <FooterSection />
    </>
  );
};

export default Home;
