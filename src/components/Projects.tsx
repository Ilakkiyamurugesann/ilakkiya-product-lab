import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { TrendingUp, GitBranch, BarChart3, Layers } from "lucide-react";

const projects = [
  {
    icon: BarChart3,
    title: "Budget vs Actual Dashboard",
    problem: "Finance teams needed real-time visibility into budget performance across environments.",
    approach: "Built dynamic ECharts dashboards with environment filters (PROD/DEV/QA), financial year logic, and drill-down capabilities.",
    impact: "Reduced reporting time by 60%. Enabled data-driven budget decisions across teams.",
    tags: ["React", "ECharts", "REST API", "TypeScript"],
  },
  {
    icon: GitBranch,
    title: "Hierarchical Tree Visualization",
    problem: "Complex organizational and data hierarchies were impossible to navigate in tabular format.",
    approach: "Developed interactive tree visualizations with expand/collapse, search, and contextual detail panels.",
    impact: "Improved data exploration speed by 3x. Adopted by multiple internal teams.",
    tags: ["React", "D3", "Custom Components"],
  },
  {
    icon: Layers,
    title: "Reusable Component Library",
    problem: "Inconsistent UI patterns across products slowed development and created UX debt.",
    approach: "Architected a scalable component library with design tokens, composable APIs, and comprehensive documentation.",
    impact: "40% faster feature development. Unified visual language across 4 products.",
    tags: ["React", "TypeScript", "Storybook", "Design System"],
  },
  {
    icon: TrendingUp,
    title: "Engineering Metrics Dashboard",
    problem: "Leadership lacked visibility into team velocity, PR quality, and bug leakage trends.",
    approach: "Built metrics dashboards tracking sprint predictability, code review efficiency, and defect patterns.",
    impact: "Improved sprint predictability by 25%. Reduced bug leakage through early detection.",
    tags: ["React", "ECharts", "Data Pipeline"],
  },
];

const Projects = () => (
  <section id="projects" className="py-32 px-6">
    <div className="container max-w-5xl mx-auto">
      <SectionReveal>
        <p className="text-sm font-mono text-primary tracking-wider uppercase mb-4">
          // projects
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-16">
          Products I've <span className="gradient-text">engineered.</span>
        </h2>
      </SectionReveal>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <SectionReveal key={project.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-8 h-full flex flex-col group hover:glow-blue transition-all duration-500"
            >
              <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center mb-6">
                <project.icon className="w-5 h-5 text-primary-foreground" />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-4">{project.title}</h3>

              <div className="space-y-3 text-sm flex-1">
                <div>
                  <span className="font-mono text-xs text-primary uppercase tracking-wider">Problem</span>
                  <p className="text-muted-foreground mt-1">{project.problem}</p>
                </div>
                <div>
                  <span className="font-mono text-xs text-secondary uppercase tracking-wider">Approach</span>
                  <p className="text-muted-foreground mt-1">{project.approach}</p>
                </div>
                <div>
                  <span className="font-mono text-xs text-neon-cyan uppercase tracking-wider">Impact</span>
                  <p className="text-muted-foreground mt-1">{project.impact}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-border/50">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-xs font-mono text-muted-foreground bg-muted rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
