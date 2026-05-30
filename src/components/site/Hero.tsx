import { motion, type Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
const rise: Variants = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } },
};

const codeIcon = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const botIcon = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <line x1="8" y1="16" x2="8" y2="16" />
    <line x1="16" y1="16" x2="16" y2="16" />
  </svg>
);

const zapIcon = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export function Hero() {
  return (
    <section id="top" className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 pt-32">
      <div className="flex flex-1 flex-row items-start justify-center gap-6 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -10, rotate: -4 }}
          animate={{ opacity: 1, x: 0, rotate: -4 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-[12vh] hidden w-[140px] shrink-0 -rotate-3 font-hand text-lg text-foreground/70 lg:block lg:w-[180px] lg:text-xl"
        >
          Hey, there!
          <br /> I build
          <br /> AI agents
          <svg width="60" height="40" viewBox="0 0 60 40" className="mt-1">
            <path
              d="M5 5 C 25 25, 35 30, 55 35"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <path d="M50 28 L55 35 L48 38" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </motion.div>

        <div className="flex flex-1 flex-col items-center justify-center py-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-4xl text-center"
          >
            <motion.h1
              variants={rise}
              className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-tight text-ink"
            >
              Aspiring AI Engineer building autonomous agentic workflows.
            </motion.h1>
            <motion.p
              variants={rise}
              className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Full-Stack Developer passionate about MERN, FastAPI, and AI-driven systems. From LMS
              platforms to WhatsApp agents — I ship what I build.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="mt-12 flex items-center gap-6 text-muted-foreground"
          >
            <motion.div variants={rise} className="flex items-center gap-2">
              {codeIcon}
              <span className="text-sm font-mono">MERN</span>
            </motion.div>
            <motion.div variants={rise} className="flex items-center gap-2">
              {botIcon}
              <span className="text-sm font-mono">AI Agents</span>
            </motion.div>
            <motion.div variants={rise} className="flex items-center gap-2">
              {zapIcon}
              <span className="text-sm font-mono">FastAPI</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 10, rotate: 4 }}
          animate={{ opacity: 1, x: 0, rotate: 4 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-[50vh] hidden w-[160px] shrink-0 rotate-3 font-hand text-lg text-foreground/70 lg:block lg:w-[220px] lg:text-xl"
        >
          Building agentic workflows
          <br />
          that solve real problems
          <svg width="60" height="40" viewBox="0 0 60 40" className="ml-auto mt-1">
            <path
              d="M55 5 C 35 25, 25 30, 5 35"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <path d="M10 28 L5 35 L12 38" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
