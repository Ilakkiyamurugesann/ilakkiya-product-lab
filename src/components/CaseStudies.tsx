import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Zap, LayoutDashboard, Brain, Layers } from "lucide-react";

const studies = [
  {
    icon: Zap,
    number: "01",
    title: "React Performance Optimization",
    challenge: "A data-heavy dashboard with 50+ components was rendering slowly, causing lag on user interactions.",
    solution: "Implemented React.memo, useMemo, virtualized lists, and code-splitting. Profiled with React DevTools to identify bottleneck re-renders.",
    result: "Reduced initial load time by 45% and eliminated interaction lag. Set performance budgets as team standard.",
    gradient: "from-primary to-neon-blue",
  },
  {
    icon: LayoutDashboard,
    number: "02",
    title: "Dashboard Engineering at Scale",
    challenge: "Multiple teams needed customizable dashboards with different data sources, filters, and chart types.",
    solution: "Designed a composable dashboard framework with pluggable widgets, shared filter context, and dynamic chart rendering via ECharts.",
    result: "Enabled 4 teams to build custom dashboards independently. Reduced dashboard development time from weeks to days.",
    gradient: "from-secondary to-neon-purple",
  },
  {
    icon: Brain,
    number: "03",
    title: "AI-Driven Workflow Enhancement",
    challenge: "Manual processes in internal tools slowed decision-making and required heavy human intervention.",
    solution: "Integrated AI concepts using MCP-based understanding, context-aware UI systems, and prompt-driven workflows for intelligent automation.",
    result: "Enabled smarter workflows with predictive insights and automation triggers, reducing manual overhead significantly.",
    gradient: "from-neon-cyan to-primary",
  },
  {
    icon: Layers,
    number: "04",
    title: "Greenfield Product Development",
    challenge: "Building a complex monitoring and governance platform from scratch with no existing codebase or design system.",
    solution: "Defined architecture, data flow patterns, and user interaction models. Built scalable component systems with comprehensive design tokens.",
    result: "Delivered a production-ready platform adopted across teams. Established reusable patterns that accelerated future development.",
    gradient: "from-primary to-secondary",
  },
];

const CaseStudies = () => (
  <section id="case-studies" className="py-32 px-6">
    <div className="container max-w-5xl mx-auto">
      <SectionReveal>
        <p className="text-sm font-mono text-primary tracking-wider uppercase mb-4">
          // case studies
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-16">
          Deep dives into <span className="gradient-text">real impact.</span>
        </h2>
      </SectionReveal>

      <div className="space-y-8">
        {studies.map((study, i) => (
          <SectionReveal key={study.title} delay={i * 0.15}>
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-8 md:p-10 group hover:glow-purple transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="hidden sm:flex flex-col items-center">
                  <span className="text-4xl font-extrabold gradient-text font-mono">{study.number}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${study.gradient} flex items-center justify-center`}>
                      <study.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{study.title}</h3>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 text-sm">
                    <div>
                      <span className="font-mono text-xs text-primary uppercase tracking-wider block mb-2">Challenge</span>
                      <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <span className="font-mono text-xs text-secondary uppercase tracking-wider block mb-2">Solution</span>
                      <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                    </div>
                    <div>
                      <span className="font-mono text-xs text-neon-cyan uppercase tracking-wider block mb-2">Result</span>
                      <p className="text-muted-foreground leading-relaxed">{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudies;
