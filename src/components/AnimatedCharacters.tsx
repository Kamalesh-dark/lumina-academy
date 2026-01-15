import { useEffect, useRef } from "react";
import gsap from "gsap";

// Playful SVG Characters for kids website
export const FloatingBalloon = ({ color = "#F472B6", className = "", delay = 0 }: { color?: string; className?: string; delay?: number }) => {
  const balloonRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (balloonRef.current) {
      gsap.to(balloonRef.current, {
        y: -20,
        rotation: 5,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay,
      });
    }
  }, [delay]);

  return (
    <svg ref={balloonRef} className={className} viewBox="0 0 60 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="30" rx="25" ry="30" fill={color} />
      <ellipse cx="30" cy="30" rx="25" ry="30" fill="white" fillOpacity="0.2" />
      <ellipse cx="22" cy="20" rx="8" ry="10" fill="white" fillOpacity="0.3" />
      <path d="M30 60 Q28 70 26 75 Q30 73 34 75 Q32 70 30 60" fill={color} />
      <path d="M30 75 C30 80 28 90 30 90 C32 90 30 80 30 75" stroke={color} strokeWidth="2" fill="none" />
    </svg>
  );
};

export const BouncingBall = ({ color = "#FBBF24", className = "", delay = 0 }: { color?: string; className?: string; delay?: number }) => {
  const ballRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (ballRef.current) {
      gsap.to(ballRef.current, {
        y: -30,
        scaleY: 1.1,
        scaleX: 0.95,
        duration: 0.5,
        ease: "power2.out",
        yoyo: true,
        repeat: -1,
        delay,
      });
    }
  }, [delay]);

  return (
    <svg ref={ballRef} className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="22" fill={color} />
      <circle cx="25" cy="25" r="22" fill="white" fillOpacity="0.15" />
      <ellipse cx="18" cy="18" rx="6" ry="8" fill="white" fillOpacity="0.4" />
      <path d="M10 25 Q25 35 40 25" stroke="white" strokeWidth="2" strokeOpacity="0.3" fill="none" />
    </svg>
  );
};

export const HappyStar = ({ color = "#FBBF24", className = "", delay = 0 }: { color?: string; className?: string; delay?: number }) => {
  const starRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (starRef.current) {
      gsap.to(starRef.current, {
        rotation: 15,
        scale: 1.15,
        duration: 1,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay,
      });
    }
  }, [delay]);

  return (
    <svg ref={starRef} className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 5 L35 22 L52 22 L38 32 L43 50 L30 40 L17 50 L22 32 L8 22 L25 22 Z" fill={color} />
      <path d="M30 5 L35 22 L52 22 L38 32 L43 50 L30 40 L17 50 L22 32 L8 22 L25 22 Z" fill="white" fillOpacity="0.2" />
      <circle cx="24" cy="28" r="2" fill="#333" />
      <circle cx="36" cy="28" r="2" fill="#333" />
      <path d="M26 34 Q30 38 34 34" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
};

export const PlayfulCloud = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => {
  const cloudRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (cloudRef.current) {
      gsap.to(cloudRef.current, {
        x: 20,
        duration: 4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay,
      });
    }
  }, [delay]);

  return (
    <svg ref={cloudRef} className={className} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="35" cy="40" rx="25" ry="18" fill="white" />
      <ellipse cx="55" cy="35" rx="30" ry="22" fill="white" />
      <ellipse cx="75" cy="42" rx="20" ry="15" fill="white" />
      <ellipse cx="45" cy="28" rx="18" ry="15" fill="white" />
      <ellipse cx="65" cy="25" rx="15" ry="12" fill="white" />
    </svg>
  );
};

