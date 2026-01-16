import { useEffect, useRef } from "react";
import gsap from "gsap";

// Running Cat - runs across the screen
export const RunningCat = ({ className = "", delay = 0, direction = "left" }: { className?: string; delay?: number; direction?: "left" | "right" }) => {
  const catRef = useRef<SVGSVGElement>(null);
  const legsRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (catRef.current) {
      const startX = direction === "left" ? "100vw" : "-100px";
      const endX = direction === "left" ? "-100px" : "100vw";
      
      gsap.fromTo(catRef.current, 
        { x: startX },
        { 
          x: endX, 
          duration: 12 + Math.random() * 5,
          ease: "linear",
          repeat: -1,
          delay,
        }
      );
    }
    if (legsRef.current) {
      gsap.to(legsRef.current.children, {
        rotation: 20,
        transformOrigin: "top center",
        duration: 0.1,
        ease: "linear",
        yoyo: true,
        repeat: -1,
        stagger: 0.05,
      });
    }
  }, [delay, direction]);

  return (
    <svg ref={catRef} className={className} viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: direction === "right" ? "scaleX(-1)" : "none" }}>
      {/* Body */}
      <ellipse cx="40" cy="28" rx="25" ry="15" fill="#FF9F43" />
      {/* Head */}
      <circle cx="65" cy="20" r="12" fill="#FF9F43" />
      {/* Ears */}
      <polygon points="60,10 55,0 58,12" fill="#FF9F43" />
      <polygon points="70,10 75,0 72,12" fill="#FF9F43" />
      <polygon points="60,10 56,2 58,11" fill="#FFB6C1" />
      <polygon points="70,10 74,2 72,11" fill="#FFB6C1" />
      {/* Eyes */}
      <ellipse cx="62" cy="18" rx="2" ry="3" fill="#333" />
      <ellipse cx="70" cy="18" rx="2" ry="3" fill="#333" />
      {/* Nose */}
      <ellipse cx="66" cy="23" rx="2" ry="1.5" fill="#FF6B6B" />
      {/* Whiskers */}
      <line x1="55" y1="22" x2="48" y2="20" stroke="#333" strokeWidth="0.5" />
      <line x1="55" y1="24" x2="48" y2="24" stroke="#333" strokeWidth="0.5" />
      <line x1="77" y1="22" x2="84" y2="20" stroke="#333" strokeWidth="0.5" />
      <line x1="77" y1="24" x2="84" y2="24" stroke="#333" strokeWidth="0.5" />
      {/* Tail */}
      <path d="M15 25 Q5 15 10 5" stroke="#FF9F43" strokeWidth="6" fill="none" strokeLinecap="round" />
      {/* Legs */}
      <g ref={legsRef}>
        <rect x="25" y="38" width="5" height="12" rx="2" fill="#FF9F43" />
        <rect x="35" y="38" width="5" height="12" rx="2" fill="#FF9F43" />
        <rect x="45" y="38" width="5" height="12" rx="2" fill="#FF9F43" />
        <rect x="55" y="38" width="5" height="12" rx="2" fill="#FF9F43" />
      </g>
    </svg>
  );
};

