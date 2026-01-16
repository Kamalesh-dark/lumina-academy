import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Heart,
} from "lucide-react";
import { FloatingBalloon, HappyStar } from "./AnimatedCharacters";
import vibyLogo from "../assets/viby-logo.png";

const footerLinks = {
  "Quick Links": [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Admissions", href: "#contact" },
    { name: "Contact", href: "#contact" },
  ],
  Programs: [
    { name: "Early Playgroup", href: "#programs" },
    { name: "Playgroup", href: "#programs" },
    { name: "L.K.G", href: "#programs" },
    { name: "U.K.G", href: "#programs" },
    { name: "Daycare", href: "#programs" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate footer links on scroll
      gsap.from(".footer-link", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative overflow-hidden bg-foreground text-white">
      {/* Wave Top */}
      <div className="absolute top-0 left-0 right-0 -translate-y-1">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80V40C240 0 480 0 720 20C960 40 1200 40 1440 20V80H0Z" fill="currentColor" className="text-foreground"/>
        </svg>
      </div>

      {/* Animated Characters - Hidden on mobile */}
      <FloatingBalloon color="#F472B6" className="absolute top-20 right-[10%] w-6 h-10 md:w-10 md:h-16 opacity-30 hidden md:block" delay={0} />
      <HappyStar color="#FBBF24" className="absolute top-32 left-[8%] w-6 h-6 md:w-8 md:h-8 opacity-20 hidden md:block" delay={0.5} />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 md:left-20 text-3xl md:text-4xl opacity-10 animate-float-bubble hidden sm:block">🌟</div>
      <div className="absolute bottom-40 right-10 md:right-20 text-3xl md:text-4xl opacity-10 animate-wiggle hidden sm:block">✨</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12 sm:pt-16">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="sm:col-span-2">
              <motion.a
                href="#"
                className="flex items-center gap-3 mb-4 sm:mb-6"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <motion.img 
                  src={vibyLogo}
                  alt="Viby International School"
                  className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <div>
                  <span className="font-display font-bold text-xl sm:text-2xl text-white">
                    Viby
                  </span>
                  <span className="font-body text-xs sm:text-sm text-white/70 block">
                    International School
                  </span>
                </div>
              </motion.a>

              <p className="text-white/70 mb-4 sm:mb-6 max-w-sm leading-relaxed text-sm sm:text-base">
                A fast-growing global chain of premium play schools, empowering 
                little minds to become confident, compassionate, and capable global citizens.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 sm:space-y-3 text-white/80">
                <motion.div 
                  className="flex items-center gap-2 sm:gap-3"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-lavender/20 flex items-center justify-center">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-lavender" />
                  </div>
                  <span className="text-sm sm:text-base">Chennai, India & Malaysia</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 sm:gap-3"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-coral-pink/20 flex items-center justify-center">
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-coral-pink" />
                  </div>
                  <a href="tel:+919840144800" className="hover:text-white transition-colors text-sm sm:text-base">
                    +91 98401 44800
                  </a>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 sm:gap-3"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-sunny-yellow/20 flex items-center justify-center">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-sunny-yellow" />
                  </div>
                  <a href="mailto:info@vibyinternationalschool.com" className="hover:text-white transition-colors text-xs sm:text-sm break-all">
                    info@vibyinternationalschool.com
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-display font-bold text-white text-base sm:text-lg mb-3 sm:mb-4">
                  {title}
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        className="footer-link text-white/70 hover:text-white transition-colors flex items-center gap-2 group text-sm sm:text-base"
                        whileHover={{ x: 5 }}
                      >
                        <motion.span 
                          className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-lavender group-hover:bg-coral-pink transition-colors"
                          whileHover={{ scale: 1.5 }}
                        />
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 sm:py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-white/60 text-xs sm:text-sm flex items-center gap-2 text-center sm:text-left">
            © 2026 Viby International School. Made with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-coral-pink fill-coral-pink" />
            </motion.span>
            for little learners
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-2 sm:gap-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/10 hover:bg-gradient-to-br hover:from-lavender hover:to-coral-pink flex items-center justify-center transition-all"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};