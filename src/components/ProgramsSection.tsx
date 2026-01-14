import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import playgroupImg from "@/assets/playgroup.jpg";
import lkgImg from "@/assets/lkg-class.jpg";
import daycareImg from "@/assets/daycare.jpg";
import activitiesImg from "@/assets/activities.jpg";

const programs = [
  {
    title: "Early Playgroup",
    ages: "2 - 3 years",
    description: "First steps into learning through play and exploration",
    image: playgroupImg,
    color: "from-coral-pink to-rose-400",
    emoji: "🎈",
  },
  {
    title: "Playgroup",
    ages: "3 - 4 years",
    description: "Building social skills and creative expression",
    image: playgroupImg,
    color: "from-sunny-yellow to-amber-400",
    emoji: "🧸",
  },
  {
    title: "L.K.G",
    ages: "4 - 5 years",
    description: "Structured learning with alphabet and numbers",
    image: lkgImg,
    color: "from-lavender to-purple-400",
    emoji: "📚",
  },
  {
    title: "U.K.G",
    ages: "5 - 6 years",
    description: "Preparing for primary school excellence",
    image: lkgImg,
    color: "from-sky-blue to-cyan-400",
    emoji: "🎓",
  },
  {
    title: "Daycare",
    ages: "8 Months+",
    description: "Safe, nurturing care for your little ones",
    image: daycareImg,
    color: "from-grass-green to-emerald-400",
    emoji: "👶",
  },
  {
    title: "After School Activities",
    ages: "All Ages",
    description: "Fun activities to develop hobbies and skills",
    image: activitiesImg,
    color: "from-peach to-orange-300",
    emoji: "🎨",
  },
];

export const ProgramsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="programs"
      className="section-padding-kids relative overflow-hidden bg-cream/50"
      ref={ref}
    >
      {/* Background decorations */}
      <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce-slow">🌸</div>
      <div className="absolute bottom-20 right-10 text-6xl opacity-20 animate-bounce-slow" style={{ animationDelay: "1s" }}>🌻</div>
      <div className="absolute top-1/2 right-1/4 text-4xl opacity-20 animate-wiggle">⭐</div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-blue/10 border-2 border-sky-blue/30 mb-4">
            <span className="text-xl">🏫</span>
            <span className="text-sm font-semibold text-sky-blue">Early Childhood Development Hub</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Our
            <span className="bg-gradient-to-r from-sky-blue to-lavender bg-clip-text text-transparent"> Programs </span>
            🎒
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Age-appropriate programs designed to nurture every stage of your child's development
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border-4 border-transparent hover:border-cream transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Age Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${program.color} text-white text-sm font-bold shadow-lg`}>
                    {program.ages}
                  </div>

                  {/* Emoji */}
                  <div className="absolute bottom-4 left-4 text-4xl animate-bounce-slow">
                    {program.emoji}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {program.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 bg-gradient-to-r from-lavender/20 via-coral-pink/20 to-sunny-yellow/20 rounded-3xl p-8 border-4 border-white shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="text-5xl">💝</div>
              <div>
                <h3 className="font-display font-bold text-2xl text-foreground">
                  Special Education Program
                </h3>
                <p className="text-muted-foreground">
                  Inclusive learning environment for children with special needs
                </p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-lavender to-coral-pink text-white font-bold rounded-full shadow-lg"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
