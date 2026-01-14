import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import scienceImage from "@/assets/science-lab.jpg";
import sportsImage from "@/assets/sports-activities.jpg";
import artImage from "@/assets/art-class.jpg";

const activities = [
  {
    title: "Science & Innovation",
    description: "State-of-the-art labs fostering scientific discovery",
    image: scienceImage,
  },
  {
    title: "Sports Excellence",
    description: "World-class facilities for athletic development",
    image: sportsImage,
  },
  {
    title: "Arts & Creativity",
    description: "Inspiring spaces for artistic expression",
    image: artImage,
  },
];

export const CampusLifeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="campus"
      className="section-padding relative overflow-hidden bg-navy-light/30"
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
          <span className="text-gold font-medium text-sm uppercase tracking-wider">
            Campus Life
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-4">
            Where Learning
            <br />
            <span className="bg-gradient-to-r from-electric-blue to-electric-purple bg-clip-text text-transparent">
              Comes Alive
            </span>
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Our vibrant campus offers endless opportunities for exploration,
            growth, and unforgettable experiences.
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/5]"
            >
              {/* Image */}
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="font-display font-bold text-2xl text-white mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-white/70 text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {activity.description}
                  </p>
                </motion.div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 glass-card p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "40+", label: "Clubs & Activities" },
              { value: "15", label: "Sports Teams" },
              { value: "3", label: "Art Studios" },
              { value: "100%", label: "Student Participation" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="font-display font-bold text-3xl md:text-4xl bg-gradient-to-r from-electric-blue to-gold bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
