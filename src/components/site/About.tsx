import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="card-shadow grid gap-10 rounded-2xl bg-card p-8 md:grid-cols-[1.3fr_1fr] md:gap-14 md:p-14"
      >
        <div>
          <p className="mb-5 font-mono text-sm text-muted-foreground">A little about me</p>
          <h2 className="font-display text-3xl leading-[1.1] text-ink md:text-[2.6rem]">
            From diploma classrooms to building AI agents that schedule your day.
          </h2>
          <p className="mt-7 text-muted-foreground">
            I'm Golla Narendar, an aspiring AI engineer at CBIT Hyderabad, currently pursuing my
            B.E. in CSE (AI & ML). My journey started with a diploma in Computer Science, where I
            built my first real project — a learning management system for fellow students to save
            research time.
          </p>
          <p className="mt-4 text-muted-foreground">
            Now I build autonomous agentic workflows. From a WhatsApp Calendar Agent that bridges
            Google Calendar with messaging, to an adaptive learning system that assesses student
            performance — I ship end-to-end systems using MERN, FastAPI, Redis, and Docker. I
            believe in building things that work, not just things that look good on paper.
          </p>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="font-display text-3xl text-ink">9.42 GPA</h3>
            <p className="mt-2 text-muted-foreground">
              Currently maintaining at CBIT while building production-grade AI systems and
              contributing to tech initiatives.
            </p>
          </div>
          <div>
            <h3 className="font-display text-3xl text-ink">3 Projects</h3>
            <p className="mt-2 text-muted-foreground">
              From LMS platforms to AI agents — each built end-to-end with modern stacks like MERN,
              FastAPI, and Docker.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src={portrait}
              alt="Portrait"
              width={768}
              height={768}
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
