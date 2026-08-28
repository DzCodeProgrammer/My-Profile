import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Architecture, CodeTerminal, CustomCursor, Hero, Navigation, ProjectGallery, TechOrbit } from "@/components/Experience";

const learning = ["Software Architecture", "Artificial Intelligence", "Computer Vision", "Distributed Systems", "Web Engineering", "Developer Experience", "System Design", "Emerging Technology"];
const collaboration = ["Web Application Development", "Backend Engineering", "AI / Computer Vision", "Automation", "API Development", "Technical Prototyping", "Software Architecture"];

export default function Home() {
  return (
    <main>
      <CustomCursor />
      <Navigation />
      <Hero />

      <section className="manifesto" aria-label="Engineering philosophy">
        <p>I don&apos;t just write code.</p><h2>I engineer <em>experiences.</em></h2><h2>I build <em>systems.</em></h2><h2>I solve <em>problems.</em></h2>
      </section>

      <section id="about" className="about section-shell">
        <div className="section-label"><span>01</span> ABOUT / IDENTITY</div>
        <div className="about-grid"><h2>Engineer.<br/>Builder.<br/><em>Continuous Learner.</em></h2><div className="about-copy"><p>I&apos;m Hadrian Galen Jave Dzikrillah, a software engineer and technology enthusiast passionate about building modern software, exploring artificial intelligence, and continuously expanding my understanding of technology.</p><p>I build software to understand problems, explore ideas, and turn systems into useful experiences.</p><a href="#expertise">Explore the toolset <ArrowDownRight /></a></div></div>
        <div className="identity-card" data-cursor="OPEN"><div className="identity-top"><span>DZ / 001</span><span>INDONESIA</span></div><div className="identity-orb"><i/><i/><i/></div><div><h3>HADRIAN GALEN<br/>JAVE DZIKRILLAH</h3><p>Software Engineer<br/>Full-Stack Developer<br/>AI Enthusiast<br/>Technology Explorer</p></div><div className="identity-code">DIGITAL IDENTITY<br/>SYSTEM / ACTIVE</div></div>
      </section>

      <section id="expertise" className="tools section-shell">
        <div className="section-label"><span>02</span> CAPABILITY / TOOLSET</div><div className="section-head"><h2>Tools I<br/><em>Build With</em></h2><p>A working set of languages, frameworks, systems, and tools—selected for the problem, not the trend.</p></div><TechOrbit />
      </section>

      <section id="experience" className="journey section-shell">
        <div className="section-label"><span>03</span> EXPERIENCE / JOURNEY</div><div className="section-head"><h2>The <em>Journey</em></h2><p>A living record of engineering practice: build, test, learn, and turn the result into a stronger system.</p></div>
        <div className="timeline">
          {[["NOW","ENGINEERING","Building modern software systems and sharpening full-stack engineering practice."],["ONGOING","EXPERIMENTING","Exploring AI, computer vision, automation, and new forms of human-computer interaction."],["CONTINUOUS","LEARNING","Studying architecture, developer tooling, backend systems, and emerging technology."],["OPEN","COLLABORATING","Available for focused collaborations where software, systems thinking, and ambitious ideas meet."]].map(([period,title,copy],i)=><article key={title}><span>0{i+1}</span><time>{period}</time><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section id="projects" className="projects section-shell">
        <div className="section-label"><span>04</span> PROJECTS / SELECTED WORK</div><div className="section-head"><h2>Selected <em>Work</em></h2><p>Three evolving project worlds—each with a distinct system, visual language, and technical direction.</p></div><ProjectGallery />
      </section>

      <section className="systems section-shell">
        <div className="section-label"><span>05</span> SYSTEMS / ARCHITECTURE</div><div className="section-head"><h2>Inside the<br/><em>System</em></h2><p>Good software becomes easier to reason about when responsibilities and data flow are visible.</p></div><Architecture />
      </section>

      <section id="lab" className="lab section-shell">
        <div className="lab-noise"/><div className="section-label"><span>06</span> EXPERIMENT / THE LAB</div><div className="lab-title"><p>Where questions become prototypes.</p><h2>THE <em>LAB</em></h2></div>
        <div className="lab-grid"><div className="neural"><div className="neural-center">DZ</div>{Array.from({length:12}).map((_,i)=><i key={i} style={{"--i":i} as React.CSSProperties}/>)}</div><div className="lab-list">{["COMPUTER VISION","ARTIFICIAL INTELLIGENCE","AUTOMATION","GENERATIVE SYSTEMS","DEVELOPER TOOLS","HUMAN–COMPUTER INTERACTION"].map((item,i)=><div key={item}><span>0{i+1}</span>{item}<ArrowUpRight /></div>)}</div></div>
      </section>

      <section className="code section-shell">
        <div className="section-label"><span>07</span> PRACTICE / LIVE CODE</div><div className="section-head"><h2>Ideas become<br/><em>executable.</em></h2><p>Technically valid sketches for a simple operating philosophy: learn, test, create, repeat.</p></div><CodeTerminal />
      </section>

      <section className="github section-shell">
        <div className="section-label"><span>08</span> OPEN SOURCE / CODE</div><div className="github-panel"><div><Github/><span>GITHUB / PROFILE</span><h2>Open Source<br/>&amp; Code</h2><p>Repositories, experiments, and code live under the verified GitHub identity below. No fabricated activity metrics.</p><a className="button primary" href="https://github.com/DzCodeProgrammer" target="_blank" rel="noreferrer">View GitHub <ArrowUpRight /></a></div><div className="github-identity"><span>@DzCodeProgrammer</span><div className="github-mark">DZ</div><p>github.com/<strong>DzCodeProgrammer</strong></p><i>VERIFIED EXTERNAL PROFILE</i></div></div>
      </section>

      <section className="philosophy" aria-label="Build philosophy">{["LEARN.","BUILD.","BREAK.","UNDERSTAND.","REBUILD.","EVOLVE."].map((word,i)=><div key={word}><span>0{i+1}</span>{word}</div>)}</section>

      <section className="knowledge section-shell">
        <div className="section-label"><span>09</span> KNOWLEDGE / ALWAYS LEARNING</div><div className="section-head"><h2>Always <em>Learning</em></h2><p>Technology moves. The useful response is not to chase everything—it is to keep building a deeper mental model.</p></div><div className="knowledge-map"><div className="knowledge-core">CURIOSITY<span>LEARN / APPLY / REFLECT</span></div>{learning.map((item,i)=><div className="knowledge-item" key={item}><span>0{i+1}</span>{item}</div>)}</div>
      </section>

      <section className="collaboration section-shell">
        <div className="section-label"><span>10</span> COLLABORATION / AREAS</div><div className="section-head"><h2>Let&apos;s Build<br/><em>Something.</em></h2><p>Areas I can collaborate on—framed as shared problem spaces, not unsupported service claims.</p></div><div className="collab-list">{collaboration.map((item,i)=><div key={item}><span>0{i+1}</span><h3>{item}</h3><ArrowUpRight /></div>)}</div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-object"><i/><i/><i/></div><div className="contact-inner"><span>START A CONVERSATION</span><h2>Have an idea?<br/><em>Let&apos;s turn it into<br/>something real.</em></h2><a className="contact-email" href="mailto:dzikrijombang@gmail.com">dzikrijombang@gmail.com <ArrowUpRight /></a><div className="contact-links"><a href="mailto:dzikrijombang@gmail.com"><Mail/>EMAIL ME</a><a href="https://www.linkedin.com/in/dzikri-e-979742335/" target="_blank" rel="noreferrer"><Linkedin/>LINKEDIN</a><a href="https://github.com/DzCodeProgrammer" target="_blank" rel="noreferrer"><Github/>GITHUB</a></div></div>
      </section>

      <footer><div className="footer-brand"><strong>DzCodeProgrammer</strong><p>Hadrian Galen Jave Dzikrillah<br/>Software Engineer • Builder • Learner</p></div><div className="footer-links"><a href="https://github.com/DzCodeProgrammer">GitHub</a><a href="https://www.linkedin.com/in/dzikri-e-979742335/">LinkedIn</a><a href="mailto:dzikrijombang@gmail.com">Email</a></div><div className="footer-bottom"><p>Built with curiosity. Engineered with purpose.</p><p>© 2026 Hadrian Galen Jave Dzikrillah</p></div></footer>
    </main>
  );
}
