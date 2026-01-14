import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Heart, Globe, Lightbulb } from "lucide-react";
import studentsImage from "@/assets/students-learning.jpg";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Striving for the highest standards in everything we do",
  },
  {
    icon: Heart,
    title: "Compassion",
    description: "Nurturing empathy and kindness in every student",
  },
  {
    icon: Globe,
    title: "Global Mindset",
    description: "Preparing students for an interconnected world",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Embracing creativity and forward-thinking education",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="floating-orb w-80 h-80 bg-electric-blue/20 -top-40 -right-40" />
      <div className="floating-orb w-64 h-64 bg-electric-purple/20 bottom-20 -left-32" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={studentsImage}
                alt="Students learning together"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 glass-card p-6 max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                  <span className="font-display font-bold text-navy-deep">
                    25+
                  </span>
                </div>
                <div>
                  <div className="font-display font-semibold text-white">
                    Years of Excellence
                  </div>
                  <div className="text-sm text-white/60">
                    Shaping future leaders
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-4 mb-6">
              Nurturing Minds,
              <br />
              <span className="bg-gradient-to-r from-electric-blue to-electric-purple bg-clip-text text-transparent">
                Inspiring Futures
              </span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              At Viby International School, we believe in the transformative
              power of education. Our internationally recognized curriculum,
              combined with a nurturing environment, empowers students to
              discover their passions and achieve their fullest potential.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="glass-card p-4 group hover:bg-white/10 transition-all duration-300"
                >
                  <value.icon className="w-8 h-8 text-electric-blue mb-3 group-hover:text-gold transition-colors" />
                  <h3 className="font-display font-semibold text-white mb-1">
                    {value.title}
                  </h3>
                  <p className="text-sm text-white/60">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
