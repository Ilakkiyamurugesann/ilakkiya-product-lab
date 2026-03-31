import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
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

// Avatar path waypoints: defines where the avatar sits at each section
// x is percentage of viewport width, y offset from section top
const sectionWaypoints: Record<string, { xPercent: number; side: "left" | "right" }> = {
  hero: { xPercent: 85, side: "right" },
  about: { xPercent: 8, side: "left" },
  skills: { xPercent: 90, side: "right" },
  experience: { xPercent: 6, side: "left" },
  projects: { xPercent: 88, side: "right" },
  "case-studies": { xPercent: 7, side: "left" },
  "work-style": { xPercent: 90, side: "right" },
  contact: { xPercent: 50, side: "right" },
};

const sectionOrder = ["hero", "about", "skills", "experience", "projects", "case-studies", "work-style", "contact"];

const FloatingAvatar = () => {
  const [currentSection, setCurrentSection] = useState("hero");
  const [isClicked, setIsClicked] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [avatarPos, setAvatarPos] = useState({ x: 85, y: 50 });
  const [facingLeft, setFacingLeft] = useState(false);
  const tooltipTimer = useRef<ReturnType<typeof setTimeout>>();
  const prevXRef = useRef(85);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Scroll-based section detection + avatar positioning
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const scrollCenter = scrollY + vh * 0.5;

      // Find current and next section for interpolation
      let currentIdx = 0;
      const sectionEls: { id: string; top: number; bottom: number }[] = [];

      for (const id of sectionOrder) {
        const el = document.getElementById(id);
        if (el) {
          sectionEls.push({
            id,
            top: el.offsetTop,
            bottom: el.offsetTop + el.offsetHeight,
          });
        }
      }

      // Find which section we're in
      for (let i = sectionEls.length - 1; i >= 0; i--) {
        if (scrollCenter >= sectionEls[i].top) {
          currentIdx = i;
          break;
        }
      }

      const curr = sectionEls[currentIdx];
      const next = sectionEls[currentIdx + 1];

      const currWaypoint = sectionWaypoints[curr.id] || { xPercent: 85 };
      let targetX = currWaypoint.xPercent;

      // Interpolate X between current and next section
      if (next) {
        const nextWaypoint = sectionWaypoints[next.id] || { xPercent: 85 };
        const sectionProgress = Math.max(0, Math.min(1,
          (scrollCenter - curr.top) / (next.top - curr.top)
        ));
        // Ease the transition — avatar moves mostly in the last 30% before next section
        const eased = sectionProgress < 0.6 ? 0 : ((sectionProgress - 0.6) / 0.4) ** 2;
        targetX = currWaypoint.xPercent + (nextWaypoint.xPercent - currWaypoint.xPercent) * eased;
      }

      // Calculate Y position — avatar stays vertically centered in viewport
      // but bobs slightly based on scroll
      const bobAmount = Math.sin(scrollY * 0.005) * 8;
      const targetY = vh * 0.45 + bobAmount;

      // Determine facing direction
      if (Math.abs(targetX - prevXRef.current) > 0.5) {
        setFacingLeft(targetX < prevXRef.current);
      }
      prevXRef.current = targetX;

      setAvatarPos({ x: targetX, y: targetY });

      // Update current section for tooltip
      if (curr.id !== currentSection) {
        setCurrentSection(curr.id);
        setShowTooltip(true);
        clearTimeout(tooltipTimer.current);
        tooltipTimer.current = setTimeout(() => setShowTooltip(false), 2500);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial position
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

  const tooltip = sectionTooltips[currentSection] || "";
  const avatarSize = isMobile ? 52 : 68;

  if (isMobile) {
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
            y: [0, -5, 0],
            rotate: isClicked ? [0, -15, 15, -8, 0] : 0,
            scale: isClicked ? [1, 1.3, 0.9, 1.05, 1] : isHovering ? 1.1 : 1,
          }}
          transition={{
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 0.6 },
            scale: { duration: 0.4 },
          }}
          className="relative"
        >
          <img
            src={avatarImg}
            alt="Ilakkiya's Avatar"
            className="drop-shadow-lg"
            style={{ height: avatarSize * 1.4, width: "auto", objectFit: "contain" }}
          />
        </motion.div>
      </motion.div>
    );
  }

  // Desktop: avatar walks/floats across the page
  return (
    <motion.div
      className="fixed z-50 pointer-events-auto cursor-pointer select-none"
      animate={{
        left: `${avatarPos.x}%`,
        top: avatarPos.y,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 80,
        mass: 1.2,
      }}
      style={{
        translateX: "-50%",
        translateY: "-50%",
      }}
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

      {/* Trail glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: isHovering
            ? `0 0 30px hsl(217 91% 60% / 0.5), 0 0 60px hsl(270 60% 55% / 0.3)`
            : `0 0 15px hsl(217 91% 60% / 0.25), 0 0 40px hsl(270 60% 55% / 0.1)`,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Avatar with walking bob + flip direction */}
      <motion.div
        animate={{
          y: [0, -6, 0, -3, 0],
          rotate: isClicked ? [0, -20, 20, -10, 5, 0] : [0, -1, 0, 1, 0],
          scale: isClicked ? [1, 1.35, 0.85, 1.1, 1] : isHovering ? 1.15 : 1,
          scaleX: facingLeft ? -1 : 1,
        }}
        transition={{
          y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
          rotate: isClicked
            ? { duration: 0.6 }
            : { duration: 4, repeat: Infinity, ease: "easeInOut" },
          scale: { type: "spring", damping: 12, stiffness: 200 },
          scaleX: { duration: 0.3 },
        }}
        className="relative"
      >
        {/* Walking shadow */}
        <motion.div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-foreground/10 blur-md"
          animate={{
            width: [avatarSize * 0.5, avatarSize * 0.4, avatarSize * 0.5],
            height: [8, 5, 8],
            opacity: [0.25, 0.1, 0.25],
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Soft glow behind avatar */}
        <motion.div
          className="absolute inset-0 -z-10"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{
            filter: "blur(18px)",
            background: `radial-gradient(circle, hsl(217 91% 60% / 0.15), transparent 70%)`,
          }}
        />

        <img
          src={avatarImg}
          alt="Ilakkiya's Avatar"
          className="drop-shadow-2xl"
          style={{ height: avatarSize * 1.6, width: "auto", objectFit: "contain" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default FloatingAvatar;
