import { motion } from "framer-motion";
import { Search, ArrowDown, Sparkles } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const suggestions = [
  "What are his strengths?",
  "Explain his project experience",
  "What makes him different?",
  "Tell me about his AI integration work",
  "What's his leadership style?",
];

const Hero = () => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (q: string) => {
    if (!q.trim()) return;
    navigate(`/ask?q=${encodeURIComponent(q.trim())}`);
  };

  const handleSuggestionClick = (s: string) => {
    setShowSuggestions(false);
    handleSearch(s);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center hero-gradient dot-grid overflow-hidden">
      <div className="absolute top-20 left-[15%] w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-[10%] w-96 h-96 rounded-full bg-secondary/5 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 left-[60%] w-48 h-48 rounded-full bg-neon-cyan/5 blur-3xl animate-pulse-glow" />

      <div className="container relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium text-muted-foreground">
            Product Engineer · AI-Integrated Systems · Open to opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
        >
          <span className="text-foreground">Ilakkiya</span>
          <br />
          <span className="gradient-text">Murugesan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-balance"
        >
          Product Engineer building scalable systems, AI-integrated workflows &amp; data-driven platforms.
          <br />
          <span className="text-foreground font-medium">
            React · TypeScript · AI Integration · Data Visualization · Product Engineering
          </span>
        </motion.p>

        {/* AI Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative max-w-lg mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">Ask AI about me</span>
          </div>

          <div className="glass-strong rounded-2xl p-1">
            <form
              onSubmit={(e) => { e.preventDefault(); handleSearch(query); }}
              className="relative flex items-center"
            >
              <Search className="absolute left-4 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                placeholder="Ask about my skills, projects, experience..."
                className="w-full bg-transparent pl-12 pr-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none rounded-2xl"
              />
              <span className="hidden sm:flex items-center mr-3 px-2 py-1 text-xs font-mono text-muted-foreground bg-muted rounded-md">
                ⌘K
              </span>
            </form>
          </div>

          <p className="text-xs text-muted-foreground mt-2">
            Ask about my skills, experience, projects, or strengths
          </p>

          {showSuggestions && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full mt-2 w-full glass-strong rounded-xl p-2 text-left z-20"
            >
              {suggestions.map((s) => (
                <button
                  key={s}
                  onMouseDown={() => handleSuggestionClick(s)}
                  className="w-full text-left px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                >
                  {s}
                </button>
              ))}
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
