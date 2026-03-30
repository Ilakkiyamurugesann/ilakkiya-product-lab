import SectionReveal from "./SectionReveal";
import { Lightbulb, BarChart3, Layers, Zap } from "lucide-react";

const pillars = [
  {
    icon: Lightbulb,
    title: "Product Thinker",
    description: "I don't just write code — I understand the 'why' behind every feature and build for user impact.",
  },
  {
    icon: BarChart3,
    title: "Data Translator",
    description: "Turning complex datasets and business logic into intuitive, interactive visual experiences.",
  },
  {
    icon: Layers,
    title: "Architecture First",
    description: "Scalable component systems, reusable patterns, and maintainable codebases are my foundation.",
  },
  {
    icon: Zap,
    title: "Performance Obsessed",
    description: "Every millisecond matters. I optimize renders, bundles, and user-perceived performance.",
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
          Frontend developer with a product engineer mindset based in Coimbatore, India.
          I specialize in building data-heavy UIs, dashboards, and scalable component systems
          using React, ECharts, and modern frontend architecture.
        </p>
      </SectionReveal>

      <div className="grid sm:grid-cols-2 gap-6">
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
