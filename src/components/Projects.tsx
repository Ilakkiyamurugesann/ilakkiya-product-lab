import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import {
  TrendingUp,
  GitBranch,
  BarChart3,
  Layers,
  Brain,
  Monitor,
  Cpu,
  Workflow,
} from "lucide-react";

const projects = [
  {
    icon: BarChart3,
    title: "Data Analytics Dashboard System",
    problem:
      "Organizations lacked clear visibility into operational and financial data across environments.",
    approach:
      "Designed and developed interactive dashboards with dynamic filtering, time-based analysis, and reusable visualization components using modern frontend technologies.",
    impact:
      "Enabled better decision-making with improved data clarity, performance optimization, and scalable UI architecture.",
    tags: ["React", "TypeScript", "ECharts", "Data Visualization"],
  },
  {
    icon: Monitor,
    title: "Monitoring & Governance Platform",
    problem:
      "Teams needed a centralized system to monitor workflows, compliance, and system-level insights.",
    approach:
      "Built modular frontend components integrated with structured APIs, supporting real-time updates and data-driven views.",
    impact:
      "Improved operational efficiency and enabled teams to track and manage workflows effectively.",
    tags: ["React", "TypeScript", "System Design", "Enterprise"],
  },
  {
    icon: Workflow,
    title: "AI-Assisted Workflow System",
    problem:
      "Manual workflows required significant human intervention and slowed down processes.",
    approach:
      "Contributed to AI-assisted workflow solutions by integrating intelligent automation concepts, improving decision flows, and enhancing UI interaction patterns.",
    impact:
      "Reduced manual effort and improved workflow efficiency with smarter, semi-automated processes.",
    tags: ["React", "AI Integration", "Context-Aware UI", "Automation"],
  },
  {
    icon: GitBranch,
    title: "Hierarchical Data Visualization",
    problem:
      "Complex organizational or structured data was difficult to understand and navigate.",
    approach:
      "Developed expandable and interactive tree-based visualizations with smooth user interaction and optimized rendering.",
    impact:
      "Improved usability and enabled better understanding of complex hierarchical data.",
    tags: ["React", "D3", "Custom Components", "Data Visualization"],
  },
  {
    icon: Layers,
    title: "Reusable Component System",
    problem:
      "Inconsistent UI patterns across applications slowed down development.",
    approach:
      "Built reusable UI components and shared logic systems focusing on scalability, consistency, and maintainability.",
    impact:
      "Accelerated development speed and ensured uniform design across multiple products.",
    tags: ["React", "TypeScript", "Design System", "Architecture"],
  },
  {
    icon: TrendingUp,
    title: "Engineering Metrics & Insights Dashboard",
    problem:
      "Teams lacked visibility into engineering performance and delivery metrics.",
    approach:
      "Developed dashboards to visualize key metrics such as workflow efficiency, quality indicators, and delivery trends.",
    impact:
      "Improved sprint planning, decision-making, and overall engineering productivity.",
    tags: ["React", "TypeScript", "ECharts", "Analytics"],
  },
  {
    icon: Cpu,
    title: "Service-Based Product Interfaces",
    problem:
      "Service platforms required scalable and flexible UI systems to support multiple use cases.",
    approach:
      "Built frontend architectures supporting modular services, API-driven UI rendering, and dynamic configurations.",
    impact:
      "Enabled scalable product growth and easier feature expansion.",
    tags: ["React", "TypeScript", "System Design", "API Integration"],
  },
  {
    icon: Brain,
    title: "AI-Driven Module Integrations",
    problem:
      "Systems needed intelligent enhancements for automation and smarter data processing.",
    approach:
      "Worked on integrating AI-assisted modules into frontend workflows, improving usability and system intelligence.",
    impact:
      "Enhanced user experience and introduced intelligent decision-support capabilities.",
    tags: ["React", "AI/MCP", "Context-Aware UI", "Product Thinking"],
  },
];

const Projects = () => (
  <section id="projects" className="py-32 px-6">
    <div className="container max-w-6xl mx-auto">
      <SectionReveal>
        <p className="text-sm font-mono text-primary tracking-wider uppercase mb-4">
          // projects
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-16">
          Products I&apos;ve <span className="gradient-text">engineered.</span>
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

              <h3 className="text-lg font-semibold text-foreground mb-4">
                {project.title}
              </h3>

              <div className="space-y-3 text-sm flex-1">
                <div>
                  <span className="font-mono text-xs text-primary uppercase tracking-wider">
                    Problem
                  </span>
                  <p className="text-muted-foreground mt-1">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <span className="font-mono text-xs text-secondary uppercase tracking-wider">
                    Approach
                  </span>
                  <p className="text-muted-foreground mt-1">
                    {project.approach}
                  </p>
                </div>
                <div>
                  <span className="font-mono text-xs text-neon-cyan uppercase tracking-wider">
                    Impact
                  </span>
                  <p className="text-muted-foreground mt-1">
                    {project.impact}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-border/50">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono text-muted-foreground bg-muted rounded-md"
                  >
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

