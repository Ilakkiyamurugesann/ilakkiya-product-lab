import SectionReveal from "./SectionReveal";
import { Lightbulb, BarChart3, Layers, Zap, Brain, Users } from "lucide-react";

const pillars = [
  {
    icon: Lightbulb,
    title: "Product Thinker",
    description: "I own features end-to-end — from problem definition to delivery. Every feature is validated against real business impact.",
  },
  {
    icon: BarChart3,
    title: "Data Translator",
    description: "Turning complex datasets into intuitive dashboards with drilldowns, filters, and real-time insights that drive decisions.",
  },
  {
    icon: Brain,
    title: "AI-Integrated Builder",
    description: "Building AI-assisted workflows, context-aware UI systems, and intelligent dashboards with predictive insights.",
  },
  {
    icon: Layers,
    title: "Architecture First",
    description: "Scalable component systems, modular UI design, and maintainable codebases built for the next developer.",
  },
  {
    icon: Zap,
    title: "Performance Obsessed",
    description: "Optimizing renders, bundles, and user-perceived performance. Every millisecond matters in data-heavy UIs.",
  },
  {
    icon: Users,
    title: "Team Leader",
    description: "Managing teams, mentoring developers, driving collaboration, and taking accountability for deliverables and timelines.",
  },
];

const About = () => (
  <section id="about" className="py-32 px-6">
    <div className="container max-w-5xl mx-auto">
      <SectionReveal>
        <p className="text-sm font-mono text-primary tracking-wider uppercase mb-4">
          // about me
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
          I build interfaces that make
          <br />
          <span className="gradient-text">complex data feel simple.</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-16 text-balance">
          Frontend Engineer with strong expertise in React.js, data visualization, and scalable UI architecture,
          combined with hands-on experience in AI-integrated systems and product-driven development.
          Experienced in leading teams, driving greenfield initiatives, and translating complex business problems
          into intuitive dashboards, intelligent workflows, and actionable insights.
        </p>
      </SectionReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((pillar, i) => (
          <SectionReveal key={pillar.title} delay={i * 0.1}>
            <div className="glass rounded-2xl p-8 group hover:glow-blue transition-all duration-500 h-full">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5">
                <pillar.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default About;
