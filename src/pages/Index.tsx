import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BookTourSection } from "@/components/BookTourSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <TestimonialsSection />
      <BookTourSection />
      <Footer />
    </div>
  );
};

export default Index;