// Running Dog - runs across the screen
export const RunningDog = ({ className = "", delay = 0, direction = "left" }: { className?: string; delay?: number; direction?: "left" | "right" }) => {
  const dogRef = useRef<SVGSVGElement>(null);
  const tailRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (dogRef.current) {
      const startX = direction === "left" ? "100vw" : "-120px";
      const endX = direction === "left" ? "-120px" : "100vw";
      
      gsap.fromTo(dogRef.current,
        { x: startX },
        {
          x: endX,
          duration: 10 + Math.random() * 4,
          ease: "linear",
          repeat: -1,
          delay,
        }
      );
    }
    if (tailRef.current) {
      gsap.to(tailRef.current, {
        rotation: 30,
        transformOrigin: "left bottom",
        duration: 0.2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  }, [delay, direction]);

  return (
    <svg ref={dogRef} className={className} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: direction === "right" ? "scaleX(-1)" : "none" }}>
      {/* Body */}
      <ellipse cx="50" cy="35" rx="30" ry="18" fill="#8B6914" />
      {/* Head */}
      <circle cx="80" cy="25" r="15" fill="#8B6914" />
      {/* Snout */}
      <ellipse cx="92" cy="28" rx="8" ry="6" fill="#C4A03C" />
      {/* Ears */}
      <ellipse cx="72" cy="12" rx="6" ry="10" fill="#6B4E0B" />
      <ellipse cx="88" cy="12" rx="6" ry="10" fill="#6B4E0B" />
      {/* Eyes */}
      <circle cx="76" cy="22" r="3" fill="#333" />
      <circle cx="86" cy="22" r="3" fill="#333" />
      <circle cx="77" cy="21" r="1" fill="white" />
      <circle cx="87" cy="21" r="1" fill="white" />
      {/* Nose */}
      <ellipse cx="95" cy="26" rx="3" ry="2.5" fill="#333" />
      {/* Tongue */}
      <ellipse cx="93" cy="34" rx="3" ry="5" fill="#FF6B6B" />
      {/* Tail */}
      <path ref={tailRef} d="M20 30 Q10 20 15 10" stroke="#8B6914" strokeWidth="6" fill="none" strokeLinecap="round" />
      {/* Legs */}
      <rect x="30" y="48" width="6" height="12" rx="3" fill="#8B6914" />
      <rect x="42" y="48" width="6" height="12" rx="3" fill="#8B6914" />
      <rect x="58" y="48" width="6" height="12" rx="3" fill="#8B6914" />
      <rect x="70" y="48" width="6" height="12" rx="3" fill="#8B6914" />
    </svg>
  );
};

// Flying Bird
export const FlyingBird = ({ className = "", delay = 0, color = "#3B82F6" }: { className?: string; delay?: number; color?: string }) => {
  const birdRef = useRef<SVGSVGElement>(null);
  const wingsRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (birdRef.current) {
      gsap.fromTo(birdRef.current,
        { x: "100vw", y: 0 },
        {
          x: "-100px",
          y: "random(-50, 50)",
          duration: 8 + Math.random() * 4,
          ease: "linear",
          repeat: -1,
          delay,
        }
      );
    }
    if (wingsRef.current) {
      gsap.to(wingsRef.current, {
        scaleY: 0.3,
        duration: 0.15,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        transformOrigin: "center bottom",
      });
    }
  }, [delay]);

  return (
    <svg ref={birdRef} className={className} viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="30" cy="25" rx="15" ry="8" fill={color} />
      {/* Head */}
      <circle cx="45" cy="22" r="8" fill={color} />
      {/* Beak */}
      <polygon points="53,22 60,24 53,26" fill="#FFA500" />
      {/* Eye */}
      <circle cx="47" cy="20" r="2" fill="#333" />
      <circle cx="47.5" cy="19.5" r="0.8" fill="white" />
      {/* Wings */}
      <g ref={wingsRef}>
        <ellipse cx="30" cy="18" rx="12" ry="15" fill={color} opacity="0.9" />
      </g>
      {/* Tail */}
      <polygon points="15,22 5,15 5,32 15,28" fill={color} opacity="0.8" />
    </svg>
  );
};

