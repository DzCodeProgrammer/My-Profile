import { ArrowDownRight, ArrowUpRight, BrainCircuit, Boxes, Crosshair, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Architecture, CodeTerminal, CustomCursor, Hero, Navigation, ProjectGallery, TechOrbit } from "@/components/Experience";
import { MotionSystem } from "@/components/MotionSystem";

const principles = [
  { icon: Crosshair, title: "System thinking", copy: "Understand the whole before optimizing the parts." },
  { icon: Boxes, title: "Built with intent", copy: "Every layer earns its place in the final system." },
  { icon: BrainCircuit, title: "AI augmented", copy: "Explore intelligence where it creates real utility." },
  { icon: Sparkles, title: "Always evolving", copy: "Learn, test, reflect, and rebuild with better context." },
];

const practice = [
  ["NOW", "ENGINEERING", "Building modern software systems and strengthening full-stack practice."],
  ["ONGOING", "EXPERIMENTING", "Exploring AI, computer vision, automation, and new interactions."],
  ["CONTINUOUS", "LEARNING", "Studying architecture, backend systems, and developer tooling."],
  ["OPEN", "COLLABORATING", "Available where software, systems thinking, and ambitious ideas meet."],
];

export default function Home() {
  return (
    <main>
      <MotionSystem />
      <CustomCursor />
      <Navigation />
      <Hero />

      <section className="principles section-shell" aria-labelledby="principles-title">
        <div className="principles-intro" data-reveal>
          <span className="eyebrow">// ENGINEERING PHILOSOPHY</span>
          <h2 id="principles-title">I don&apos;t just write code.<br /><em>I design systems that work.</em></h2>
        </div>
        <div className="principle-grid">
          {principles.map(({ icon: Icon, title, copy }, index) => (
            <article key={title} data-reveal>
              <div><span>0{index + 1}</span><Icon aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about compact-section section-shell">
        <div className="section-label" data-reveal><span>01</span> ABOUT / IDENTITY</div>
        <div className="about-grid" data-reveal>
          <h2>Engineer.<br />Builder.<br /><em>Continuous learner.</em></h2>
          <div className="about-copy">
            <p>I&apos;m Hadrian Galen Jave Dzikrillah, a software engineer and technology enthusiast passionate about building modern software, exploring artificial intelligence, and continuously expanding my understanding of technology.</p>
            <p>I build to understand problems, explore ideas, and turn complex systems into useful experiences.</p>
            <a href="#expertise">Explore the toolset <ArrowDownRight /></a>
          </div>
        </div>
        <div className="practice-grid">
          {practice.map(([period, title, copy], index) => (
            <article key={title} data-reveal>
              <span>0{index + 1} / {period}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="expertise" className="tools compact-section section-shell">
        <div className="section-label" data-reveal><span>02</span> CAPABILITY / TOOLSET</div>
        <div className="section-head" data-reveal>
          <h2>Capabilities,<br /><em>not a logo wall.</em></h2>
          <p>A focused working set grouped by the kind of problem it helps solve—not by whatever happens to be trending.</p>
        </div>
        <TechOrbit />
      </section>

      <section id="projects" className="projects compact-section section-shell">
        <div className="projects-heading">
          <div className="section-label" data-reveal><span>03</span> PROJECTS / SELECTED WORK</div>
          <div className="section-head" data-reveal>
            <h2>Selected <em>work.</em></h2>
            <p>One featured system and two focused experiment tracks. Each is transparent about its current status.</p>
          </div>
        </div>
        <ProjectGallery />
      </section>

      <section id="lab" className="lab compact-section section-shell">
        <div className="section-label" data-reveal><span>04</span> PRACTICE / THE LAB</div>
        <div className="section-head" data-reveal>
          <h2>Ideas become<br /><em>executable.</em></h2>
          <p>A small view into the working method: clarify the flow, test the idea, then keep the system legible.</p>
        </div>
        <div className="lab-workbench">
          <div data-reveal>
            <div className="workbench-label"><span>01</span> OPERATING LOOP</div>
            <CodeTerminal />
          </div>
          <div data-reveal>
            <div className="workbench-label"><span>02</span> SYSTEM FLOW</div>
            <Architecture />
          </div>
        </div>
      </section>

      <section id="contact" className="contact compact-contact">
        <div className="contact-object" aria-hidden="true"><i /><i /><i /></div>
        <div className="contact-inner" data-reveal>
          <span>05 / START A CONVERSATION</span>
          <h2>Have an idea?<br /><em>Let&apos;s make it real.</em></h2>
          <a className="contact-email" href="mailto:dzikrijombang@gmail.com">dzikrijombang@gmail.com <ArrowUpRight /></a>
          <div className="contact-links">
            <a href="mailto:dzikrijombang@gmail.com"><Mail />EMAIL</a>
            <a href="https://www.linkedin.com/in/dzikri-e-979742335/" target="_blank" rel="noreferrer"><Linkedin />LINKEDIN</a>
            <a href="https://github.com/DzCodeProgrammer" target="_blank" rel="noreferrer"><Github />GITHUB</a>
          </div>
        </div>
      </section>

      <footer className="compact-footer">
        <div className="footer-brand"><strong>DzCodeProgrammer</strong><p>Hadrian Galen Jave Dzikrillah<br />Software Engineer · Builder · Learner</p></div>
        <div className="footer-links"><a href="#home">Top</a><a href="https://github.com/DzCodeProgrammer">GitHub</a><a href="mailto:dzikrijombang@gmail.com">Email</a></div>
        <div className="footer-bottom"><p>Built with curiosity. Engineered with purpose.</p><p>© 2026 Hadrian Galen Jave Dzikrillah</p></div>
      </footer>
    </main>
  );
}