export const WavingKid = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => {
  const handRef = useRef<SVGGElement>(null);
  const bodyRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (handRef.current) {
      gsap.to(handRef.current, {
        rotation: 20,
        transformOrigin: "bottom center",
        duration: 0.4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay,
      });
    }
    if (bodyRef.current) {
      gsap.to(bodyRef.current, {
        y: -5,
        duration: 1.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay,
      });
    }
  }, [delay]);

  return (
    <svg ref={bodyRef} className={className} viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="40" cy="85" rx="20" ry="25" fill="#EC4899" />
      {/* Head */}
      <circle cx="40" cy="35" r="25" fill="#FFDAB9" />
      {/* Hair */}
      <ellipse cx="40" cy="20" rx="22" ry="12" fill="#8B4513" />
      {/* Eyes */}
      <circle cx="32" cy="35" r="4" fill="#333" />
      <circle cx="48" cy="35" r="4" fill="#333" />
      <circle cx="33" cy="34" r="1.5" fill="white" />
      <circle cx="49" cy="34" r="1.5" fill="white" />
      {/* Smile */}
      <path d="M32 45 Q40 55 48 45" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Cheeks */}
      <circle cx="25" cy="42" r="4" fill="#FFB6C1" fillOpacity="0.6" />
      <circle cx="55" cy="42" r="4" fill="#FFB6C1" fillOpacity="0.6" />
      {/* Static arm */}
      <ellipse cx="22" cy="75" rx="8" ry="12" fill="#FFDAB9" />
      {/* Waving arm */}
      <g ref={handRef}>
        <ellipse cx="58" cy="55" rx="8" ry="15" fill="#FFDAB9" transform="rotate(-30 58 55)" />
        <circle cx="65" cy="42" r="6" fill="#FFDAB9" />
      </g>
      {/* Legs */}
      <ellipse cx="32" cy="108" rx="8" ry="12" fill="#FFDAB9" />
      <ellipse cx="48" cy="108" rx="8" ry="12" fill="#FFDAB9" />
    </svg>
  );
};

export const FlyingButterfly = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => {
  const butterflyRef = useRef<SVGSVGElement>(null);
  const wingsRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (butterflyRef.current) {
      gsap.to(butterflyRef.current, {
        x: 50,
        y: -30,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay,
      });
    }
    if (wingsRef.current) {
      gsap.to(wingsRef.current, {
        scaleX: 0.7,
        duration: 0.15,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        transformOrigin: "center",
      });
    }
  }, [delay]);

  return (
    <svg ref={butterflyRef} className={className} viewBox="0 0 70 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g ref={wingsRef}>
        {/* Left wings */}
        <ellipse cx="20" cy="18" rx="15" ry="12" fill="#A855F7" />
        <ellipse cx="18" cy="35" rx="12" ry="10" fill="#C084FC" />
        <circle cx="18" cy="16" r="4" fill="white" fillOpacity="0.5" />
        {/* Right wings */}
        <ellipse cx="50" cy="18" rx="15" ry="12" fill="#A855F7" />
        <ellipse cx="52" cy="35" rx="12" ry="10" fill="#C084FC" />
        <circle cx="52" cy="16" r="4" fill="white" fillOpacity="0.5" />
      </g>
      {/* Body */}
      <ellipse cx="35" cy="25" rx="4" ry="15" fill="#7C3AED" />
      {/* Antennae */}
      <path d="M33 12 Q30 5 28 3" stroke="#7C3AED" strokeWidth="1.5" fill="none" />
      <path d="M37 12 Q40 5 42 3" stroke="#7C3AED" strokeWidth="1.5" fill="none" />
      <circle cx="28" cy="3" r="2" fill="#7C3AED" />
      <circle cx="42" cy="3" r="2" fill="#7C3AED" />
    </svg>
  );
};

export const JumpingRabbit = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => {
  const rabbitRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (rabbitRef.current) {
      const tl = gsap.timeline({ repeat: -1, delay });
      tl.to(rabbitRef.current, {
        y: -40,
        scaleY: 1.1,
        duration: 0.3,
        ease: "power2.out",
      })
      .to(rabbitRef.current, {
        y: 0,
        scaleY: 0.9,
        duration: 0.3,
        ease: "power2.in",
      })
      .to(rabbitRef.current, {
        scaleY: 1,
        duration: 0.2,
        ease: "elastic.out(1, 0.5)",
      })
      .to({}, { duration: 1 }); // Pause
    }
  }, [delay]);

  return (
    <svg ref={rabbitRef} className={className} viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ears */}
      <ellipse cx="22" cy="15" rx="8" ry="18" fill="white" />
      <ellipse cx="22" cy="15" rx="4" ry="12" fill="#FFB6C1" />
      <ellipse cx="38" cy="15" rx="8" ry="18" fill="white" />
      <ellipse cx="38" cy="15" rx="4" ry="12" fill="#FFB6C1" />
      {/* Body */}
      <ellipse cx="30" cy="55" rx="22" ry="20" fill="white" />
      {/* Head */}
      <circle cx="30" cy="38" r="18" fill="white" />
      {/* Eyes */}
      <circle cx="24" cy="35" r="3" fill="#333" />
      <circle cx="36" cy="35" r="3" fill="#333" />
      <circle cx="25" cy="34" r="1" fill="white" />
      <circle cx="37" cy="34" r="1" fill="white" />
      {/* Nose */}
      <ellipse cx="30" cy="42" rx="3" ry="2" fill="#FFB6C1" />
      {/* Mouth */}
      <path d="M27 46 Q30 49 33 46" stroke="#333" strokeWidth="1.5" fill="none" />
      {/* Cheeks */}
      <circle cx="18" cy="40" r="3" fill="#FFB6C1" fillOpacity="0.6" />
      <circle cx="42" cy="40" r="3" fill="#FFB6C1" fillOpacity="0.6" />
      {/* Feet */}
      <ellipse cx="22" cy="72" rx="8" ry="5" fill="white" />
      <ellipse cx="38" cy="72" rx="8" ry="5" fill="white" />
    </svg>
  );
};

