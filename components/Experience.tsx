"use client";

import { ArrowDownRight, ArrowUpRight, Github, Menu, X } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/projects";

const nav = [["About", "about"], ["Work", "projects"], ["Lab", "lab"], ["Contact", "contact"]];
const SystemCore = dynamic(() => import("./SystemCore"), { ssr: false });

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <header className={`nav-shell ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#home" aria-label="DzCodeProgrammer home"><span>DZ</span>CODEPROGRAMMER</a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map(([label, target]) => <a key={target} href={`#${target}`}>{label}</a>)}
        </nav>
        <a className="nav-github" href="https://github.com/DzCodeProgrammer" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={14} /></a>
        <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open menu"><Menu /></button>
      </header>
      <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <button onClick={() => setOpen(false)} aria-label="Close menu"><X /></button>
        <nav>{nav.map(([label, target], i) => <a key={target} href={`#${target}`} onClick={() => setOpen(false)}><span>0{i + 1}</span>{label}</a>)}</nav>
      </div>
    </>
  );
}

export function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  useEffect(() => {
    if (!window.matchMedia("(pointer:fine)").matches) return;
    let x = -100, y = -100, tx = -100, ty = -100, raf = 0, running = false;
    const loop = () => {
      x += (tx - x) * .18;
      y += (ty - y) * .18;
      if (cursor.current) cursor.current.style.transform = `translate3d(${x}px,${y}px,0)`;
      if (Math.abs(tx - x) + Math.abs(ty - y) > .2) raf = requestAnimationFrame(loop);
      else running = false;
    };
    const move = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!running) { running = true; raf = requestAnimationFrame(loop); }
    };
    const over = (e: MouseEvent) => setLabel((e.target as HTMLElement).closest<HTMLElement>("[data-cursor]")?.dataset.cursor || ((e.target as HTMLElement).closest("a,button") ? "EXPLORE" : ""));
    window.addEventListener("mousemove", move, { passive: true }); document.addEventListener("mouseover", over);
    return () => { window.removeEventListener("mousemove", move); document.removeEventListener("mouseover", over); cancelAnimationFrame(raf); };
  }, []);
  return <div ref={cursor} className={`custom-cursor ${label ? "expanded" : ""}`}><span>{label}</span></div>;
}

export function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const weakDevice = navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4;
    if (!canvas || window.innerWidth < 768 || connection?.saveData || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    let raf = 0, w = 0, h = 0, mx = 0, my = 0, visible = false, lastFrame = 0;
    const targetFrame = 1000 / (weakDevice ? 24 : 40);
    const dots = Array.from({ length: weakDevice ? 28 : 52 }, () => ({ x: Math.random(), y: Math.random(), z: Math.random(), v: .003 + Math.random() * .006 }));
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, weakDevice ? 1 : 1.5);
      w = canvas.width = Math.round(innerWidth * dpr);
      h = canvas.height = Math.round(innerHeight * dpr);
    };
    const mouse = (e: MouseEvent) => { mx = (e.clientX / innerWidth - .5) * 18; my = (e.clientY / innerHeight - .5) * 18; };
    const draw = (time: number) => {
      if (!visible || document.hidden) { raf = 0; return; }
      if (time - lastFrame >= targetFrame) {
        lastFrame = time;
        const dpr = w / innerWidth;
        ctx.clearRect(0, 0, w, h);
        for (const d of dots) {
          d.y -= d.v * (targetFrame / 1000);
          if (d.y < 0) d.y = 1;
          const px = d.x * w + mx * d.z * dpr;
          const py = d.y * h + my * d.z * dpr;
          ctx.beginPath(); ctx.fillStyle = `rgba(190,170,255,${.12 + d.z * .5})`;
          ctx.arc(px, py, (.45 + d.z) * dpr, 0, Math.PI * 2); ctx.fill();
        }
      }
      raf = requestAnimationFrame(draw);
    };
    const start = () => { if (!raf && visible && !document.hidden) raf = requestAnimationFrame(draw); };
    const visibility = () => { if (document.hidden) { cancelAnimationFrame(raf); raf = 0; } else start(); };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) start(); else { cancelAnimationFrame(raf); raf = 0; } }, { threshold: .01 });
    resize(); observer.observe(canvas); addEventListener("resize", resize, { passive: true }); addEventListener("mousemove", mouse, { passive: true }); document.addEventListener("visibilitychange", visibility);
    return () => { cancelAnimationFrame(raf); observer.disconnect(); removeEventListener("resize", resize); removeEventListener("mousemove", mouse); document.removeEventListener("visibilitychange", visibility); };
  }, []);
  return <canvas ref={ref} className="particle-field" aria-hidden="true" />;
}

export function Hero() {
  return (
    <section id="home" className="hero">
      <HeroSystem />
      <div className="hero-content">
        <h1><span>HADRIAN</span><span>GALEN</span><span>DZIKRILLAH</span></h1>
        <div className="hero-roles"><span>Software Engineer</span><span>Full-Stack Developer</span><span>AI Enthusiast</span></div>
        <p className="hero-statement">I build digital experiences, intelligent systems, and software that turn ideas into reality.</p>
        <div className="hero-actions"><a className="button primary" href="#about">Explore the system <ArrowDownRight /></a><a className="button text" href="https://github.com/DzCodeProgrammer" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a></div>
        <div className="drag-cue"><span /><p>DRAG TO ORBIT</p></div>
      </div>
      <div className="system-index"><span><b>01</b> CORE</span><span>02 STACK</span><span>03 WORKFLOW</span><span>04 IMPACT</span></div>
      <div className="hero-horizon"><span>// SYSTEM OVERVIEW</span></div>
    </section>
  );
}

