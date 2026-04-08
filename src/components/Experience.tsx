import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const timeline = [
  {
    color: "bg-purple-500",
    role: "Technical Lead, Product Development",
    period: "Mar 2025 – Present",
    points: [
      "Leading frontend architecture for scalable product features",
      "Enforcing clean-code standards and driving high-quality development",
      "Mentoring developers and optimizing React performance",
      "Managing team responsibilities alongside hands-on development",
      "Driving greenfield initiatives with architecture planning and UI design",
    ],
  },
  {
    color: "bg-blue-500",
    role: "Associate Engineer, Product Development",
    period: "Jan 2025 – Mar 2025",
    points: [
      "Identified workflow inefficiencies and improved sprint predictability",
      "Optimized React components for rendering performance",
      "Mentored junior developers in reusable component design",
      "Integrated AI concepts into applications for smarter workflows",
    ],
  },
  {
    color: "bg-green-500",
    role: "Associate, Product Development",
    period: "Aug 2024 – Dec 2024",
    points: [
      "Built interactive ECharts dashboards and visual analytics features",
      "Developed reusable utilities and API service layers",
      "Improved data-formatting logic for visualization pipelines",
      "Implemented drilldowns and dynamic data exploration features",
    ],
  },
  {
    color: "bg-yellow-500",
    role: "Trainee, Product Development (Frontend)",
    period: "Aug 2023 – Aug 2024",
    points: [
      "Built reusable React modules with API integration",
      "Developed data pipelines for dashboards and charts",
      "Collaborated in agile sprints, delivering features with high reliability",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="py-32 px-6">
    <div className="container max-w-4xl mx-auto">
      <SectionReveal>
        <p className="text-sm font-mono text-primary tracking-wider uppercase mb-4">
          // experience
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-16">
          My <span className="gradient-text">journey.</span>
        </h2>
      </SectionReveal>

      <div className="relative">
        <div className="absolute left-[18px] top-2 bottom-2 w-px bg-border" />

        <div className="space-y-10">
          {timeline.map((item, i) => (
            <SectionReveal key={item.role} delay={i * 0.1}>
              <div className="relative flex gap-6">
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring", bounce: 0.4 }}
                    className={`w-[38px] h-[38px] rounded-full ${item.color} flex items-center justify-center`}
                  >
                    <div className="w-3 h-3 rounded-full bg-background" />
                  </motion.div>
                </div>

                <div className="glass rounded-2xl p-6 flex-1 hover:glow-blue transition-all duration-500">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h3 className="text-base font-semibold text-foreground">{item.role}</h3>
                    <span className="text-xs font-mono text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {item.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {item.points.map((p) => (
                      <li key={p} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>

      <SectionReveal delay={0.4}>
        <div className="mt-16 glass rounded-2xl p-8 text-center">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Education</p>
          <h3 className="text-lg font-semibold text-foreground">B.Sc. Computer Technology</h3>
          <p className="text-sm text-muted-foreground">Dr. SNS Rajalakshmi College of Arts & Science · 2020–2023</p>
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default Experience;
