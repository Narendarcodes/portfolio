import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const testimonials = [
  {
    quote:
      "Narendar's WhatsApp Calendar Agent was exactly what we needed. The way it bridges calendar and messaging is seamless — pure engineering thinking.",
    author: "SIH Panel",
    role: "Smart India Hackathon 2025",
  },
  {
    quote:
      "The adaptive learning system showed a deep understanding of both education and AI. Rare to see someone who can build both the frontend and the ML pipeline.",
    author: "Hackathon Judge",
    role: "VibeathonX 2025",
  },
  {
    quote:
      "As an executive board member, Narendar brings technical depth and organizational skill to every initiative. He doesn't just talk — he builds.",
    author: "Faculty Advisor",
    role: "VMEDHA — CBIT",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="mb-16 text-center font-display text-4xl text-ink md:text-5xl"
      >
        What People Say
      </motion.h2>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={t.author}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
            className="card-shadow flex flex-col justify-between rounded-2xl bg-card p-8"
          >
            <p className="text-sm leading-relaxed text-muted-foreground">&ldquo;{t.quote}&rdquo;</p>
            <footer className="mt-6">
              <strong className="block text-sm font-semibold text-ink">{t.author}</strong>
              <span className="text-xs text-muted-foreground">{t.role}</span>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