// Hopping Frog
export const HoppingFrog = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => {
  const frogRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (frogRef.current) {
      const tl = gsap.timeline({ repeat: -1, delay });
      tl.to(frogRef.current, {
        x: "+=80",
        y: -40,
        duration: 0.3,
        ease: "power2.out",
      })
      .to(frogRef.current, {
        y: 0,
        duration: 0.3,
        ease: "power2.in",
      })
      .to({}, { duration: 0.5 }); // pause
    }
  }, [delay]);

  return (
    <svg ref={frogRef} className={className} viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="30" cy="35" rx="20" ry="12" fill="#22C55E" />
      {/* Head */}
      <ellipse cx="30" cy="22" rx="18" ry="14" fill="#22C55E" />
      {/* Eyes */}
      <circle cx="20" cy="12" r="8" fill="#22C55E" />
      <circle cx="40" cy="12" r="8" fill="#22C55E" />
      <circle cx="20" cy="10" r="5" fill="white" />
      <circle cx="40" cy="10" r="5" fill="white" />
      <circle cx="20" cy="10" r="3" fill="#333" />
      <circle cx="40" cy="10" r="3" fill="#333" />
      {/* Mouth */}
      <path d="M18 28 Q30 35 42 28" stroke="#1a8a3e" strokeWidth="2" fill="none" />
      {/* Spots */}
      <circle cx="25" cy="35" r="3" fill="#1a8a3e" opacity="0.5" />
      <circle cx="35" cy="38" r="2" fill="#1a8a3e" opacity="0.5" />
      {/* Front legs */}
      <ellipse cx="12" cy="42" rx="6" ry="4" fill="#22C55E" />
      <ellipse cx="48" cy="42" rx="6" ry="4" fill="#22C55E" />
      {/* Back legs */}
      <ellipse cx="8" cy="38" rx="8" ry="5" fill="#1a8a3e" />
      <ellipse cx="52" cy="38" rx="8" ry="5" fill="#1a8a3e" />
    </svg>
  );
};

// Swimming Fish
export const SwimmingFish = ({ className = "", delay = 0, color = "#F472B6" }: { className?: string; delay?: number; color?: string }) => {
  const fishRef = useRef<SVGSVGElement>(null);
  const tailRef = useRef<SVGPolygonElement>(null);

  useEffect(() => {
    if (fishRef.current) {
      gsap.fromTo(fishRef.current,
        { x: "100vw" },
        {
          x: "-80px",
          duration: 15 + Math.random() * 5,
          ease: "linear",
          repeat: -1,
          delay,
        }
      );
      gsap.to(fishRef.current, {
        y: "+=10",
        duration: 1,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
    if (tailRef.current) {
      gsap.to(tailRef.current, {
        scaleX: 0.7,
        duration: 0.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        transformOrigin: "right center",
      });
    }
  }, [delay]);

  return (
    <svg ref={fishRef} className={className} viewBox="0 0 70 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="35" cy="20" rx="22" ry="14" fill={color} />
      {/* Tail */}
      <polygon ref={tailRef} points="13,20 0,8 0,32" fill={color} />
      {/* Dorsal fin */}
      <polygon points="30,6 40,6 35,0" fill={color} opacity="0.8" />
      {/* Eye */}
      <circle cx="48" cy="17" r="5" fill="white" />
      <circle cx="49" cy="17" r="3" fill="#333" />
      <circle cx="50" cy="16" r="1" fill="white" />
      {/* Gill */}
      <path d="M42 15 Q40 20 42 25" stroke="white" strokeWidth="1.5" opacity="0.5" fill="none" />
      {/* Scales pattern */}
      <path d="M25 18 Q28 20 25 22" stroke="white" strokeWidth="0.8" opacity="0.3" fill="none" />
      <path d="M30 16 Q33 18 30 20" stroke="white" strokeWidth="0.8" opacity="0.3" fill="none" />
      {/* Mouth */}
      <ellipse cx="56" cy="21" rx="2" ry="1" fill="#333" />
      {/* Bubbles */}
      <circle cx="62" cy="15" r="2" fill="white" opacity="0.5" />
      <circle cx="66" cy="12" r="1.5" fill="white" opacity="0.4" />
    </svg>
  );
};

// Crawling Turtle
export const CrawlingTurtle = ({ className = "", delay = 0, direction = "left" }: { className?: string; delay?: number; direction?: "left" | "right" }) => {
  const turtleRef = useRef<SVGSVGElement>(null);
  const legsRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (turtleRef.current) {
      const startX = direction === "left" ? "100vw" : "-80px";
      const endX = direction === "left" ? "-80px" : "100vw";
      
      gsap.fromTo(turtleRef.current,
        { x: startX },
        {
          x: endX,
          duration: 25 + Math.random() * 10,
          ease: "linear",
          repeat: -1,
          delay,
        }
      );
    }
    if (legsRef.current) {
      gsap.to(legsRef.current.children, {
        rotation: 15,
        transformOrigin: "top center",
        duration: 0.3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.1,
      });
    }
  }, [delay, direction]);

  return (
    <svg ref={turtleRef} className={className} viewBox="0 0 70 45" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: direction === "right" ? "scaleX(-1)" : "none" }}>
      {/* Shell */}
      <ellipse cx="35" cy="22" rx="22" ry="16" fill="#22C55E" />
      <ellipse cx="35" cy="20" rx="18" ry="12" fill="#15803D" />
      {/* Shell pattern */}
      <path d="M35 10 L30 18 L35 26 L40 18 Z" fill="#22C55E" opacity="0.6" />
      <path d="M22 16 L28 20 L22 24" fill="#22C55E" opacity="0.6" />
      <path d="M48 16 L42 20 L48 24" fill="#22C55E" opacity="0.6" />
      {/* Head */}
      <ellipse cx="58" cy="24" rx="8" ry="6" fill="#86EFAC" />
      {/* Eyes */}
      <circle cx="61" cy="22" r="2" fill="#333" />
      <circle cx="61.5" cy="21.5" r="0.7" fill="white" />
      {/* Tail */}
      <ellipse cx="10" cy="26" rx="5" ry="3" fill="#86EFAC" />
      {/* Legs */}
      <g ref={legsRef}>
        <ellipse cx="20" cy="36" rx="5" ry="6" fill="#86EFAC" />
        <ellipse cx="50" cy="36" rx="5" ry="6" fill="#86EFAC" />
        <ellipse cx="22" cy="12" rx="4" ry="5" fill="#86EFAC" />
        <ellipse cx="48" cy="12" rx="4" ry="5" fill="#86EFAC" />
      </g>
    </svg>
  );
};

