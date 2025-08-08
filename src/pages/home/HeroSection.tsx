
import HeroBackground from "./HeroBackground";
import HeroTitle from "./HeroTitle";
import HeroRotatingSubtitle from "./HeroRotatingSubtitle";
import HeroSearchBarContainer from "./HeroSearchBarContainer";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center py-0 text-center"
      aria-label="Hero section"
    >
      <HeroBackground />
      <HeroTitle />
      <HeroRotatingSubtitle />
      <HeroSearchBarContainer />
    </section>
  );
};

export default HeroSection;
