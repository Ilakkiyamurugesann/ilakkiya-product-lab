import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

const FloatingNav = () => {
  const [active, setActive] = useState("");
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);
  const y = useTransform(scrollY, [0, 200], [-20, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.href.slice(1),
        offset: document.getElementById(item.href.slice(1))?.offsetTop || 0,
      }));
      const scrollPos = window.scrollY + 200;
      const current = sections.filter((s) => scrollPos >= s.offset).pop();
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      style={{ opacity, y }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass-strong rounded-full px-2 py-2"
    >
      <ul className="flex items-center gap-1">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                active === item.href.slice(1)
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {active === item.href.slice(1) && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 gradient-bg rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default FloatingNav;
