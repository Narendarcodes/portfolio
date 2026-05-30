import { useState } from "react";

export function Footer() {
  const email = "gollanarendar2004[at]gmail[dot]com";
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(email.replace("[at]", "@").replace("[dot]", "."));
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  return (
    <footer className="mx-auto mt-16 max-w-6xl px-6 pb-16">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-ink via-ink/90 to-accent/80">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        <div className="relative px-6 py-28 text-center text-white">
          <p className="mx-auto max-w-2xl text-lg">
            Thanks for stopping by, it means a lot for me! &nbsp;If you feel like connect with me
          </p>
          <p className="mt-6 text-base">
            Drop me an email at{" "}
            <button onClick={onCopy} className="underline-grow font-medium text-white">
              {email}
            </button>{" "}
            I'd love to chat about design, trends, or pain points
          </p>
          <p className="mt-3 font-mono text-xs text-white/70">
            {copied ? "Copied!" : "Click email to copy"}
          </p>
        </div>
      </div>
    </footer>
  );
}
