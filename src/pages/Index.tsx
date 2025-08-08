import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "./home/HeroSection";
import CategoriesSection from "./home/CategoriesSection";
import PopularToolsSection from "./home/PopularToolsSection";
import NewToolsSection from "./home/NewToolsSection";
import WhyChooseUsSection from "./home/WhyChooseUsSection";
// Removed: import AboutMissionSection from "./home/AboutMissionSection";

const Index = () => (
  <MainLayout>
    <HeroSection />
    <CategoriesSection />
    <PopularToolsSection />
    <NewToolsSection />
    <WhyChooseUsSection />
    {/* Section placeholder for future expansion */}
  </MainLayout>
);

export default Index;
