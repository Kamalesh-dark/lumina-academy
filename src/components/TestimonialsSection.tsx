import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Very good school. Lot of improvement in kid's activity and skills.",
    author: "Sweta Jagannathan",
    role: "Mother of two kids",
    avatar: "SJ",
    stars: 5,
  },
  {
    quote: "My daughter joined last year in play school. She was singing many rhymes now.",
    author: "Karthik Siva",
    role: "Parent",
    avatar: "KS",
    stars: 5,
  },
  {
    quote: "Viby International School has been a fantastic choice for our child.",
    author: "Ram Sharath",
    role: "Parent",
    avatar: "RS",
    stars: 5,
  },
  {
    quote: "The school was very pleasant and happy environment. The teachers are well being.",
    author: "Shobana Rajesh",
    role: "Mother of two kids",
    avatar: "SR",
    stars: 5,
  },
  {
    quote: "Our kids have had a wonderful experience. The teachers are dedicated, caring.",
    author: "Saravana Kumar",
    role: "Parent",
    avatar: "SK",
    stars: 5,
  },
  {
    quote: "An excellent school where children learn and grow with care.",
    author: "Sheik",
    role: "Parent",
    avatar: "SH",
    stars: 5,
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding-kids relative overflow-hidden bg-white" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-10 left-10 text-8xl opacity-10">❤️</div>
      <div className="absolute bottom-10 right-10 text-8xl opacity-10">💛</div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral-pink/10 border-2 border-coral-pink/30 mb-4">
            <span className="text-xl">👨‍👩‍👧‍👦</span>
            <span className="text-sm font-semibold text-coral-pink">Happy Viby Families</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground">
            What Parents
            <span className="bg-gradient-to-r from-coral-pink to-sunny-yellow bg-clip-text text-transparent"> Say </span>
            💬
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-cream to-peach/30 rounded-3xl p-8 md:p-12 border-4 border-white shadow-xl text-center"
            >
              {/* Quote Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-coral-pink to-lavender flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Quote className="w-8 h-8 text-white" />
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[activeIndex].stars)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-sunny-yellow fill-sunny-yellow" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                "{testimonials[activeIndex].quote}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-lavender to-coral-pink flex items-center justify-center shadow-lg">
                  <span className="font-display font-bold text-white text-lg">
                    {testimonials[activeIndex].avatar}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-display font-bold text-foreground text-lg">
                    {testimonials[activeIndex].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIndex].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 rounded-full bg-white shadow-lg hover:shadow-xl border-2 border-cream hover:border-lavender transition-all hidden md:block"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 rounded-full bg-white shadow-lg hover:shadow-xl border-2 border-cream hover:border-lavender transition-all hidden md:block"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-gradient-to-r from-coral-pink to-lavender"
                  : "bg-muted hover:bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
