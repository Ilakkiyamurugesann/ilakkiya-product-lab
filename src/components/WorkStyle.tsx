import SectionReveal from "./SectionReveal";
import { Target, Code2, Users, Brain, Rocket } from "lucide-react";

const principles = [
  {
    icon: Target,
    title: "Product-First Thinking",
    description: "Every line of code serves a user outcome. I break down ambiguous problems into structured solutions, prioritizing based on business impact.",
  },
  {
    icon: Code2,
    title: "Clean Architecture",
    description: "Separation of concerns, composable patterns, and documented APIs. My code is built to scale and designed for the next developer.",
  },
  {
    icon: Brain,
    title: "AI-Powered Development",
    description: "Leveraging AI for smarter workflows — from prompt-driven automation to context-aware systems that enhance decision-making.",
  },
  {
    icon: Users,
    title: "Collaborative Leadership",
    description: "I lead through shared context — clear PRs, knowledge transfer sessions, and mentoring. Great products are built by aligned teams.",
  },
  {
    icon: Rocket,
    title: "IC + Lead Versatility",
    description: "I operate as both an individual contributor delivering high-quality code and a tech lead driving team strategy and execution.",
  },
];

const WorkStyle = () => (
  <section id="work-style" className="py-32 px-6">
    <div className="container max-w-5xl mx-auto">
      <SectionReveal>
        <p className="text-sm font-mono text-primary tracking-wider uppercase mb-4">
          // engineering mindset
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-16">
          How I <span className="gradient-text">work.</span>
        </h2>
      </SectionReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {principles.map((p, i) => (
          <SectionReveal key={p.title} delay={i * 0.1}>
            <div className="glass rounded-2xl p-8 h-full text-center hover:glow-blue transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6">
                <p.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WorkStyle;
