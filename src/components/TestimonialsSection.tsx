import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import gsap from "gsap";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { HappyStar, FloatingBalloon } from "./AnimatedCharacters";

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
  const ref = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // GSAP entrance animation for stars
    if (cardRef.current) {
      const stars = cardRef.current.querySelectorAll('.star-icon');
      gsap.from(stars, {
        scale: 0,
        rotation: 180,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
      });
    }
  }, [activeIndex]);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white" ref={ref}>
      {/* Animated Characters - Hidden on mobile */}
      <HappyStar color="#FBBF24" className="absolute top-20 left-[8%] w-8 h-8 md:w-12 md:h-12 z-10 hidden sm:block" delay={0} />
      <HappyStar color="#F472B6" className="absolute bottom-20 right-[10%] w-6 h-6 md:w-10 md:h-10 z-10 hidden sm:block" delay={0.5} />
      <FloatingBalloon color="#A855F7" className="absolute top-32 right-[5%] w-8 h-12 md:w-10 md:h-16 z-10 hidden md:block" delay={0.3} />
      <FloatingBalloon color="#22C55E" className="absolute bottom-40 left-[5%] w-6 h-10 md:w-8 md:h-12 z-10 hidden md:block" delay={0.8} />

      {/* Background decorations */}
      <div className="absolute top-10 left-10 text-6xl md:text-8xl opacity-10 animate-pop hidden sm:block">❤️</div>
      <div className="absolute bottom-10 right-10 text-6xl md:text-8xl opacity-10 animate-wiggle hidden sm:block">💛</div>
      
      {/* Floating hearts - Hidden on mobile */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-lg md:text-2xl opacity-20 hidden md:block"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [-10, 10, -10],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          {['❤️', '💜', '💛', '💚', '🧡'][i % 5]}
        </motion.div>
      ))}

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-coral-pink/10 border-2 border-coral-pink/30 mb-3 sm:mb-4">
            <span className="text-lg sm:text-xl animate-bounce-slow">👨‍👩‍👧‍👦</span>
            <span className="text-xs sm:text-sm font-semibold text-coral-pink">Happy Viby Families</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground">
            What Parents
            <span className="bg-gradient-to-r from-coral-pink to-sunny-yellow bg-clip-text text-transparent"> Say </span>
            💬
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative" ref={cardRef}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="bg-gradient-to-br from-cream to-peach/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border-4 border-white shadow-xl text-center relative overflow-hidden"
            >
              {/* Decorative corner elements */}
              <div className="absolute top-2 left-2 sm:top-4 sm:left-4 text-xl sm:text-3xl animate-wiggle">🌟</div>
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 text-xl sm:text-3xl animate-wiggle" style={{ animationDelay: "0.5s" }}>✨</div>
              
              {/* Quote Icon */}
              <motion.div 
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-coral-pink to-lavender flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </motion.div>

              {/* Stars */}
              <div className="flex justify-center gap-0.5 sm:gap-1 mb-4 sm:mb-6">
                {[...Array(testimonials[activeIndex].stars)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                  >
                    <Star className="star-icon w-4 h-4 sm:w-6 sm:h-6 text-sunny-yellow fill-sunny-yellow" />
                  </motion.div>
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed mb-6 sm:mb-8 font-medium px-2 sm:px-4">
                "{testimonials[activeIndex].quote}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <motion.div 
                  className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-lavender to-coral-pink flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <span className="font-display font-bold text-white text-sm sm:text-lg">
                    {testimonials[activeIndex].avatar}
                  </span>
                </motion.div>
                <div className="text-left">
                  <div className="font-display font-bold text-foreground text-base sm:text-lg">
                    {testimonials[activeIndex].author}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {testimonials[activeIndex].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-12 p-2 sm:p-3 rounded-full bg-white shadow-lg hover:shadow-xl border-2 border-cream hover:border-lavender transition-all hidden sm:block"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-12 p-2 sm:p-3 rounded-full bg-white shadow-lg hover:shadow-xl border-2 border-cream hover:border-lavender transition-all hidden sm:block"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-6 sm:w-8 bg-gradient-to-r from-coral-pink to-lavender"
                  : "w-2 sm:w-3 bg-muted hover:bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};