import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedButton } from "./ui/animated-button";
import { Phone, Mail, MapPin, Calendar, ArrowRight } from "lucide-react";
import { 
  FloatingBalloon, 
  HappyStar, 
  DancingRainbow, 
  SpinningPinwheel,
  FlyingButterfly,
  WavingKid,
} from "./AnimatedCharacters";

gsap.registerPlugin(ScrollTrigger);

export const BookTourSection = () => {
  const ref = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Contact cards bounce in
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.contact-card');
        gsap.from(cards, {
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotation: -10,
          duration: 0.8,
          stagger: 0.15,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          },
        });
      }

      // Background pulse animation
      gsap.to(".cta-bg", {
        backgroundPosition: "200% 200%",
        duration: 10,
        ease: "linear",
        repeat: -1,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      ref={ref}
    >
      {/* Animated Background */}
      <div className="cta-bg absolute inset-0 bg-gradient-to-br from-lavender via-coral-pink to-sunny-yellow opacity-90" 
        style={{ backgroundSize: "200% 200%" }}
      />
      
      {/* Animated Characters - Hidden on mobile */}
      <FloatingBalloon color="#fff" className="absolute top-20 left-[5%] w-8 h-12 md:w-12 md:h-18 z-10 opacity-60 hidden sm:block" delay={0} />
      <FloatingBalloon color="#fff" className="absolute top-32 right-[8%] w-6 h-10 md:w-10 md:h-16 z-10 opacity-50 hidden sm:block" delay={0.5} />
      <HappyStar color="#fff" className="absolute top-1/4 left-[15%] w-6 h-6 md:w-10 md:h-10 z-10 opacity-50 hidden md:block" delay={0.3} />
      <SpinningPinwheel className="absolute bottom-32 left-[10%] w-8 h-12 md:w-12 md:h-16 z-10 opacity-60 hidden md:block" delay={0} />
      <FlyingButterfly className="absolute top-1/3 right-[10%] w-10 h-8 md:w-14 md:h-10 z-10 opacity-50 hidden lg:block" delay={1} />
      <DancingRainbow className="absolute bottom-1/4 right-[5%] w-16 h-10 md:w-24 md:h-14 opacity-40 z-10 hidden lg:block" delay={0.5} />
      <WavingKid className="absolute bottom-20 left-[3%] w-14 h-20 md:w-20 md:h-28 z-10 opacity-70 hidden md:block" delay={0} />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-6 sm:left-10 text-4xl sm:text-6xl opacity-30 animate-bounce-slow">🎈</div>
      <div className="absolute top-20 right-10 sm:right-20 text-3xl sm:text-5xl opacity-30 animate-bounce-slow hidden sm:block" style={{ animationDelay: "0.5s" }}>⭐</div>
      <div className="absolute bottom-20 left-1/4 text-4xl sm:text-6xl opacity-30 animate-bounce-slow hidden sm:block" style={{ animationDelay: "1s" }}>🌈</div>
      <div className="absolute bottom-10 right-6 sm:right-10 text-3xl sm:text-5xl opacity-30 animate-wiggle">🎨</div>

      {/* Confetti - Hidden on mobile */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full hidden sm:block"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: ['#fff', '#FBBF24', '#A855F7', '#22C55E'][i % 4],
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, type: "spring" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 mb-4 sm:mb-6"
        >
          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-white animate-bounce-slow" />
          <span className="text-xs sm:text-sm font-semibold text-white">Book Your Campus Tour</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6"
        >
          Start Your Child's
          <br />
          <span className="inline-block">
            Journey Today!{" "}
            <motion.span
              className="inline-block"
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              🚀
            </motion.span>
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-8 sm:mb-10 px-4"
        >
          Admissions for 2026-27 are now open with limited seats. 
          Give your child the gift of world-class early education!
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
        >
          <AnimatedButton variant="sunny" size="lg" className="group w-full sm:w-auto">
            Apply Now
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </AnimatedButton>
          <AnimatedButton variant="playful" size="lg" className="w-full sm:w-auto">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            Talk to Us
          </AnimatedButton>
        </motion.div>

        {/* Contact Info Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <motion.div 
            className="contact-card bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-white/30 hover:bg-white/30 transition-all hover:scale-105"
            whileHover={{ y: -5 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white mx-auto mb-2 sm:mb-3" />
            </motion.div>
            <div className="font-display font-bold text-white text-base sm:text-lg">Call Us</div>
            <a href="tel:+919840144800" className="text-white/90 hover:text-white transition-colors text-sm sm:text-base">
              +91 98401 44800
            </a>
          </motion.div>
          <motion.div 
            className="contact-card bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-white/30 hover:bg-white/30 transition-all hover:scale-105"
            whileHover={{ y: -5 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white mx-auto mb-2 sm:mb-3" />
            </motion.div>
            <div className="font-display font-bold text-white text-base sm:text-lg">Email Us</div>
            <a href="mailto:info@vibyinternationalschool.com" className="text-white/90 hover:text-white transition-colors text-xs sm:text-sm break-all">
              info@vibyinternationalschool.com
            </a>
          </motion.div>
          <motion.div 
            className="contact-card bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-white/30 hover:bg-white/30 transition-all hover:scale-105"
            whileHover={{ y: -5 }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white mx-auto mb-2 sm:mb-3" />
            </motion.div>
            <div className="font-display font-bold text-white text-base sm:text-lg">Visit Us</div>
            <div className="text-white/90 text-xs sm:text-sm">Chennai, India & Malaysia</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};