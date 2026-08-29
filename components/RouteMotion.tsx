"use client";

import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export function RouteMotion() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const main = document.querySelector("main");
    if (!main || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tween = gsap.fromTo(main,
      { autoAlpha: .72, y: 10 },
      {
        autoAlpha: 1,
        y: 0,
        duration: .48,
        ease: "power2.out",
        clearProps: "opacity,transform,visibility",
        overwrite: true,
      },
    );

    return () => { tween.kill(); };
  }, [pathname]);

  return null;
}
