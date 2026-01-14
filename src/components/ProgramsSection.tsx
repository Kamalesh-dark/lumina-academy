import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const programs = [
  {
    level: "Early Years",
    ages: "Ages 3-5",
    description:
      "Play-based learning that sparks curiosity and builds foundational skills through exploration and creativity.",
    features: ["Montessori Methods", "Language Development", "Social Skills"],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    level: "Primary School",
    ages: "Ages 6-11",
    description:
      "A balanced curriculum fostering academic excellence, creativity, and character development.",
    features: ["IB Primary Years", "STEM Foundation", "Arts Integration"],
    gradient: "from-electric-blue to-blue-500",
  },
  {
    level: "Middle School",
    ages: "Ages 12-14",
    description:
      "Challenging academics combined with personal development and leadership opportunities.",
    features: ["IB Middle Years", "Critical Thinking", "Global Perspectives"],
    gradient: "from-electric-purple to-violet-500",
  },
  {
    level: "High School",
    ages: "Ages 15-18",
    description:
      "Rigorous preparation for university with diverse pathways and college counseling support.",
    features: ["IB Diploma", "AP Courses", "University Prep"],
    gradient: "from-gold to-amber-500",
  },
];

export const ProgramsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % programs.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + programs.length) % programs.length);
  };

  return (
    <section
      id="programs"
      className="section-padding relative overflow-hidden"
      ref={ref}
    >
      {/* Background Orbs */}
      <div className="floating-orb w-96 h-96 bg-electric-blue/10 -top-48 -left-48" />
      <div className="floating-orb w-72 h-72 bg-electric-purple/10 bottom-0 right-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-wider">
            Academic Programs
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-4">
            Pathways to
            <span className="bg-gradient-to-r from-electric-blue to-electric-purple bg-clip-text text-transparent">
              {" "}
              Success
            </span>
          </h2>
        </motion.div>

        {/* Programs Carousel - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.level}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className="glass-card p-6 h-full flex flex-col hover:bg-white/10 transition-all duration-500 group-hover:-translate-y-2">
                {/* Gradient Top Bar */}
                <div
                  className={`h-1 w-full rounded-full bg-gradient-to-r ${program.gradient} mb-6`}
                />

                <span className="text-white/50 text-sm">{program.ages}</span>
                <h3 className="font-display font-bold text-2xl text-white mt-1 mb-4">
                  {program.level}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                  {program.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {program.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-white/70"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${program.gradient}`}
                      />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium text-sm group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Programs Carousel - Mobile */}
        <div className="lg:hidden">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-8"
          >
            <div
              className={`h-1 w-full rounded-full bg-gradient-to-r ${programs[activeIndex].gradient} mb-6`}
            />
            <span className="text-white/50 text-sm">
              {programs[activeIndex].ages}
            </span>
            <h3 className="font-display font-bold text-3xl text-white mt-1 mb-4">
              {programs[activeIndex].level}
            </h3>
            <p className="text-white/60 leading-relaxed mb-6">
              {programs[activeIndex].description}
            </p>
            <div className="space-y-2">
              {programs[activeIndex].features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-white/70"
                >
                  <div
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${programs[activeIndex].gradient}`}
                  />
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <div className="flex gap-2">
              {programs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-6 bg-electric-blue"
                      : "bg-white/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
