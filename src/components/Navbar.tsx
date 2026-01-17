import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedButton } from "./ui/animated-button";
import { Menu, X, Phone, Mail, Star } from "lucide-react";
import vibyLogo from "../assets/viby-logo.png";
import { RunningHorse } from "./RunningHorse";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Why Viby", href: "#why-viby" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-lavender via-coral-pink to-sunny-yellow text-white py-1.5 sm:py-2 px-4 text-center text-xs sm:text-sm font-medium">
        <div className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
          <Star className="w-3 h-3 sm:w-4 sm:h-4 animate-sparkle hidden sm:block" />
          <span>🎉 Admissions Open 2026-27 — Limited Seats — Join Now!</span>
          <Star className="w-3 h-3 sm:w-4 sm:h-4 animate-sparkle hidden sm:block" />
        </div>
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 overflow-hidden ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg"
            : "bg-white"
        }`}
      >
        {/* Running Horse Animation */}
        <RunningHorse />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2 sm:gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={vibyLogo} 
                alt="Viby International School" 
                className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
              />
              {/* <div>
                <span className="font-display font-bold text-lg sm:text-xl text-foreground">
                  Viby
                </span>
                <span className="font-body font-medium text-[10px] sm:text-xs text-muted-foreground block">
                  International School
                </span>
              </div> */}
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-lavender font-semibold transition-colors relative group text-sm xl:text-base"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-lavender to-coral-pink rounded-full group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Contact & CTA */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4">
              <a href="tel:+919840144800" className="flex items-center gap-1.5 xl:gap-2 text-foreground/70 hover:text-lavender transition-colors">
                <Phone className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                <span className="font-medium text-xs xl:text-sm">+91 98401 44800</span>
              </a>
              <AnimatedButton variant="kids" size="sm">
                Enroll Now 🌟
              </AnimatedButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-xl bg-cream text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-28 sm:pt-32 px-4 sm:px-6 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-3 sm:gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-xl sm:text-2xl font-display font-bold text-foreground/80 hover:text-lavender py-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="flex flex-col gap-3 sm:gap-4 mt-4 sm:mt-6">
                <a href="tel:+919840144800" className="flex items-center gap-2 text-foreground/70">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-lavender" />
                  <span className="font-semibold text-sm sm:text-base">+91 98401 44800</span>
                </a>
                <AnimatedButton variant="kids" size="lg" className="w-full">
                  Enroll Now 🌟
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};