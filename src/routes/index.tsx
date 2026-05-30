import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Works } from "@/components/site/Works";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Logos } from "@/components/site/Logos";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Golla Narendar — AI Engineer & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Aspiring AI engineer building autonomous agentic workflows with MERN, FastAPI, and modern AI tools.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Works />
      <CaseStudies />
      <Logos />
      <About />
      <Testimonials />
      <Footer />
    </main>
  );
}