export const SpinningPinwheel = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => {
  const pinwheelRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (pinwheelRef.current) {
      gsap.to(pinwheelRef.current, {
        rotation: 360,
        duration: 3,
        ease: "linear",
        repeat: -1,
        transformOrigin: "center",
        delay,
      });
    }
  }, [delay]);

  return (
    <svg className={className} viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g ref={pinwheelRef} style={{ transformOrigin: "30px 30px" }}>
        <path d="M30 30 L30 5 Q45 15 30 30" fill="#EC4899" />
        <path d="M30 30 L55 30 Q45 45 30 30" fill="#FBBF24" />
        <path d="M30 30 L30 55 Q15 45 30 30" fill="#22C55E" />
        <path d="M30 30 L5 30 Q15 15 30 30" fill="#3B82F6" />
      </g>
      <circle cx="30" cy="30" r="4" fill="#fff" stroke="#333" strokeWidth="2" />
      <rect x="28" y="34" width="4" height="35" fill="#8B4513" />
    </svg>
  );
};

export const FloatingBubbles = ({ className = "" }: { className?: string }) => {
  const bubblesRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (bubblesRef.current) {
      const bubbles = bubblesRef.current.querySelectorAll('circle');
      bubbles.forEach((bubble, i) => {
        gsap.to(bubble, {
          y: -100 - Math.random() * 50,
          x: Math.random() * 30 - 15,
          opacity: 0,
          duration: 3 + Math.random() * 2,
          ease: "power1.out",
          repeat: -1,
          delay: i * 0.5,
        });
      });
    }
  }, []);

  return (
    <svg ref={bubblesRef} className={className} viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="140" r="8" fill="#87CEEB" fillOpacity="0.6" />
      <circle cx="50" cy="145" r="12" fill="#87CEEB" fillOpacity="0.5" />
      <circle cx="80" cy="138" r="6" fill="#87CEEB" fillOpacity="0.7" />
      <circle cx="35" cy="150" r="10" fill="#87CEEB" fillOpacity="0.4" />
      <circle cx="65" cy="142" r="7" fill="#87CEEB" fillOpacity="0.6" />
    </svg>
  );
};

export const DancingRainbow = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => {
  const rainbowRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (rainbowRef.current) {
      gsap.to(rainbowRef.current, {
        rotation: 5,
        y: -10,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay,
      });
    }
  }, [delay]);

  return (
    <svg ref={rainbowRef} className={className} viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 60 Q60 -20 110 60" stroke="#EF4444" strokeWidth="8" fill="none" />
      <path d="M18 60 Q60 -10 102 60" stroke="#F97316" strokeWidth="8" fill="none" />
      <path d="M26 60 Q60 0 94 60" stroke="#FBBF24" strokeWidth="8" fill="none" />
      <path d="M34 60 Q60 10 86 60" stroke="#22C55E" strokeWidth="8" fill="none" />
      <path d="M42 60 Q60 20 78 60" stroke="#3B82F6" strokeWidth="8" fill="none" />
      <path d="M50 60 Q60 30 70 60" stroke="#8B5CF6" strokeWidth="8" fill="none" />
    </svg>
  );
};
