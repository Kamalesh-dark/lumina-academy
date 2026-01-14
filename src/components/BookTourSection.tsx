import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedButton } from "./ui/animated-button";
import { Phone, Mail, MapPin, Calendar, ArrowRight } from "lucide-react";

export const BookTourSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="section-padding-kids relative overflow-hidden"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-lavender via-coral-pink to-sunny-yellow opacity-90" />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-30 animate-bounce-slow">🎈</div>
      <div className="absolute top-20 right-20 text-5xl opacity-30 animate-bounce-slow" style={{ animationDelay: "0.5s" }}>⭐</div>
      <div className="absolute bottom-20 left-1/4 text-6xl opacity-30 animate-bounce-slow" style={{ animationDelay: "1s" }}>🌈</div>
      <div className="absolute bottom-10 right-10 text-5xl opacity-30 animate-wiggle">🎨</div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 mb-6"
        >
          <Calendar className="w-4 h-4 text-white" />
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
          Journey Today! 🚀
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-4"
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30">
            <Phone className="w-8 h-8 text-white mx-auto mb-3" />
            <div className="font-display font-bold text-white text-lg">Call Us</div>
            <a href="tel:+919840144800" className="text-white/90 hover:text-white transition-colors">
              +91 98401 44800
            </a>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30">
            <Mail className="w-8 h-8 text-white mx-auto mb-3" />
            <div className="font-display font-bold text-white text-lg">Email Us</div>
            <a href="mailto:info@vibyinternationalschool.com" className="text-white/90 hover:text-white transition-colors text-sm">
              info@vibyinternationalschool.com
            </a>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30">
            <MapPin className="w-8 h-8 text-white mx-auto mb-3" />
            <div className="font-display font-bold text-white text-lg">Visit Us</div>
            <div className="text-white/90 text-sm">Chennai, India & Malaysia</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
