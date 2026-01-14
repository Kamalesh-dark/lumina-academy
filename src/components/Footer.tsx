import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const footerLinks = {
  "Quick Links": [
    { name: "About Us", href: "#about" },
    { name: "Admissions", href: "#admissions" },
    { name: "Programs", href: "#programs" },
    { name: "Campus Life", href: "#campus" },
    { name: "Contact", href: "#contact" },
  ],
  Academics: [
    { name: "Early Years", href: "#" },
    { name: "Primary School", href: "#" },
    { name: "Middle School", href: "#" },
    { name: "High School", href: "#" },
    { name: "IB Diploma", href: "#" },
  ],
  Resources: [
    { name: "Parent Portal", href: "#" },
    { name: "Student Resources", href: "#" },
    { name: "Calendar", href: "#" },
    { name: "News & Events", href: "#" },
    { name: "Careers", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer id="contact" className="relative overflow-hidden bg-navy-deep border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <motion.a
                href="#"
                className="flex items-center gap-3 mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-blue to-electric-purple flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="font-display font-bold text-xl text-white">
                    Viby
                  </span>
                  <span className="font-display font-light text-sm text-white/70 block -mt-1">
                    International School
                  </span>
                </div>
              </motion.a>

              <p className="text-white/60 mb-6 max-w-sm">
                Nurturing minds and inspiring futures since 2001. A world-class
                education that prepares students for a boundless tomorrow.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-white/70">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-electric-blue" />
                  <span>123 Education Lane, Copenhagen, Denmark</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-electric-blue" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-electric-blue" />
                  <span>info@vibyschool.com</span>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-display font-semibold text-white mb-4">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-white/60 hover:text-white transition-colors"
                      >
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
          <p className="text-white/50 text-sm">
            © 2026 Viby International School. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-white/70" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
