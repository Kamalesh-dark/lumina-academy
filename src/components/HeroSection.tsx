import { motion } from "framer-motion";
import { AnimatedButton } from "./ui/animated-button";
import { ChevronDown, Sparkles, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-campus.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Viby International School Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/60 to-navy-deep" />
      </div>

      {/* Floating Orbs */}
      <div className="floating-orb w-96 h-96 bg-electric-blue top-20 -left-48" />
      <div
        className="floating-orb w-72 h-72 bg-electric-purple bottom-40 -right-36"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="floating-orb w-48 h-48 bg-gold top-1/2 left-1/4"
        style={{ animationDelay: "4s" }}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
        >
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-sm font-medium text-white/90">
            Admissions Open for 2026-27
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-tight mb-6"
        >
          Where{" "}
          <span className="bg-gradient-to-r from-electric-blue via-electric-purple to-gold bg-clip-text text-transparent animate-gradient">
            Future Leaders
          </span>
          <br />
          Begin Their Journey
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-light"
        >
          A world-class international education that inspires curiosity,
          nurtures excellence, and prepares students for a boundless future.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <AnimatedButton variant="hero" size="xl">
            Admissions Open
          </AnimatedButton>
          <AnimatedButton variant="heroOutline" size="xl">
            Book a Campus Visit
          </AnimatedButton>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: Users, value: "1,200+", label: "Students" },
            { icon: Award, value: "50+", label: "Countries" },
            { icon: Sparkles, value: "98%", label: "University Placement" },
            { icon: Award, value: "25+", label: "Years of Excellence" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="glass-card p-4 md:p-6"
            >
              <stat.icon className="w-6 h-6 text-gold mx-auto mb-2" />
              <div className="font-display font-bold text-2xl md:text-3xl text-white">
                {stat.value}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};
