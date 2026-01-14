import { motion } from "framer-motion";
import { AnimatedButton } from "./ui/animated-button";
import { Sparkles, Heart, Star } from "lucide-react";
import heroImage from "@/assets/kids-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-cream via-white to-white">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-sunny-yellow/30 rounded-full blur-2xl animate-float-bubble" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-coral-pink/20 rounded-full blur-3xl animate-float-bubble" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-lavender/20 rounded-full blur-2xl animate-float-bubble" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-sky-blue/30 rounded-full blur-xl animate-float-bubble" style={{ animationDelay: "0.5s" }} />

      {/* Floating Stars */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-32 right-1/4"
      >
        <Star className="w-8 h-8 text-sunny-yellow fill-sunny-yellow" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-32 left-1/3"
      >
        <Heart className="w-6 h-6 text-coral-pink fill-coral-pink" />
      </motion.div>

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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream border-2 border-sunny-yellow/50 mb-6"
            >
              <Sparkles className="w-4 h-4 text-sunny-yellow" />
              <span className="text-sm font-semibold text-foreground">
                Global Growing Chains of Play Schools
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Where Little
              <br />
              <span className="bg-gradient-to-r from-lavender via-coral-pink to-sunny-yellow bg-clip-text text-transparent">
                Dreams Begin! ✨
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground max-w-lg mb-8">
              Viby International School is a fast-growing global chain of premium play schools, empowering little minds to become confident, compassionate, and capable global citizens.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <AnimatedButton variant="kids" size="xl">
                For Admission 🎒
              </AnimatedButton>
              <AnimatedButton variant="kidsOutline" size="xl">
                Become Partner 🤝
              </AnimatedButton>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
              {[
                { value: "20+", label: "Locations", emoji: "📍" },
                { value: "1278", label: "Students", emoji: "👧" },
                { value: "4+", label: "Years Exp.", emoji: "⭐" },
                { value: "4", label: "States", emoji: "🌍" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl mb-1">{stat.emoji}</div>
                  <div className="font-display font-bold text-2xl text-foreground">
                    {stat.value}
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
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-grass-green to-mint flex items-center justify-center text-2xl">
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
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-sunny-yellow rounded-full opacity-60 -z-10" />
            <div className="absolute -bottom-6 -right-8 w-32 h-32 bg-lavender/40 rounded-full -z-10" />
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
