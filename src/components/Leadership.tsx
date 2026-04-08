import SectionReveal from "./SectionReveal";
import { Shield, Users, CheckCircle, Workflow } from "lucide-react";

const items = [
  {
    icon: Users,
    title: "Team Management",
    description: "Managed and guided development teams, ensuring alignment on goals and high-quality delivery.",
  },
  {
    icon: Workflow,
    title: "Development + Leadership",
    description: "Balanced hands-on development with leadership responsibilities, driving both execution and strategy.",
  },
  {
    icon: Shield,
    title: "End-to-End Ownership",
    description: "Owned features from ideation through deployment, taking accountability for outcomes and timelines.",
  },
  {
    icon: CheckCircle,
    title: "Delivery & Collaboration",
    description: "Improved team collaboration, sprint workflows, and delivery quality through structured processes and mentoring.",
  },
];

const Leadership = () => (
  <section id="leadership" className="py-32 px-6">
    <div className="container max-w-5xl mx-auto">
      <SectionReveal>
        <p className="text-sm font-mono text-primary tracking-wider uppercase mb-4">
          // leadership
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-16">
          Leadership & <span className="gradient-text">Ownership.</span>
        </h2>
      </SectionReveal>

      <div className="grid sm:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <SectionReveal key={item.title} delay={i * 0.1}>
            <div className="glass rounded-2xl p-8 h-full group hover:glow-blue transition-all duration-500">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Leadership;
