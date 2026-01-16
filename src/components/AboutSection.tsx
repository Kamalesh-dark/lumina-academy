import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Brain, Heart, Lightbulb, Users, Star, Sparkles } from "lucide-react";
import { JumpingRabbit, BouncingBall, HappyStar } from "./AnimatedCharacters";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Brain,
    title: "Behavioral Skills",
    description: "Nurturing positive behaviors and emotional intelligence",
    color: "from-lavender to-purple-400",
    bg: "bg-lavender/10",
    emoji: "🧠",
  },
  {
    icon: Lightbulb,
    title: "Academic Excellence",
    description: "Building strong foundations for lifelong learning",
    color: "from-sunny-yellow to-amber-400",
    bg: "bg-sunny-yellow/10",
    emoji: "💡",
  },
  {
    icon: Users,
    title: "Leadership Qualities",
    description: "Empowering children to lead with confidence",
    color: "from-sky-blue to-cyan-400",
    bg: "bg-sky-blue/10",
    emoji: "👑",
  },
  {
    icon: Heart,
    title: "Compassion",
    description: "Teaching kindness and empathy towards others",
    color: "from-coral-pink to-rose-400",
    bg: "bg-coral-pink/10",
    emoji: "❤️",
  },
];

export const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger cards entrance with 3D flip
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.feature-card');
        gsap.from(cards, {
          rotationY: 90,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        });
      }

      // Floating animation for icons
      gsap.to(".feature-icon", {
        y: -10,
        duration: 1.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white"
      ref={ref}
    >
      {/* Animated Characters - Hidden on mobile */}
      <JumpingRabbit className="absolute top-20 left-[5%] w-12 h-16 md:w-16 md:h-20 z-10 hidden md:block" delay={0} />
      <BouncingBall color="#FBBF24" className="absolute top-32 right-[8%] w-8 h-8 md:w-12 md:h-12 z-10 hidden sm:block" delay={0.5} />
      <BouncingBall color="#F472B6" className="absolute bottom-40 left-[10%] w-6 h-6 md:w-10 md:h-10 z-10 hidden sm:block" delay={1} />
      <HappyStar color="#A855F7" className="absolute bottom-32 right-[12%] w-10 h-10 md:w-14 md:h-14 z-10 hidden md:block" delay={0.3} />

      {/* Background decorations */}
      <div className="absolute top-10 right-10 md:right-20 text-6xl md:text-8xl opacity-10 animate-swing hidden sm:block">🎠</div>
      <div className="absolute bottom-10 left-10 md:left-20 text-6xl md:text-8xl opacity-10 animate-wiggle hidden sm:block">🎪</div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-lavender/10 border-2 border-lavender/30 mb-3 sm:mb-4">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-lavender animate-sparkle" />
            <span className="text-xs sm:text-sm font-semibold text-lavender">GEN-ALPHA Curriculum</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-3 sm:mb-4">
            Why Choose
            <span className="bg-gradient-to-r from-lavender to-coral-pink bg-clip-text text-transparent"> Viby? </span>
            🌟
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
            GEN-ALPHA Curriculum is designed to nurture behavioral skills, foster academic excellence, 
            and cultivate leadership qualities—empowering children to thrive in a rapidly evolving world.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card group perspective-1000"
            >
              <div className={`${feature.bg} rounded-2xl sm:rounded-3xl p-4 sm:p-6 h-full border-4 border-transparent hover:border-cream transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}>
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`feature-icon w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-3 sm:mb-4 shadow-lg relative`}
                >
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 text-lg sm:text-2xl animate-bounce-slow">{feature.emoji}</span>
                </motion.div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-foreground mb-1 sm:mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 sm:mt-12 md:mt-16 bg-gradient-to-r from-cream via-peach/30 to-mint/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border-4 border-white shadow-xl relative overflow-hidden"
        >
          {/* Animated background shapes */}
          <div className="absolute top-2 right-6 sm:right-10 text-2xl sm:text-4xl animate-float-bubble">🎈</div>
          <div className="absolute bottom-2 left-6 sm:left-10 text-2xl sm:text-4xl animate-wiggle">🌟</div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 relative z-10">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
              <div className="text-4xl sm:text-5xl animate-wiggle">🌍</div>
              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground">
                  Proudly Rooted in Chennai, India
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Expanded across India and Malaysia — empowering global citizens
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-sunny-yellow animate-sparkle" />
              <span className="font-display font-bold text-base sm:text-lg text-foreground">Premium Play Schools</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};