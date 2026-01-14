import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Heart,
} from "lucide-react";

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
  return (
    <footer className="relative overflow-hidden bg-foreground text-white">
      {/* Wave Top */}
      <div className="absolute top-0 left-0 right-0 -translate-y-1">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80V40C240 0 480 0 720 20C960 40 1200 40 1440 20V80H0Z" fill="currentColor" className="text-foreground"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-16">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <motion.a
                href="#"
                className="flex items-center gap-3 mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-lavender to-coral-pink flex items-center justify-center shadow-lg">
                  <span className="text-white font-display font-bold text-2xl">V</span>
                </div>
                <div>
                  <span className="font-display font-bold text-2xl text-white">
                    Viby
                  </span>
                  <span className="font-body text-sm text-white/70 block">
                    International School
                  </span>
                </div>
              </motion.a>

              <p className="text-white/70 mb-6 max-w-sm leading-relaxed">
                A fast-growing global chain of premium play schools, empowering 
                little minds to become confident, compassionate, and capable global citizens.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-white/80">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-lavender/20 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-lavender" />
                  </div>
                  <span>Chennai, India & Malaysia</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-coral-pink/20 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-coral-pink" />
                  </div>
                  <a href="tel:+919840144800" className="hover:text-white transition-colors">
                    +91 98401 44800
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sunny-yellow/20 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-sunny-yellow" />
                  </div>
                  <a href="mailto:info@vibyinternationalschool.com" className="hover:text-white transition-colors">
                    info@vibyinternationalschool.com
                  </a>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-display font-bold text-white text-lg mb-4">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-lavender group-hover:bg-coral-pink transition-colors" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm flex items-center gap-2">
            © 2026 Viby International School. Made with 
            <Heart className="w-4 h-4 text-coral-pink fill-coral-pink" />
            for little learners
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-gradient-to-br hover:from-lavender hover:to-coral-pink flex items-center justify-center transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-white" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