// Bouncing Bunny
export const BouncingBunny = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => {
  const bunnyRef = useRef<SVGSVGElement>(null);
  const earsRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (bunnyRef.current) {
      const tl = gsap.timeline({ repeat: -1, delay });
      tl.to(bunnyRef.current, {
        y: -35,
        x: "+=60",
        scaleY: 1.1,
        duration: 0.35,
        ease: "power2.out",
      })
      .to(bunnyRef.current, {
        y: 0,
        scaleY: 0.9,
        duration: 0.35,
        ease: "power2.in",
      })
      .to(bunnyRef.current, {
        scaleY: 1,
        duration: 0.15,
        ease: "elastic.out(1, 0.5)",
      })
      .to({}, { duration: 0.3 });
    }
    if (earsRef.current) {
      gsap.to(earsRef.current, {
        rotation: 5,
        transformOrigin: "bottom center",
        duration: 0.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  }, [delay]);

  return (
    <svg ref={bunnyRef} className={className} viewBox="0 0 50 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ears */}
      <g ref={earsRef}>
        <ellipse cx="18" cy="15" rx="6" ry="18" fill="white" />
        <ellipse cx="18" cy="15" rx="3" ry="12" fill="#FFB6C1" />
        <ellipse cx="32" cy="15" rx="6" ry="18" fill="white" />
        <ellipse cx="32" cy="15" rx="3" ry="12" fill="#FFB6C1" />
      </g>
      {/* Body */}
      <ellipse cx="25" cy="52" rx="18" ry="15" fill="white" />
      {/* Head */}
      <circle cx="25" cy="38" r="15" fill="white" />
      {/* Eyes */}
      <circle cx="19" cy="35" r="3" fill="#333" />
      <circle cx="31" cy="35" r="3" fill="#333" />
      <circle cx="20" cy="34" r="1" fill="white" />
      <circle cx="32" cy="34" r="1" fill="white" />
      {/* Nose */}
      <ellipse cx="25" cy="42" rx="3" ry="2" fill="#FFB6C1" />
      {/* Mouth */}
      <path d="M22 46 Q25 49 28 46" stroke="#333" strokeWidth="1.5" fill="none" />
      {/* Cheeks */}
      <circle cx="14" cy="40" r="3" fill="#FFB6C1" opacity="0.6" />
      <circle cx="36" cy="40" r="3" fill="#FFB6C1" opacity="0.6" />
      {/* Whiskers */}
      <line x1="10" y1="40" x2="3" y2="38" stroke="#333" strokeWidth="0.5" />
      <line x1="10" y1="43" x2="3" y2="43" stroke="#333" strokeWidth="0.5" />
      <line x1="40" y1="40" x2="47" y2="38" stroke="#333" strokeWidth="0.5" />
      <line x1="40" y1="43" x2="47" y2="43" stroke="#333" strokeWidth="0.5" />
      {/* Feet */}
      <ellipse cx="18" cy="65" rx="7" ry="4" fill="white" />
      <ellipse cx="32" cy="65" rx="7" ry="4" fill="white" />
    </svg>
  );
};

// Flying Bee
export const FlyingBee = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => {
  const beeRef = useRef<SVGSVGElement>(null);
  const wingsRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (beeRef.current) {
      gsap.fromTo(beeRef.current,
        { x: "-60px" },
        {
          x: "100vw",
          duration: 12 + Math.random() * 5,
          ease: "linear",
          repeat: -1,
          delay,
        }
      );
      gsap.to(beeRef.current, {
        y: "+=15",
        duration: 0.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
    if (wingsRef.current) {
      gsap.to(wingsRef.current, {
        scaleY: 0.5,
        duration: 0.05,
        ease: "linear",
        yoyo: true,
        repeat: -1,
        transformOrigin: "center bottom",
      });
    }
  }, [delay]);

  return (
    <svg ref={beeRef} className={className} viewBox="0 0 55 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Wings */}
      <g ref={wingsRef}>
        <ellipse cx="22" cy="12" rx="12" ry="8" fill="white" opacity="0.7" />
        <ellipse cx="33" cy="12" rx="12" ry="8" fill="white" opacity="0.7" />
      </g>
      {/* Body */}
      <ellipse cx="27" cy="28" rx="18" ry="12" fill="#FBBF24" />
      {/* Stripes */}
      <rect x="16" y="22" width="22" height="4" fill="#333" />
      <rect x="14" y="30" width="26" height="4" fill="#333" />
      {/* Head */}
      <circle cx="45" cy="28" r="8" fill="#333" />
      {/* Eyes */}
      <circle cx="47" cy="26" r="3" fill="white" />
      <circle cx="48" cy="26" r="1.5" fill="#333" />
      {/* Antenna */}
      <line x1="44" y1="20" x2="42" y2="14" stroke="#333" strokeWidth="1.5" />
      <line x1="48" y1="20" x2="50" y2="14" stroke="#333" strokeWidth="1.5" />
      <circle cx="42" cy="13" r="2" fill="#333" />
      <circle cx="50" cy="13" r="2" fill="#333" />
      {/* Stinger */}
      <polygon points="9,28 4,26 4,30" fill="#333" />
    </svg>
  );
};

// Waddling Duck
export const WaddlingDuck = ({ className = "", delay = 0, direction = "left" }: { className?: string; delay?: number; direction?: "left" | "right" }) => {
  const duckRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (duckRef.current) {
      const startX = direction === "left" ? "100vw" : "-70px";
      const endX = direction === "left" ? "-70px" : "100vw";
      
      gsap.fromTo(duckRef.current,
        { x: startX },
        {
          x: endX,
          duration: 18 + Math.random() * 6,
          ease: "linear",
          repeat: -1,
          delay,
        }
      );
      // Waddle motion
      gsap.to(duckRef.current, {
        rotation: 5,
        duration: 0.3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        transformOrigin: "center bottom",
      });
    }
  }, [delay, direction]);

  return (
    <svg ref={duckRef} className={className} viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: direction === "right" ? "scaleX(-1)" : "none" }}>
      {/* Body */}
      <ellipse cx="25" cy="35" rx="20" ry="14" fill="#FBBF24" />
      {/* Head */}
      <circle cx="48" cy="22" r="12" fill="#FBBF24" />
      {/* Beak */}
      <ellipse cx="60" cy="24" rx="8" ry="4" fill="#FF9500" />
      {/* Eye */}
      <circle cx="52" cy="19" r="3" fill="#333" />
      <circle cx="53" cy="18" r="1" fill="white" />
      {/* Wing */}
      <ellipse cx="22" cy="32" rx="12" ry="8" fill="#E5A520" />
      {/* Tail */}
      <polygon points="5,30 0,25 2,35" fill="#E5A520" />
      {/* Feet */}
      <ellipse cx="18" cy="48" rx="6" ry="3" fill="#FF9500" />
      <ellipse cx="32" cy="48" rx="6" ry="3" fill="#FF9500" />
    </svg>
  );
};