function HeroSystem() {
  const ref = useRef<HTMLDivElement>(null);
  const [capable, setCapable] = useState(false);
  const [active, setActive] = useState(true);
  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const allowed = window.innerWidth >= 900 && !connection?.saveData && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setCapable(allowed);
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting && !document.hidden), { threshold: .02 });
    observer.observe(element);
    const visibility = () => setActive(!document.hidden && element.getBoundingClientRect().bottom > 0);
    document.addEventListener("visibilitychange", visibility);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", visibility); };
  }, []);
  return (
    <div ref={ref} className="hero-system" aria-label="Interactive orbital software system">
      <Image src="/images/system-core-mobile.png" alt="Orbital software system core" fill preload quality={76} sizes="(max-width: 899px) 100vw, 55vw" className={`system-poster ${capable ? "is-hidden" : ""}`} />
      {capable && <SystemCore active={active} />}
      <div className="system-label label-front"><b>FRONTEND</b><span>UI/UX · REACT · THREE.JS</span></div>
      <div className="system-label label-ai"><b>AI SYSTEMS</b><span>VISION · LEARNING · AGENTS</span></div>
      <div className="system-label label-back"><b>BACKEND</b><span>API · DATA · SERVICES</span></div>
      <div className="system-label label-devops"><b>DEVOPS</b><span>CLOUD · CI/CD · AUTOMATION</span></div>
    </div>
  );
}

const stack = ["JavaScript", "TypeScript", "Python", "PHP", "React", "Next.js", "Vue", "Nuxt", "Laravel", "FastAPI", "Tailwind CSS", "Node.js", "PostgreSQL", "MySQL", "Supabase", "Docker", "Git", "GitHub", "OpenCV"];

export function TechOrbit() {
  const [active, setActive] = useState("Python");
  const detail: Record<string, string> = { Python: "AI · Computer Vision · Backend · Automation", TypeScript: "Interfaces · Systems · Tooling", React: "Product UI · Interaction · Components", Laravel: "Backend · APIs · Applications", OpenCV: "Vision · Imaging · Detection" };
  return (
    <div className="tech-orbit">
      <div className="orbit-core"><span>SELECTED TOOL</span><strong>{active}</strong><p>{detail[active] || "Web Engineering · Software Systems"}</p></div>
      <div className="tech-list">{stack.map((tech, i) => <button key={tech} className={active === tech ? "active" : ""} onMouseEnter={() => setActive(tech)} onFocus={() => setActive(tech)} onClick={() => setActive(tech)}><span>{String(i + 1).padStart(2, "0")}</span>{tech}</button>)}</div>
    </div>
  );
}

export function CodeTerminal() {
  const snippets = {
    PYTHON: ["def build_future():", "    learn()", "    experiment()", "    create()", "    repeat()"],
    TYPESCRIPT: ["const buildFuture = async () => {", "  await learn();", "  experiment();", "  create();", "  return repeat();", "};"],
    PHP: ["function buildFuture(): void {", "    learn();", "    experiment();", "    create();", "    repeat();", "}"]
  };
  const [language, setLanguage] = useState<keyof typeof snippets>("PYTHON");
  return <div className="terminal"><div className="terminal-top"><div><i/><i/><i/></div><span>future.{language === "PYTHON" ? "py" : language === "TYPESCRIPT" ? "ts" : "php"}</span></div><div className="terminal-tabs">{Object.keys(snippets).map((key) => <button className={language === key ? "active" : ""} onClick={() => setLanguage(key as keyof typeof snippets)} key={key}>{key}</button>)}</div><pre>{snippets[language].map((line, i) => <code key={i}><em>{i + 1}</em>{line}</code>)}</pre><div className="terminal-status"><span>UTF-8</span><span>READY</span></div></div>;
}

export function ProjectGallery() {
  return <div className="project-gallery">{projects.map((project) => <article key={project.slug} className="project-row" data-cursor="VIEW PROJECT"><div className="project-no">{project.number}</div><div className="project-copy"><span>{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-meta"><span>STATUS / {project.status}</span><span>{project.technologies.join(" · ")}</span></div><Link href={`/projects/${project.slug}`}>View case study <ArrowUpRight /></Link></div><div className="project-visual" style={{ "--accent": project.accent } as React.CSSProperties}><div className="visual-grid"/><div className="visual-object"><i/><i/><i/></div><span>{project.title}</span></div></article>)}</div>;
}

export function Architecture() {
  const nodes = [["CLIENT","Interface"],["API","Orchestration"],["SERVICE","Application logic"],["DATABASE","Persistent data"],["AI ENGINE","Intelligence layer"]];
  return <div className="architecture"><div className="arch-line"/>{nodes.map(([name, role], i) => <div className="arch-node" key={name}><span>0{i + 1}</span><strong>{name}</strong><p>{role}</p></div>)}</div>;
}
