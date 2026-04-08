import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Diamond, Cpu, Globe, TrendingUp } from "lucide-react";

const points = [
  {
    icon: Cpu,
    title: "Engineering + Product + AI",
    description: "I combine deep technical skills with product thinking and AI integration, creating systems that are intelligent, scalable, and user-centric.",
  },
  {
    icon: Globe,
    title: "Systems, Not Just UI",
    description: "I build end-to-end product systems, from architecture design and data flows to intelligent dashboards and automated workflows.",
  },
  {
    icon: TrendingUp,
    title: "Real-World Impact Focus",
    description: "Every feature I build is measured by business outcomes. I translate complex data into actionable insights that drive decisions.",
  },
  {
    icon: Diamond,
    title: "Data-Heavy & Intelligent Apps",
    description: "Deep experience in enterprise-grade dashboards, governance platforms, and AI-powered tools that handle complexity with clarity.",
  },
];

const Differentiator = () => (
  <section id="differentiator" className="py-32 px-6">
    <div className="container max-w-5xl mx-auto">
      <SectionReveal>
        <p className="text-sm font-mono text-primary tracking-wider uppercase mb-4">
          // why me
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-16">
          What makes me <span className="gradient-text">different.</span>
        </h2>
      </SectionReveal>

      <div className="grid sm:grid-cols-2 gap-6">
        {points.map((point, i) => (
          <SectionReveal key={point.title} delay={i * 0.12}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-8 h-full group hover:glow-purple transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5">
                <point.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Differentiator;
