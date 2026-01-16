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
import { RunningDog, WaddlingDuck, FlyingBird, HoppingFrog } from "./AnimatedAnimals";

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
      className="section-padding-kids relative overflow-hidden"
      ref={ref}
    >
      {/* Animated Background */}
      <div className="cta-bg absolute inset-0 bg-gradient-to-br from-lavender via-coral-pink to-sunny-yellow opacity-90" 
        style={{ backgroundSize: "200% 200%" }}
      />
      
      {/* Animated Characters */}
      <FloatingBalloon color="#fff" className="absolute top-20 left-[5%] w-12 h-18 z-10 opacity-60" delay={0} />
      <FloatingBalloon color="#fff" className="absolute top-32 right-[8%] w-10 h-16 z-10 opacity-50" delay={0.5} />
      <HappyStar color="#fff" className="absolute top-1/4 left-[15%] w-10 h-10 z-10 opacity-50" delay={0.3} />
      <SpinningPinwheel className="absolute bottom-32 left-[10%] w-12 h-16 z-10 opacity-60" delay={0} />
      <FlyingButterfly className="absolute top-1/3 right-[10%] w-14 h-10 z-10 opacity-50" delay={1} />
      <DancingRainbow className="absolute bottom-1/4 right-[5%] w-24 h-14 opacity-40 z-10" delay={0.5} />
      <WavingKid className="absolute bottom-20 left-[3%] w-20 h-28 z-10 opacity-70" delay={0} />
      
      {/* Running Animals */}
      <RunningDog className="absolute bottom-24 w-20 h-12 z-20 opacity-70" delay={0} direction="right" />
      <WaddlingDuck className="absolute bottom-16 w-14 h-12 z-20 opacity-60" delay={2} direction="right" />
      <FlyingBird className="absolute top-28 w-14 h-10 z-20 opacity-50" delay={1} color="#fff" />
      <HoppingFrog className="absolute bottom-32 w-12 h-10 z-20 opacity-60" delay={3} />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-30 animate-bounce-slow">🎈</div>
      <div className="absolute top-20 right-20 text-5xl opacity-30 animate-bounce-slow" style={{ animationDelay: "0.5s" }}>⭐</div>
      <div className="absolute bottom-20 left-1/4 text-6xl opacity-30 animate-bounce-slow" style={{ animationDelay: "1s" }}>🌈</div>
      <div className="absolute bottom-10 right-10 text-5xl opacity-30 animate-wiggle">🎨</div>

      {/* Confetti */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
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
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 mb-6"
        >
          <Calendar className="w-4 h-4 text-white animate-bounce-slow" />
          <span className="text-sm font-semibold text-white">Book Your Campus Tour</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6"
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
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10"
        >
          Admissions for 2026-27 are now open with limited seats. 
          Give your child the gift of world-class early education!
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <AnimatedButton variant="sunny" size="xl" className="group">
            Apply Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </AnimatedButton>
          <AnimatedButton variant="playful" size="xl">
            <Phone className="w-5 h-5" />
            Talk to Us
          </AnimatedButton>
        </motion.div>

        {/* Contact Info Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-4">
          <motion.div 
            className="contact-card bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30 hover:bg-white/30 transition-all hover:scale-105"
            whileHover={{ y: -5 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Phone className="w-8 h-8 text-white mx-auto mb-3" />
            </motion.div>
            <div className="font-display font-bold text-white text-lg">Call Us</div>
            <a href="tel:+919840144800" className="text-white/90 hover:text-white transition-colors">
              +91 98401 44800
            </a>
          </motion.div>
          <motion.div 
            className="contact-card bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30 hover:bg-white/30 transition-all hover:scale-105"
            whileHover={{ y: -5 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Mail className="w-8 h-8 text-white mx-auto mb-3" />
            </motion.div>
            <div className="font-display font-bold text-white text-lg">Email Us</div>
            <a href="mailto:info@vibyinternationalschool.com" className="text-white/90 hover:text-white transition-colors text-sm">
              info@vibyinternationalschool.com
            </a>
          </motion.div>
          <motion.div 
            className="contact-card bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30 hover:bg-white/30 transition-all hover:scale-105"
            whileHover={{ y: -5 }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <MapPin className="w-8 h-8 text-white mx-auto mb-3" />
            </motion.div>
            <div className="font-display font-bold text-white text-lg">Visit Us</div>
            <div className="text-white/90 text-sm">Chennai, India & Malaysia</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
