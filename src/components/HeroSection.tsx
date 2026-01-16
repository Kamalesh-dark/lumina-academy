import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedButton } from "./ui/animated-button";
import { Sparkles } from "lucide-react";
import heroImage from "@/assets/kids-hero.jpg";
import {
  FloatingBalloon,
  HappyStar,
  PlayfulCloud,
  WavingKid,
  FlyingButterfly,
  SpinningPinwheel,
  DancingRainbow,
} from "./AnimatedCharacters";
import {
  RunningCat,
  RunningDog,
  FlyingBird,
  FlyingBee,
} from "./AnimatedAnimals";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline letter animation
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.word');
        gsap.from(words, {
          y: 100,
          opacity: 0,
          rotationX: -90,
          stagger: 0.1,
          duration: 1,
          ease: "back.out(1.7)",
        });
      }

      // Stats counter animation
      if (statsRef.current) {
        const statValues = statsRef.current.querySelectorAll('.stat-value');
        statValues.forEach((stat) => {
          const target = stat.getAttribute('data-value');
          if (target) {
            gsap.from(stat, {
              textContent: 0,
              duration: 2,
              ease: "power1.out",
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: stat,
                start: "top 80%",
              },
            });
          }
        });
      }

      // Parallax effect on scroll
      gsap.to(".hero-image", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[95vh] flex items-center overflow-hidden bg-gradient-to-b from-cream via-white to-white pt-20"
    >
      {/* Animated Characters */}
      <FloatingBalloon color="#F472B6" className="absolute top-24 left-[5%] w-16 h-24 z-10" delay={0} />
      <FloatingBalloon color="#FBBF24" className="absolute top-32 right-[10%] w-12 h-18 z-10" delay={0.5} />
      <FloatingBalloon color="#A855F7" className="absolute top-48 left-[15%] w-10 h-16 z-10" delay={1} />
      
      <HappyStar color="#FBBF24" className="absolute top-40 right-[25%] w-14 h-14 z-10" delay={0.3} />
      <HappyStar color="#F472B6" className="absolute bottom-40 left-[8%] w-10 h-10 z-10" delay={0.8} />
      
      <PlayfulCloud className="absolute top-20 left-[30%] w-24 h-16 opacity-60" delay={0} />
      <PlayfulCloud className="absolute top-28 right-[5%] w-32 h-20 opacity-40" delay={1.5} />
      
      <FlyingButterfly className="absolute top-1/3 left-[20%] w-16 h-12 z-10" delay={0} />
      <FlyingButterfly className="absolute bottom-1/3 right-[15%] w-12 h-10 z-10" delay={2} />
      
      <SpinningPinwheel className="absolute bottom-32 right-[8%] w-16 h-20 z-10" delay={0} />
      
      <DancingRainbow className="absolute top-1/4 right-[30%] w-20 h-12 opacity-70 z-10" delay={0.5} />
      
      {/* Running Animals */}
      <RunningCat className="absolute bottom-28 w-20 h-12 z-20" delay={0} direction="left" />
      <RunningDog className="absolute bottom-36 w-24 h-14 z-20" delay={3} direction="left" />
      <FlyingBird className="absolute top-32 w-14 h-10 z-20" delay={1} color="#3B82F6" />
      <FlyingBird className="absolute top-48 w-12 h-8 z-20" delay={2.5} color="#A855F7" />
      <FlyingBee className="absolute top-1/2 w-12 h-10 z-20" delay={0.5} />

      {/* Decorative Bubbles */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-sunny-yellow/30 rounded-full blur-2xl animate-float-bubble" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-coral-pink/20 rounded-full blur-3xl animate-float-bubble" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-lavender/20 rounded-full blur-2xl animate-float-bubble" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-sky-blue/30 rounded-full blur-xl animate-float-bubble" style={{ animationDelay: "0.5s" }} />

      {/* Confetti Elements */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 rounded-full animate-confetti"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-20px`,
            backgroundColor: ['#F472B6', '#FBBF24', '#A855F7', '#22C55E', '#3B82F6'][i % 5],
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${4 + Math.random() * 3}s`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream border-2 border-sunny-yellow/50 mb-6 animate-pop"
            >
              <Sparkles className="w-4 h-4 text-sunny-yellow" />
              <span className="text-sm font-semibold text-foreground">
                Global Growing Chains of Play Schools
              </span>
            </motion.div>

            {/* Main Headline with GSAP */}
            <h1 
              ref={headlineRef}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6"
            >
              <span className="word inline-block">Where</span>{" "}
              <span className="word inline-block">Little</span>
              <br />
              <span className="word inline-block bg-gradient-to-r from-lavender via-coral-pink to-sunny-yellow bg-clip-text text-transparent">
                Dreams
              </span>{" "}
              <span className="word inline-block bg-gradient-to-r from-lavender via-coral-pink to-sunny-yellow bg-clip-text text-transparent">
                Begin!
              </span>{" "}
              <span className="word inline-block">✨</span>
            </h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg text-muted-foreground max-w-lg mb-8"
            >
              Viby International School is a fast-growing global chain of premium play schools, empowering little minds to become confident, compassionate, and capable global citizens.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <AnimatedButton variant="kids" size="xl">
                For Admission 🎒
              </AnimatedButton>
              <AnimatedButton variant="kidsOutline" size="xl">
                Become Partner 🤝
              </AnimatedButton>
            </motion.div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-4 gap-4">
              {[
                { value: "20", suffix: "+", label: "Locations", emoji: "📍" },
                { value: "1278", suffix: "", label: "Students", emoji: "👧" },
                { value: "4", suffix: "+", label: "Years Exp.", emoji: "⭐" },
                { value: "4", suffix: "", label: "States", emoji: "🌍" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="text-center group hover:scale-110 transition-transform cursor-default"
                >
                  <div className="text-2xl mb-1 animate-bounce-slow" style={{ animationDelay: `${index * 0.2}s` }}>
                    {stat.emoji}
                  </div>
                  <div className="font-display font-bold text-2xl text-foreground">
                    <span className="stat-value" data-value={stat.value}>{stat.value}</span>{stat.suffix}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Waving Kid Character */}
            <WavingKid className="absolute -left-8 bottom-20 w-24 h-32 z-20" delay={0} />
            
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white hero-image">
              <img
                src={heroImage}
                alt="Happy children playing at Viby International School"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border-4 border-cream"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-grass-green to-mint flex items-center justify-center text-2xl animate-wiggle">
                    🌈
                  </div>
                  <div>
                    <div className="font-display font-bold text-foreground">Best Kindergarten</div>
                    <div className="text-sm text-muted-foreground">in Chennai</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative circles */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-sunny-yellow rounded-full opacity-60 -z-10 animate-pop" />
            <div className="absolute -bottom-6 -right-8 w-32 h-32 bg-lavender/40 rounded-full -z-10 animate-float-bubble" />
          </motion.div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};
