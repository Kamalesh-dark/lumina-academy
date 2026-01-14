import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedButton } from "./ui/animated-button";
import { Sparkles, ArrowRight } from "lucide-react";

export const AdmissionsCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="admissions"
      className="section-padding relative overflow-hidden"
      ref={ref}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue via-electric-purple to-navy-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,215,0,0.2)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.3)_0%,_transparent_50%)]" />

        {/* Animated Shapes */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-1/4 -left-20 w-40 h-40 border border-white/10 rounded-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-1/4 -right-10 w-32 h-32 border border-white/10 rounded-full"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
        >
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-sm font-medium text-white">
            Limited Seats Available
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6"
        >
          Begin Your Child's
          <br />
          <span className="text-gold">Journey to Excellence</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
        >
          Admissions for 2026-27 are now open. Join our community of learners
          and unlock a world of possibilities.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <AnimatedButton variant="gold" size="xl" className="group">
            Start Application
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </AnimatedButton>
          <AnimatedButton variant="glass" size="xl">
            Schedule a Tour
          </AnimatedButton>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70"
        >
          <div className="flex items-center gap-2">
            <span>📞</span>
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
          <div className="flex items-center gap-2">
            <span>✉️</span>
            <span>admissions@vibyschool.com</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
