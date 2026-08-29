import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { Architecture } from "@/components/Experience";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <main className="case-study">
    <header className="case-nav"><Link href="/#projects"><ArrowLeft/> BACK TO WORK</Link><span>DZCODEPROGRAMMER</span></header>
    <section className="case-hero" style={{"--accent":project.accent} as React.CSSProperties}>
      <Image src={project.image} alt={project.imageAlt} fill loading="eager" fetchPriority="high" quality={75} sizes="100vw" className="case-hero-image" />
      <div className="case-hero-shade" />
      <span>{project.number} / {project.status}</span><h1>{project.title}</h1><p>{project.category}</p>
      <div className="case-signal"><span>{project.signal}</span><strong>CASE STUDY</strong></div>
    </section>
    <section className="case-intro"><h2>{project.description}</h2><div><span>TECHNOLOGY</span><p>{project.technologies.join(" · ")}</p></div></section>
    <section className="case-two"><article><span>01 / PROBLEM</span><h2>The context</h2><p>{project.problem}</p></article><article><span>02 / SOLUTION</span><h2>The direction</h2><p>{project.solution}</p></article></section>
    <section className="case-features"><span>03 / FEATURES</span><h2>System capabilities</h2><div>{project.features.map((feature,i)=><p key={feature}><span>0{i+1}</span>{feature}</p>)}</div></section>
    <section className="case-architecture"><span>04 / ARCHITECTURE</span><h2>Data flow</h2><Architecture/></section>
    <section className="case-two"><article><span>05 / CHALLENGES</span><h2>What needs care</h2><p>{project.challenges}</p></article><article><span>06 / NEXT STEPS</span><h2>Where it goes</h2><p>{project.next}</p></article></section>
    <section className="case-cta"><p>Explore the verified code profile</p><a href="https://github.com/DzCodeProgrammer" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight/></a></section>
  </main>;
}
