import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const links = [
  { label: "Works", href: "#works" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-1/2 top-2 z-50 w-[min(860px,calc(100%-1.5rem))] -translate-x-1/2"
    >
      <nav className="pill-shadow flex items-center justify-between gap-2 rounded-full bg-pill px-1 py-1 text-pill-foreground">
        <a
          href="#top"
          className="flex flex-col rounded-full bg-pill px-2.5 py-0.5 font-mono text-[10px] leading-snug"
        >
          <span className="opacity-90">/Golla</span>
          <span className="opacity-90">
            &gt; Narendar
            <span className="caret" />
          </span>
        </a>

        <ul className="hidden items-center gap-4 text-[11px] md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="underline-grow opacity-70 transition hover:opacity-100">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-0.5">
          <div className="hidden items-center md:flex">
            <a
              href="https://linkedin.com/in/golla-narendar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded p-1 opacity-60 transition hover:bg-white/10 hover:opacity-100"
            >
              <Linkedin size={12} />
            </a>
            <a
              href="https://github.com/narendarcodes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded p-1 opacity-60 transition hover:bg-white/10 hover:opacity-100"
            >
              <Github size={12} />
            </a>
          </div>
          <a
            href="#"
            className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-pill transition hover:scale-[1.03]"
          >
            Resume
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
