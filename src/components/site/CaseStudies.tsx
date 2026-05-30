import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const studies = [
  {
    title: "Executive Board Member @ VMEDHA-CBIT",
    description:
      "Organizing and coordinating institutional technical initiatives around Artificial Intelligence. Supporting workshops, seminars, and innovation-led activities.",
  },
  {
    title: "Smart India Hackathon — Internal Selected",
    description:
      "Collaborated with a team to design innovative technical solutions for speedy resolution of Municipal Management System issues. Represented the institute.",
  },
  {
    title: "VibeathonX Hackathon — Finalist",
    description:
      "Developed and presented a collaborative technical solution, selected for the final round among multiple competing teams.",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="mx-auto max-w-6xl px-6 py-32">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="font-display text-4xl text-ink md:text-5xl"
      >
        Recognitions & Involvement
      </motion.h2>
      <div className="mt-16 grid gap-12 md:grid-cols-3">
        {studies.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
            className="card-shadow group rounded-2xl bg-card p-8 transition hover:-translate-y-1"
          >
            <h3 className="font-display text-2xl leading-tight text-ink">{s.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
