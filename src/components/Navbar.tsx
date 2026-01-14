import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedButton } from "./ui/animated-button";
import { Menu, X, Phone, Mail, Star } from "lucide-react";

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
      <div className="bg-gradient-to-r from-lavender via-coral-pink to-sunny-yellow text-white py-2 px-4 text-center text-sm font-medium">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <Star className="w-4 h-4 animate-sparkle" />
          <span>🎉 Admissions Open 2026-27 — Limited Seats — Join Now!</span>
          <Star className="w-4 h-4 animate-sparkle" />
        </div>
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-lavender to-coral-pink flex items-center justify-center shadow-lg">
                <span className="text-white font-display font-bold text-2xl">V</span>
              </div>
              <div>
                <span className="font-display font-bold text-xl text-foreground">
                  Viby
                </span>
                <span className="font-body font-medium text-xs text-muted-foreground block">
                  International School
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-lavender font-semibold transition-colors relative group"
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
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+919840144800" className="flex items-center gap-2 text-foreground/70 hover:text-lavender transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-medium text-sm">+91 98401 44800</span>
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
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="fixed inset-0 z-40 bg-white pt-32 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-display font-bold text-foreground/80 hover:text-lavender py-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="flex flex-col gap-4 mt-6">
                <a href="tel:+919840144800" className="flex items-center gap-2 text-foreground/70">
                  <Phone className="w-5 h-5 text-lavender" />
                  <span className="font-semibold">+91 98401 44800</span>
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
