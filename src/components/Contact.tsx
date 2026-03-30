import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-32 px-6">
    <div className="container max-w-3xl mx-auto text-center">
      <SectionReveal>
        <p className="text-sm font-mono text-primary tracking-wider uppercase mb-4">
          // contact
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-6">
          Let's build something
          <br />
          <span className="gradient-text">impactful.</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10 text-balance">
          I'm always open to discussing new products, engineering challenges, and collaboration opportunities.
        </p>
      </SectionReveal>

      <SectionReveal delay={0.2}>
        <motion.a
          href="mailto:ilakkiya.murugesan@example.com"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 gradient-bg text-primary-foreground px-8 py-4 rounded-2xl text-lg font-semibold glow-blue transition-shadow duration-300"
        >
          <Mail className="w-5 h-5" />
          Get in Touch
          <ArrowUpRight className="w-5 h-5" />
        </motion.a>

        <div className="flex items-center justify-center gap-2 mt-8 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          Coimbatore, India
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default Contact;
