import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import playgroupImg from "@/assets/playgroup.jpg";
import lkgImg from "@/assets/lkg-class.jpg";
import daycareImg from "@/assets/daycare.jpg";
import activitiesImg from "@/assets/activities.jpg";
import { FloatingBalloon, SpinningPinwheel, FlyingButterfly } from "./AnimatedCharacters";
import { ScurryingSquirrel, SwimmingFish, SlitheringSnake, CrawlingLadybug } from "./AnimatedAnimals";

gsap.registerPlugin(ScrollTrigger);

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
  const ref = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards slide in from different directions
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.program-card');
        cards.forEach((card, i) => {
          gsap.from(card, {
            x: i % 2 === 0 ? -100 : 100,
            opacity: 0,
            rotation: i % 2 === 0 ? -5 : 5,
            duration: 0.8,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          });
        });
      }

      // Image zoom on scroll
      gsap.utils.toArray('.program-image').forEach((img: any) => {
        gsap.from(img, {
          scale: 1.3,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="programs"
      className="section-padding-kids relative overflow-hidden bg-cream/50"
      ref={ref}
    >
      {/* Animated Characters */}
      <FloatingBalloon color="#A855F7" className="absolute top-20 left-[5%] w-14 h-20 z-10" delay={0} />
      <FloatingBalloon color="#22C55E" className="absolute top-32 right-[8%] w-12 h-18 z-10" delay={0.7} />
      <SpinningPinwheel className="absolute bottom-40 left-[8%] w-14 h-18 z-10" delay={0} />
      <FlyingButterfly className="absolute top-1/2 right-[5%] w-16 h-12 z-10" delay={1} />

      {/* Running Animals */}
      <ScurryingSquirrel className="absolute bottom-20 w-16 h-14 z-20" delay={0} direction="left" />
      <SwimmingFish className="absolute top-1/3 w-16 h-10 z-20" delay={1} color="#F472B6" />
      <SwimmingFish className="absolute top-1/2 w-14 h-8 z-20" delay={3} color="#3B82F6" />
      <SlitheringSnake className="absolute bottom-32 w-32 h-12 z-20" delay={2} />
      <CrawlingLadybug className="absolute bottom-16 w-12 h-10 z-20" delay={1.5} direction="left" />

      {/* Background decorations */}
      <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce-slow">🌸</div>
      <div className="absolute bottom-20 right-10 text-6xl opacity-20 animate-bounce-slow" style={{ animationDelay: "1s" }}>🌻</div>
      <div className="absolute top-1/2 right-1/4 text-4xl opacity-20 animate-wiggle">⭐</div>
      
      {/* Floating shapes */}
      <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-coral-pink/10 rounded-full blur-xl animate-float-bubble" />
      <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-lavender/10 rounded-full blur-xl animate-float-bubble" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-blue/10 border-2 border-sky-blue/30 mb-4">
            <span className="text-xl animate-bounce-slow">🏫</span>
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
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="program-card group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border-4 border-transparent hover:border-cream transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="program-image w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Age Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${program.color} text-white text-sm font-bold shadow-lg`}>
                    {program.ages}
                  </div>

                  {/* Emoji with animation */}
                  <motion.div 
                    className="absolute bottom-4 left-4 text-4xl"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {program.emoji}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-lavender transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {program.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 bg-gradient-to-r from-lavender/20 via-coral-pink/20 to-sunny-yellow/20 rounded-3xl p-8 border-4 border-white shadow-lg relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 text-6xl opacity-30 animate-wiggle">💝</div>
          <div className="absolute -bottom-4 -left-4 text-4xl opacity-30 animate-float-bubble">🌈</div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-4">
              <motion.div 
                className="text-5xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💝
              </motion.div>
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
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-lavender to-coral-pink text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              Learn More ✨
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