// Scurrying Squirrel
export const ScurryingSquirrel = ({ className = "", delay = 0, direction = "left" }: { className?: string; delay?: number; direction?: "left" | "right" }) => {
  const squirrelRef = useRef<SVGSVGElement>(null);
  const tailRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (squirrelRef.current) {
      const startX = direction === "left" ? "100vw" : "-80px";
      const endX = direction === "left" ? "-80px" : "100vw";
      
      gsap.fromTo(squirrelRef.current,
        { x: startX },
        {
          x: endX,
          duration: 8 + Math.random() * 4,
          ease: "linear",
          repeat: -1,
          delay,
        }
      );
    }
    if (tailRef.current) {
      gsap.to(tailRef.current, {
        rotation: 10,
        transformOrigin: "bottom left",
        duration: 0.3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  }, [delay, direction]);

  return (
    <svg ref={squirrelRef} className={className} viewBox="0 0 70 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: direction === "right" ? "scaleX(-1)" : "none" }}>
      {/* Tail */}
      <path ref={tailRef} d="M5 35 Q0 20 10 10 Q25 5 30 15 Q25 25 15 30" fill="#C9703E" />
      {/* Body */}
      <ellipse cx="40" cy="40" rx="18" ry="14" fill="#D97B3D" />
      {/* Head */}
      <circle cx="58" cy="30" r="12" fill="#D97B3D" />
      {/* Ears */}
      <circle cx="52" cy="18" r="5" fill="#D97B3D" />
      <circle cx="64" cy="18" r="5" fill="#D97B3D" />
      <circle cx="52" cy="18" r="3" fill="#FFB6C1" />
      <circle cx="64" cy="18" r="3" fill="#FFB6C1" />
      {/* Eyes */}
      <circle cx="54" cy="28" r="3" fill="#333" />
      <circle cx="63" cy="28" r="3" fill="#333" />
      <circle cx="55" cy="27" r="1" fill="white" />
      <circle cx="64" cy="27" r="1" fill="white" />
      {/* Nose */}
      <circle cx="68" cy="32" r="2" fill="#333" />
      {/* Belly */}
      <ellipse cx="42" cy="44" rx="10" ry="8" fill="#FBBF24" opacity="0.7" />
      {/* Legs */}
      <ellipse cx="28" cy="52" rx="5" ry="6" fill="#D97B3D" />
      <ellipse cx="50" cy="52" rx="5" ry="6" fill="#D97B3D" />
      {/* Arm holding acorn */}
      <ellipse cx="55" cy="42" rx="4" ry="6" fill="#D97B3D" />
      <ellipse cx="56" cy="48" rx="4" ry="3" fill="#8B6914" />
    </svg>
  );
};

// Slithering Snake
export const SlitheringSnake = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => {
  const snakeRef = useRef<SVGSVGElement>(null);
  const bodyRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (snakeRef.current) {
      gsap.fromTo(snakeRef.current,
        { x: "100vw" },
        {
          x: "-150px",
          duration: 15 + Math.random() * 5,
          ease: "linear",
          repeat: -1,
          delay,
        }
      );
    }
    if (bodyRef.current) {
      gsap.to(bodyRef.current, {
        attr: { d: "M10 25 Q25 15 40 25 Q55 35 70 25 Q85 15 100 25 Q115 35 130 25" },
        duration: 0.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  }, [delay]);

  return (
    <svg ref={snakeRef} className={className} viewBox="0 0 140 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <path 
        ref={bodyRef}
        d="M10 25 Q25 35 40 25 Q55 15 70 25 Q85 35 100 25 Q115 15 130 25" 
        stroke="#22C55E" 
        strokeWidth="12" 
        fill="none" 
        strokeLinecap="round"
      />
      {/* Pattern */}
      <path 
        d="M10 25 Q25 35 40 25 Q55 15 70 25 Q85 35 100 25 Q115 15 130 25" 
        stroke="#15803D" 
        strokeWidth="8" 
        fill="none" 
        strokeLinecap="round"
        strokeDasharray="8 12"
      />
      {/* Head */}
      <ellipse cx="130" cy="25" rx="10" ry="8" fill="#22C55E" />
      {/* Eyes */}
      <circle cx="134" cy="22" r="3" fill="white" />
      <circle cx="135" cy="22" r="1.5" fill="#333" />
      {/* Tongue */}
      <path d="M140 25 L148 22 M140 25 L148 28" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" />
      {/* Tail */}
      <path d="M10 25 L2 25" stroke="#22C55E" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
};

// Ladybug
export const CrawlingLadybug = ({ className = "", delay = 0, direction = "left" }: { className?: string; delay?: number; direction?: "left" | "right" }) => {
  const ladybugRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (ladybugRef.current) {
      const startX = direction === "left" ? "100vw" : "-50px";
      const endX = direction === "left" ? "-50px" : "100vw";
      
      gsap.fromTo(ladybugRef.current,
        { x: startX },
        {
          x: endX,
          duration: 20 + Math.random() * 8,
          ease: "linear",
          repeat: -1,
          delay,
        }
      );
    }
  }, [delay, direction]);

  return (
    <svg ref={ladybugRef} className={className} viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: direction === "right" ? "scaleX(-1)" : "none" }}>
      {/* Body */}
      <ellipse cx="25" cy="22" rx="18" ry="14" fill="#EF4444" />
      {/* Center line */}
      <line x1="25" y1="8" x2="25" y2="36" stroke="#333" strokeWidth="2" />
      {/* Spots */}
      <circle cx="15" cy="18" r="4" fill="#333" />
      <circle cx="35" cy="18" r="4" fill="#333" />
      <circle cx="18" cy="28" r="3" fill="#333" />
      <circle cx="32" cy="28" r="3" fill="#333" />
      <circle cx="25" cy="15" r="3" fill="#333" />
      {/* Head */}
      <circle cx="42" cy="22" r="8" fill="#333" />
      {/* Eyes */}
      <circle cx="44" cy="20" r="2" fill="white" />
      <circle cx="44.5" cy="19.5" r="1" fill="#333" />
      {/* Antenna */}
      <line x1="45" y1="14" x2="48" y2="8" stroke="#333" strokeWidth="1.5" />
      <line x1="47" y1="15" x2="52" y2="10" stroke="#333" strokeWidth="1.5" />
      <circle cx="48" cy="7" r="1.5" fill="#333" />
      <circle cx="52" cy="9" r="1.5" fill="#333" />
      {/* Legs */}
      <line x1="12" y1="28" x2="6" y2="35" stroke="#333" strokeWidth="2" />
      <line x1="20" y1="32" x2="16" y2="40" stroke="#333" strokeWidth="2" />
      <line x1="30" y1="32" x2="34" y2="40" stroke="#333" strokeWidth="2" />
      <line x1="38" y1="28" x2="44" y2="35" stroke="#333" strokeWidth="2" />
    </svg>
  );
};
