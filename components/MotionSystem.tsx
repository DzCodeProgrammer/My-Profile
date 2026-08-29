"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

export function MotionSystem() {
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const heroTimeline = gsap.timeline({ defaults: { ease: "expo.out" } });
      heroTimeline
        .from(".nav-shell", { autoAlpha: 0, y: -12, duration: .55 })
        .from(".hero h1 span", { autoAlpha: 0, y: 18, duration: .72, stagger: .055 }, "-=.25")
        .from([".hero-roles", ".hero-statement", ".hero-actions", ".drag-cue"], {
          autoAlpha: 0,
          y: 12,
          duration: .52,
          stagger: .045,
        }, "-=.48");

      const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      gsap.set(reveals, { autoAlpha: 0, y: 14, force3D: true });
      ScrollTrigger.batch(reveals, {
        start: "top 90%",
        once: true,
        interval: .08,
        batchMax: 4,
        onEnter: (batch) => gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          duration: .62,
          stagger: .04,
          ease: "expo.out",
          force3D: true,
          overwrite: "auto",
        }),
      });

      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
        const image = card.querySelector("img");
        if (!image) return;
        gsap.fromTo(image, { scale: 1.035 }, {
          scale: 1.015,
          ease: "none",
          force3D: true,
          scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: 1.1 },
        });
      });
    });

    return () => context.revert();
  }, []);

  return null;
}
