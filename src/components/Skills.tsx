import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const categories = [
  {
    label: "Frontend Core",
    skills: ["React", "Redux", "Hooks", "Context API", "TypeScript", "JavaScript ES6+"],
  },
  {
    label: "Styling & UI",
    skills: ["Tailwind CSS", "SCSS", "Bootstrap", "CSS3", "HTML5", "Responsive Design"],
  },
  {
    label: "Data & Visualization",
    skills: ["ECharts", "Chart.js", "Three.js", "D3 Concepts", "Data Mapping"],
  },
  {
    label: "Tools & Workflow",
    skills: ["Git", "GitLab", "Figma", "REST APIs", "Node.js", "SDLC", "Agile"],
  },
  {
    label: "Emerging",
    skills: ["AI Prompt Engineering", "Performance Profiling", "Micro-Frontends", "Design Systems"],
  },
];

const Skills = () => (
  <section id="skills" className="py-32 px-6">
    <div className="container max-w-5xl mx-auto">
      <SectionReveal>
        <p className="text-sm font-mono text-primary tracking-wider uppercase mb-4">
          // tech stack
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-16">
          Tools I <span className="gradient-text">build with.</span>
        </h2>
      </SectionReveal>

      <div className="space-y-10">
        {categories.map((cat, ci) => (
          <SectionReveal key={cat.label} delay={ci * 0.08}>
            <div>
              <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: si * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="glass px-4 py-2 rounded-xl text-sm font-medium text-foreground cursor-default transition-shadow hover:glow-blue"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
