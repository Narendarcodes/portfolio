import { motion } from "framer-motion";
import { Code2, Server, Zap, Database, Box, HardDrive } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const techIcons: Record<string, React.ReactNode> = {
  React: <Code2 size={16} />,
  "Node.js": <Server size={16} />,
  FastAPI: <Zap size={16} />,
  PostgreSQL: <Database size={16} />,
  Docker: <Box size={16} />,
  MongoDB: <HardDrive size={16} />,
};

const logos = ["React", "Node.js", "FastAPI", "PostgreSQL", "Docker", "MongoDB"];

export function Logos() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="mb-12 text-center font-mono text-sm text-muted-foreground"
      >
        My Tech Stack
      </motion.p>
      <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
        {logos.map((name, i) => (
          <motion.div
            key={name}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
            className="flex items-center gap-2 rounded-lg bg-muted px-6 py-3 font-display text-lg text-muted-foreground"
          >
            <span className="opacity-60">{techIcons[name]}</span>
            {name}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
