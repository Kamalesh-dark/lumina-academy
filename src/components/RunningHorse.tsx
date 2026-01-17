import { motion } from "framer-motion";

export const RunningHorse = () => {
  // Galloping leg positions for a realistic 4-beat gait
  const frontLeftLegVariants = {
    run: {
      d: [
        "M72 55 L78 70 L82 82", // Extended forward
        "M72 55 L74 72 L75 82", // Down
        "M72 55 L68 70 L62 82", // Extended back
        "M72 55 L70 68 L72 78", // Folded up
        "M72 55 L78 70 L82 82", // Extended forward
      ],
    },
  };

  const frontRightLegVariants = {
    run: {
      d: [
        "M68 55 L64 70 L60 82", // Extended back
        "M68 55 L66 68 L68 78", // Folded up
        "M68 55 L74 70 L78 82", // Extended forward
        "M68 55 L70 72 L71 82", // Down
        "M68 55 L64 70 L60 82", // Extended back
      ],
    },
  };

  const backLeftLegVariants = {
    run: {
      d: [
        "M45 55 L48 70 L52 82", // Extended forward
        "M45 55 L46 72 L47 82", // Down
        "M45 55 L40 70 L35 82", // Extended back
        "M45 55 L44 66 L46 75", // Folded up
        "M45 55 L48 70 L52 82", // Extended forward
      ],
    },
  };

  const backRightLegVariants = {
    run: {
      d: [
        "M40 55 L35 70 L30 82", // Extended back
        "M40 55 L39 66 L41 75", // Folded up
        "M40 55 L43 70 L47 82", // Extended forward
        "M40 55 L41 72 L42 82", // Down
        "M40 55 L35 70 L30 82", // Extended back
      ],
    },
  };

  const legTransition = {
    duration: 0.25,
    repeat: Infinity,
    ease: "linear" as const,
  };

  return (
    <motion.div
      className="absolute bottom-0 left-0 pointer-events-none z-10"
      initial={{ x: "-70px" }}
      animate={{ x: "calc(100vw + 70px)" }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: 3,
      }}
    >
      <svg
        width="60"
        height="50"
        viewBox="0 0 120 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        {/* Shadow under horse */}
        <motion.ellipse
          cx="55"
          cy="88"
          rx="25"
          ry="4"
          fill="rgba(0,0,0,0.15)"
          animate={{
            rx: [25, 22, 25],
            ry: [4, 3, 4],
          }}
          transition={{
            duration: 0.25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Back Right Leg (furthest) */}
        <motion.path
          variants={backRightLegVariants}
          animate="run"
          transition={{ ...legTransition, delay: 0.06 }}
          stroke="#6B3410"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />

        {/* Back Left Leg */}
        <motion.path
          variants={backLeftLegVariants}
          animate="run"
          transition={{ ...legTransition, delay: 0.12 }}
          stroke="#8B4513"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />

        {/* Tail */}
        <motion.path
          fill="#3D2314"
          animate={{
            d: [
              "M30 40 Q18 42 12 50 Q8 60 14 65 Q18 62 16 55 Q18 48 30 44",
              "M30 40 Q15 44 10 53 Q6 63 12 68 Q17 64 14 57 Q17 50 30 44",
              "M30 40 Q20 40 15 48 Q12 58 18 62 Q21 59 19 53 Q20 46 30 44",
              "M30 40 Q18 42 12 50 Q8 60 14 65 Q18 62 16 55 Q18 48 30 44",
            ],
          }}
          transition={{
            duration: 0.25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Horse Body with slight bounce */}
        <motion.g
          animate={{
            y: [0, -2, 0, -1, 0],
          }}
          transition={{
            duration: 0.25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Main body */}
          <ellipse cx="55" cy="42" rx="28" ry="16" fill="#8B4513" />
          
          {/* Body shading */}
          <ellipse cx="55" cy="46" rx="24" ry="11" fill="#A0522D" />
          
          {/* Shoulder muscle definition */}
          <ellipse cx="70" cy="40" rx="10" ry="8" fill="#7A3A0A" opacity="0.4" />
          
          {/* Haunch muscle */}
          <ellipse cx="38" cy="42" rx="12" ry="10" fill="#7A3A0A" opacity="0.3" />
        </motion.g>

        {/* Front Right Leg (furthest) */}
        <motion.path
          variants={frontRightLegVariants}
          animate="run"
          transition={{ ...legTransition }}
          stroke="#6B3410"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />

        {/* Front Left Leg */}
        <motion.path
          variants={frontLeftLegVariants}
          animate="run"
          transition={{ ...legTransition, delay: 0.18 }}
          stroke="#8B4513"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />

        {/* Hooves */}
        <motion.g
          animate={{
            opacity: 1,
          }}
        >
          {/* These will be positioned dynamically based on leg positions */}
        </motion.g>

        {/* Neck with bounce */}
        <motion.g
          animate={{
            y: [0, -2, 0, -1, 0],
            rotate: [0, 2, 0, 1, 0],
          }}
          transition={{
            duration: 0.25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "80px 40px" }}
        >
          <path
            d="M78 38 Q88 22 85 12 Q83 8 78 10 Q74 14 76 24 Q78 32 80 40"
            fill="#8B4513"
          />
          
          {/* Neck shading */}
          <path
            d="M80 36 Q86 24 84 16"
            stroke="#A0522D"
            strokeWidth="6"
            fill="none"
          />
        </motion.g>

        {/* Head with bounce */}
        <motion.g
          animate={{
            y: [0, -3, 0, -2, 0],
            rotate: [-5, 0, -5, -2, -5],
          }}
          transition={{
            duration: 0.25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "85px 15px" }}
        >
          {/* Head shape */}
          <ellipse cx="90" cy="10" rx="11" ry="7" fill="#8B4513" transform="rotate(-20 90 10)" />
          
          {/* Snout/muzzle */}
          <ellipse cx="100" cy="13" rx="6" ry="4" fill="#A0522D" transform="rotate(-15 100 13)" />
          
          {/* Nostril */}
          <circle cx="104" cy="14" r="1.5" fill="#3D2314" />
          
          {/* Eye */}
          <circle cx="92" cy="8" r="2.5" fill="#1a1a1a" />
          <circle cx="92.5" cy="7.5" r="0.8" fill="white" />
          
          {/* Ear */}
          <path d="M85 2 Q87 -4 91 0 Q88 4 85 2" fill="#8B4513" />
          <path d="M86 1 Q87 -2 89 0" stroke="#D2691E" strokeWidth="1" fill="none" />
          
          {/* Forelock (hair between ears) */}
          <path
            d="M84 3 Q82 6 80 4 Q78 7 76 5"
            stroke="#3D2314"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </motion.g>

        {/* Mane flowing */}
        <motion.path
          stroke="#3D2314"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          animate={{
            d: [
              "M80 12 Q74 18 76 25 Q72 30 74 36 Q70 40 72 44",
              "M80 12 Q72 16 74 23 Q70 28 72 34 Q68 38 70 42",
              "M80 12 Q76 20 78 27 Q74 32 76 38 Q72 42 74 46",
              "M80 12 Q74 18 76 25 Q72 30 74 36 Q70 40 72 44",
            ],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Additional mane strands */}
        <motion.path
          stroke="#3D2314"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          animate={{
            d: [
              "M82 14 Q78 20 80 28",
              "M82 14 Q76 18 78 26",
              "M82 14 Q80 22 82 30",
              "M82 14 Q78 20 80 28",
            ],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Dust/dirt kicked up */}
        <motion.g
          animate={{
            opacity: [0, 0.8, 0],
            x: [0, -15, -30],
            y: [0, -3, -8],
          }}
          transition={{
            duration: 0.4,
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          <circle cx="30" cy="85" r="2.5" fill="#D4B896" />
          <circle cx="25" cy="82" r="2" fill="#D4B896" />
          <circle cx="22" cy="86" r="1.5" fill="#D4B896" />
        </motion.g>

        {/* More dust particles */}
        <motion.g
          animate={{
            opacity: [0, 0.6, 0],
            x: [5, -10, -25],
            y: [0, -5, -10],
          }}
          transition={{
            duration: 0.35,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.1,
          }}
        >
          <circle cx="35" cy="84" r="1.5" fill="#C4A876" />
          <circle cx="32" cy="87" r="1" fill="#C4A876" />
        </motion.g>
      </svg>
    </motion.div>
  );
};
