import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { CampusLifeSection } from "@/components/CampusLifeSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AdmissionsCTASection } from "@/components/AdmissionsCTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ProgramsSection />
      <CampusLifeSection />
      <TestimonialsSection />
      <AdmissionsCTASection />
      <Footer />
    </div>
  );
};

export default Index;
