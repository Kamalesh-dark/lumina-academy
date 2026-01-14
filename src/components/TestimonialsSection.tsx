import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Viby International School transformed our daughter's perspective on learning. The teachers genuinely care about each student's growth and success.",
    author: "Sarah & Michael Chen",
    role: "Parents of Grade 8 Student",
    avatar: "SC",
  },
  {
    quote:
      "The IB program here is exceptional. I felt fully prepared for university and life beyond. The global community made me who I am today.",
    author: "Aisha Rahman",
    role: "Class of 2024, now at Oxford University",
    avatar: "AR",
  },
  {
    quote:
      "What sets Viby apart is the perfect balance of academic rigor and emotional support. Our son has flourished in ways we never imagined.",
    author: "David & Emma Thompson",
    role: "Parents of Grade 11 Student",
    avatar: "DT",
  },
  {
    quote:
      "The diverse community and world-class facilities made my school years unforgettable. I made friends from every corner of the world.",
    author: "Marcus Williams",
    role: "Class of 2023, now at MIT",
    avatar: "MW",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 hero-gradient opacity-50" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-4">
            Stories of
            <span className="bg-gradient-to-r from-electric-blue to-electric-purple bg-clip-text text-transparent">
              {" "}
              Success
            </span>
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 md:p-12 text-center"
            >
              {/* Quote Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-electric-blue to-electric-purple flex items-center justify-center mx-auto mb-8">
                <Quote className="w-8 h-8 text-white" />
              </div>

              {/* Quote Text */}
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 font-light italic">
                "{testimonials[activeIndex].quote}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                  <span className="font-display font-bold text-navy-deep text-sm">
                    {testimonials[activeIndex].avatar}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-display font-semibold text-white">
                    {testimonials[activeIndex].author}
                  </div>
                  <div className="text-sm text-white/60">
                    {testimonials[activeIndex].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors hidden md:block"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors hidden md:block"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-gradient-to-r from-electric-blue to-electric-purple"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
