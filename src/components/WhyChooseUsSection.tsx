import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  BookOpen,
  Users,
  Trophy,
  Globe,
  Shield,
  Palette,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "World-Class Curriculum",
    description:
      "IB and Cambridge certified programs designed for global success",
    color: "from-electric-blue to-blue-400",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description:
      "Internationally trained educators passionate about student growth",
    color: "from-electric-purple to-purple-400",
  },
  {
    icon: Trophy,
    title: "Academic Excellence",
    description:
      "98% university placement rate at top institutions worldwide",
    color: "from-gold to-yellow-400",
  },
  {
    icon: Globe,
    title: "Diverse Community",
    description:
      "Students from 50+ countries creating a rich cultural experience",
    color: "from-green-500 to-emerald-400",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description:
      "State-of-the-art security and wellness programs for peace of mind",
    color: "from-red-500 to-rose-400",
  },
  {
    icon: Palette,
    title: "Holistic Development",
    description:
      "Arts, sports, and leadership programs for well-rounded growth",
    color: "from-pink-500 to-fuchsia-400",
  },
];

export const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="section-padding relative overflow-hidden bg-navy-light/50"
      ref={ref}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-4">
            Excellence in Every
            <br />
            <span className="bg-gradient-to-r from-electric-blue to-electric-purple bg-clip-text text-transparent">
              Dimension
            </span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="glass-card p-8 h-full hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-semibold text-xl text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
