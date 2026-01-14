import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Heart, Lightbulb, Users, Star, Sparkles } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Behavioral Skills",
    description: "Nurturing positive behaviors and emotional intelligence",
    color: "from-lavender to-purple-400",
    bg: "bg-lavender/10",
  },
  {
    icon: Lightbulb,
    title: "Academic Excellence",
    description: "Building strong foundations for lifelong learning",
    color: "from-sunny-yellow to-amber-400",
    bg: "bg-sunny-yellow/10",
  },
  {
    icon: Users,
    title: "Leadership Qualities",
    description: "Empowering children to lead with confidence",
    color: "from-sky-blue to-cyan-400",
    bg: "bg-sky-blue/10",
  },
  {
    icon: Heart,
    title: "Compassion",
    description: "Teaching kindness and empathy towards others",
    color: "from-coral-pink to-rose-400",
    bg: "bg-coral-pink/10",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="section-padding-kids relative overflow-hidden bg-white"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lavender/10 border-2 border-lavender/30 mb-4">
            <Star className="w-4 h-4 text-lavender" />
            <span className="text-sm font-semibold text-lavender">GEN-ALPHA Curriculum</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Why Choose
            <span className="bg-gradient-to-r from-lavender to-coral-pink bg-clip-text text-transparent"> Viby? </span>
            🌟
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            GEN-ALPHA Curriculum is designed to nurture behavioral skills, foster academic excellence, 
            and cultivate leadership qualities—empowering children to thrive in a rapidly evolving world.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className={`${feature.bg} rounded-3xl p-6 h-full border-4 border-transparent hover:border-cream transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}>
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-cream via-peach/30 to-mint/30 rounded-3xl p-8 md:p-12 border-4 border-white shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="text-5xl animate-wiggle">🌍</div>
              <div>
                <h3 className="font-display font-bold text-2xl text-foreground">
                  Proudly Rooted in Chennai, India
                </h3>
                <p className="text-muted-foreground">
                  Expanded across India and Malaysia — empowering global citizens
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-sunny-yellow" />
              <span className="font-display font-bold text-lg text-foreground">Premium Play Schools</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
