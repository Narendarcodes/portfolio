import { motion } from "framer-motion";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;

const projects = [
  {
    tags: "FastAPI, Redis, PostgreSQL",
    title: "WhatsApp Calendar Agent",
    description:
      "An autonomous agent that schedules tasks and reminders across Google Calendar and WhatsApp. Built with FastAPI, Redis for job queuing, and PostgreSQL for persistence.",
    image: work1,
    href: "https://github.com/narendarcodes/Autonomous-Whatsapp-Agent",
  },
  {
    tags: "React, Node.js, OpenCV, Google-ADK",
    title: "Agentic-Adaptive Learning System",
    description:
      "AI-based system that assesses student performance through quizzes, identifies weak areas via OpenCV sentiment analysis, and helps improve academic outcomes.",
    image: work2,
    href: "https://github.com/narendarcodes/Agentic-adaptive-learning-system",
  },
  {
    tags: "Django, SQLite, Bootstrap",
    title: "GPTLogicLoom — Learning Management System",
    description:
      "Centralized platform pooling C, C++, and engineering resources for diploma students. Built to save research time and improve learning efficiency.",
    image: work3,
    href: "https://github.com/narendarcodes/gptlogicloom",
  },
];

function GitHubLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-flex items-center rounded-full border border-border bg-white px-6 py-2.5 text-sm font-medium text-ink shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      View on GitHub
    </a>
  );
}

export function Works() {
  return (
    <section id="works" className="mx-auto max-w-6xl px-6 py-32">
      <div className="mb-20 flex items-start gap-4">
        <h2 className="font-display text-4xl text-ink md:text-5xl">Projects</h2>
        <div className="relative hidden pt-2 md:block">
          <svg
            width="46"
            height="40"
            viewBox="0 0 46 40"
            className="absolute -left-2 top-3 text-foreground/60"
          >
            <path
              d="M2 18 C 10 6, 22 4, 40 14"
              stroke="currentColor"
              strokeWidth="1.4"
              fill="none"
            />
            <path d="M36 8 L40 14 L33 16" stroke="currentColor" strokeWidth="1.4" fill="none" />
          </svg>
          <span className="ml-12 inline-block font-hand text-xl leading-tight text-foreground/70">
            open source
            <br />
            and production-ready
          </span>
        </div>
      </div>

      <div className="grid gap-12 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
            className="group flex flex-col"
          >
            <div className="card-shadow overflow-hidden rounded-2xl bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  width={900}
                  height={680}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
            </div>
            <p className="mt-6 font-mono text-sm text-muted-foreground">{p.tags}</p>
            <h3 className="mt-3 font-display text-2xl leading-tight text-ink md:text-[2rem]">
              {p.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {p.description}
            </p>
            <GitHubLink href={p.href} />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
