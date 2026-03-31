import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react";
import avatarImg from "@/assets/avatar.png";

const sectionTooltips: Record<string, string> = {
  hero: "Hi! I'm Ilakkiya 👋",
  about: "Learn more about me!",
  skills: "Here's what I'm good at ✨",
  experience: "My journey so far 🚀",
  projects: "Check out my work!",
  "case-studies": "Deep dives into problems I solved",
  "work-style": "How I like to work 🎯",
  contact: "Let's connect! 💬",
};

const sectionEnergy: Record<string, number> = {
  hero: 1,
  about: 0.6,
  skills: 0.9,
  experience: 0.7,
  projects: 1.2,
  "case-studies": 0.8,
  "work-style": 0.6,
  contact: 0.5,
};

const FloatingAvatar = () => {
  const [currentSection, setCurrentSection] = useState("hero");
  const [isClicked, setIsClicked] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const tooltipTimer = useRef<ReturnType<typeof setTimeout>>();

  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth - 80 : 0);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.8 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Cursor follow (desktop only)
  useEffect(() => {
    if (isMobile) return;
    const handle = (e: MouseEvent) => {
      // Avatar stays on right side, subtly influenced by cursor
      const targetX = window.innerWidth - 90 + (e.clientX - window.innerWidth / 2) * 0.04;
      const targetY = e.clientY * 0.3 + window.innerHeight * 0.35;
      mouseX.set(targetX);
      mouseY.set(targetY);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [isMobile, mouseX, mouseY]);

  // Section detection on scroll
  useEffect(() => {
    const sections = ["hero", "about", "skills", "experience", "projects", "case-studies", "work-style", "contact"];
    const onScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          if (sections[i] !== currentSection) {
            setCurrentSection(sections[i]);
            setShowTooltip(true);
            clearTimeout(tooltipTimer.current);
            tooltipTimer.current = setTimeout(() => setShowTooltip(false), 3000);
          }
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    // Initial tooltip hide
    tooltipTimer.current = setTimeout(() => setShowTooltip(false), 4000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(tooltipTimer.current);
    };
  }, [currentSection]);

  const handleClick = useCallback(() => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 600);
  }, []);

  const energy = sectionEnergy[currentSection] || 1;
  const tooltip = sectionTooltips[currentSection] || "";
  const avatarSize = isMobile ? 56 : 72;

  if (isMobile) {
    // Simplified fixed avatar for mobile
    return (
      <motion.div
        className="fixed bottom-6 right-6 z-50 cursor-pointer"
        onClick={handleClick}
        onHoverStart={() => { setIsHovering(true); setShowTooltip(true); }}
        onHoverEnd={() => { setIsHovering(false); setShowTooltip(false); }}
      >
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.9 }}
              className="absolute -top-12 right-0 whitespace-nowrap glass-strong rounded-lg px-3 py-1.5 text-xs font-medium text-foreground shadow-lg"
            >
              {tooltip}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          animate={{
            y: [0, -6 * energy, 0],
            rotate: isClicked ? [0, -15, 15, -8, 0] : 0,
            scale: isClicked ? [1, 1.3, 0.9, 1.05, 1] : isHovering ? 1.1 : 1,
          }}
          transition={{
            y: { duration: 3 / energy, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 0.6 },
            scale: { duration: 0.4 },
          }}
          className="relative"
        >
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-full glow-blue opacity-60 animate-pulse-glow" />

          <img
            src={avatarImg}
            alt="Ilakkiya's Avatar"
            width={avatarSize}
            height={avatarSize}
            className="rounded-full border-2 border-primary/30 shadow-lg object-cover"
            style={{ width: avatarSize, height: avatarSize }}
          />
        </motion.div>
      </motion.div>
    );
  }

  // Desktop: follows cursor subtly on right side
  return (
    <motion.div
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      className="fixed z-50 pointer-events-auto cursor-pointer select-none"
      onClick={handleClick}
      onHoverStart={() => { setIsHovering(true); setShowTooltip(true); }}
      onHoverEnd={() => { setIsHovering(false); }}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap glass-strong rounded-xl px-4 py-2 text-sm font-medium text-foreground shadow-xl"
          >
            {tooltip}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-card rotate-45 border-r border-b border-border/30" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trail / glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: isHovering
            ? `0 0 30px hsl(217 91% 60% / 0.5), 0 0 60px hsl(270 60% 55% / 0.3), 0 0 90px hsl(185 100% 55% / 0.15)`
            : `0 0 15px hsl(217 91% 60% / 0.25), 0 0 40px hsl(270 60% 55% / 0.1)`,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Avatar */}
      <motion.div
        animate={{
          y: [0, -8 * energy, 0],
          rotate: isClicked ? [0, -20, 20, -10, 5, 0] : 0,
          scale: isClicked ? [1, 1.35, 0.85, 1.1, 1] : isHovering ? 1.15 : 1,
        }}
        transition={{
          y: { duration: 3.5 / energy, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 0.6 },
          scale: { type: "spring", damping: 12, stiffness: 200 },
        }}
        className="relative"
      >
        {/* Outer glow ring */}
        <motion.div
          className="absolute -inset-2 rounded-full"
          animate={{
            opacity: [0.3, 0.6 * energy, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: `radial-gradient(circle, hsl(217 91% 60% / 0.2), hsl(270 60% 55% / 0.1), transparent 70%)`,
          }}
        />

        {/* Particle dots */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/40"
            animate={{
              x: [0, Math.cos((i * Math.PI) / 2) * 30, 0],
              y: [0, Math.sin((i * Math.PI) / 2) * 30, 0],
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeOut",
            }}
            style={{
              top: "50%",
              left: "50%",
            }}
          />
        ))}

        <img
          src={avatarImg}
          alt="Ilakkiya's Avatar"
          width={avatarSize}
          height={avatarSize}
          className="rounded-full border-2 border-primary/30 shadow-2xl object-cover"
          style={{ width: avatarSize, height: avatarSize }}
        />
      </motion.div>
    </motion.div>
  );
};

export default FloatingAvatar;
