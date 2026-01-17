import { motion } from "framer-motion";

export const RunningHorse = () => {
  return (
    <motion.div
      className="absolute bottom-0 left-0 pointer-events-none z-10"
      initial={{ x: "-100px" }}
      animate={{ x: "calc(100vw + 100px)" }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: 2,
      }}
    >
      <motion.svg
        width="65"
        height="50"
        viewBox="0 0 100 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
        animate={{ y: [0, -2, 0, -1, 0] }}
        transition={{ duration: 0.25, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Realistic running horse silhouette with animated legs */}
        
        {/* Back Right Leg (furthest) */}
        <motion.path
          fill="#5D3E24"
          animate={{
            d: [
              // Extended back
              "M28 48 L24 55 L20 62 Q18 66 16 70 L20 70 L24 66 L30 55 L32 48 Z",
              // Folding up
              "M28 48 L30 54 L35 58 Q38 60 40 62 L38 65 L34 62 L28 55 L28 48 Z",
              // Extended forward
              "M28 48 L32 55 L38 62 Q42 66 45 70 L41 70 L36 66 L30 55 L28 48 Z",
              // Passing under
              "M28 48 L28 56 L26 64 Q25 68 24 70 L28 70 L30 66 L30 55 L28 48 Z",
              // Back to extended back
              "M28 48 L24 55 L20 62 Q18 66 16 70 L20 70 L24 66 L30 55 L32 48 Z",
            ],
          }}
          transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
        />

        {/* Back Left Leg (near) */}
        <motion.path
          fill="#8B5A2B"
          animate={{
            d: [
              // Folding up
              "M32 48 L34 54 L38 58 Q40 60 42 62 L40 65 L36 62 L32 55 L32 48 Z",
              // Extended forward
              "M32 48 L36 55 L42 62 Q46 66 48 70 L44 70 L40 66 L34 55 L32 48 Z",
              // Passing under
              "M32 48 L32 56 L30 64 Q29 68 28 70 L32 70 L34 66 L34 55 L32 48 Z",
              // Extended back
              "M32 48 L28 55 L24 62 Q22 66 20 70 L24 70 L28 66 L34 55 L36 48 Z",
              // Back to folding
              "M32 48 L34 54 L38 58 Q40 60 42 62 L40 65 L36 62 L32 55 L32 48 Z",
            ],
          }}
          transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
        />

        {/* Tail */}
        <motion.path
          fill="#3D2817"
          animate={{
            d: [
              "M18 32 Q8 35 5 42 Q3 50 8 55 Q14 52 10 46 Q12 38 18 35 Z",
              "M18 32 Q6 37 4 45 Q2 53 7 58 Q13 54 9 48 Q11 40 18 35 Z",
              "M18 32 Q10 34 7 40 Q5 48 10 52 Q15 50 12 44 Q13 37 18 35 Z",
              "M18 32 Q8 35 5 42 Q3 50 8 55 Q14 52 10 46 Q12 38 18 35 Z",
            ],
          }}
          transition={{ duration: 0.35, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Main Body */}
        <path
          d="M20 35 
             Q18 28 25 25 
             Q35 22 50 22 
             Q65 22 72 28 
             Q76 34 72 42 
             Q68 48 55 50 
             Q40 52 28 50 
             Q22 48 20 42 
             Z"
          fill="#8B5A2B"
        />
        
        {/* Body highlight */}
        <path
          d="M28 28 Q40 24 55 24 Q65 24 70 30 Q72 36 68 40 Q60 44 45 44 Q32 44 26 38 Q24 32 28 28 Z"
          fill="#A0693D"
        />

        {/* Front Right Leg (furthest) */}
        <motion.path
          fill="#5D3E24"
          animate={{
            d: [
              // Extended forward
              "M62 45 L68 52 L74 60 Q78 65 80 70 L76 70 L72 64 L66 54 L62 48 Z",
              // Passing under
              "M62 45 L62 54 L60 62 Q59 66 58 70 L62 70 L64 64 L64 54 L62 48 Z",
              // Extended back
              "M62 45 L58 52 L52 60 Q50 65 48 70 L52 70 L56 64 L62 54 L64 48 Z",
              // Folding up
              "M62 45 L64 52 L68 56 Q70 58 72 60 L70 63 L66 60 L62 54 L62 48 Z",
              // Back to extended forward
              "M62 45 L68 52 L74 60 Q78 65 80 70 L76 70 L72 64 L66 54 L62 48 Z",
            ],
          }}
          transition={{ duration: 0.3, repeat: Infinity, ease: "linear", delay: 0.075 }}
        />

        {/* Front Left Leg (near) */}
        <motion.path
          fill="#8B5A2B"
          animate={{
            d: [
              // Passing under
              "M66 45 L66 54 L64 62 Q63 66 62 70 L66 70 L68 64 L68 54 L66 48 Z",
              // Extended back
              "M66 45 L62 52 L56 60 Q54 65 52 70 L56 70 L60 64 L66 54 L68 48 Z",
              // Folding up
              "M66 45 L68 52 L72 56 Q74 58 76 60 L74 63 L70 60 L66 54 L66 48 Z",
              // Extended forward
              "M66 45 L72 52 L78 60 Q82 65 84 70 L80 70 L76 64 L70 54 L66 48 Z",
              // Back to passing under
              "M66 45 L66 54 L64 62 Q63 66 62 70 L66 70 L68 64 L68 54 L66 48 Z",
            ],
          }}
          transition={{ duration: 0.3, repeat: Infinity, ease: "linear", delay: 0.15 }}
        />

        {/* Neck */}
        <path
          d="M68 28 Q75 22 78 15 Q80 10 77 6 Q73 3 68 6 Q64 10 66 18 Q67 24 68 28"
          fill="#8B5A2B"
        />
        
        {/* Neck shading */}
        <path
          d="M70 25 Q74 18 76 12"
          stroke="#A0693D"
          strokeWidth="4"
          fill="none"
        />

        {/* Head */}
        <g>
          <path
            d="M77 6 Q82 4 88 6 Q92 9 92 14 Q90 18 85 18 Q80 17 78 14 Q76 10 77 6 Z"
            fill="#8B5A2B"
          />
          
          {/* Muzzle */}
          <path
            d="M88 10 Q94 11 96 15 Q96 18 93 19 Q89 19 88 16 Q87 13 88 10 Z"
            fill="#A0693D"
          />
          
          {/* Nostril */}
          <circle cx="94" cy="16" r="1.2" fill="#3D2817" />
          
          {/* Eye */}
          <circle cx="83" cy="9" r="2" fill="#1E1E1E" />
          <circle cx="82.5" cy="8.5" r="0.7" fill="white" />
          
          {/* Ear */}
          <path d="M78 4 Q77 -1 81 1 Q84 3 82 6 Q80 7 78 4" fill="#8B5A2B" />
        </g>

        {/* Mane */}
        <motion.path
          stroke="#3D2817"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          animate={{
            d: [
              "M76 4 Q72 10 74 18 Q70 24 72 30",
              "M76 4 Q70 8 72 16 Q68 22 70 28",
              "M76 4 Q73 12 75 20 Q71 26 73 32",
              "M76 4 Q72 10 74 18 Q70 24 72 30",
            ],
          }}
          transition={{ duration: 0.3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.path
          stroke="#3D2817"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          animate={{
            d: [
              "M74 6 Q71 12 73 20",
              "M74 6 Q69 10 71 18",
              "M74 6 Q72 14 74 22",
              "M74 6 Q71 12 73 20",
            ],
          }}
          transition={{ duration: 0.3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Dust */}
        <motion.g
          animate={{
            opacity: [0, 0.6, 0],
            x: [0, -15, -30],
            y: [0, -3, -8],
          }}
          transition={{ duration: 0.4, repeat: Infinity, ease: "easeOut" }}
        >
          <circle cx="20" cy="68" r="2.5" fill="#C9B896" />
          <circle cx="14" cy="65" r="1.8" fill="#C9B896" />
          <circle cx="12" cy="69" r="1.3" fill="#C9B896" />
        </motion.g>
      </motion.svg>
    </motion.div>
  );
};
