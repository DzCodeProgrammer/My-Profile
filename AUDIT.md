# Portfolio Design and Frontend Audit

Audit date: **28 August 2026**<br>
Preset: **Portfolio**<br>
Surfaces reviewed: home page, selected-work section, project case study, mobile navigation<br>
Viewports: **1440 × 900** desktop and **390 × 844** mobile

## Executive review

The portfolio now has a clear visual premise: an orbital software universe with one interactive core and three distinct project worlds. The strongest improvement is in selected work. Previously, every project repeated the same abstract ring and left large areas visually underdeveloped; the current version uses unique, compressed 3D artwork, alternating layouts, visible project status, and stronger content hierarchy.

Basement Studio was reviewed as a reference for principles, not copied as a template. Its useful lessons were immersive scene-setting, bold project scale, concrete descriptions, and deliberate rhythm. This implementation retains those principles while using an original technical identity and a substantially lighter rendering strategy.

## Scorecard

Scores use a 1–5 scale, where 5 is release-quality for the chosen portfolio direction.

| Category | Before | Current | Evidence |
| --- | :---: | :---: | --- |
| Visual hierarchy | 4 | 5 | Hero, manifesto, project titles, and calls to action have distinct scales and reading order. |
| Layout and composition | 3 | 5 | Repeated project cards were replaced with alternating image-led worlds and tighter grid relationships. |
| Typography | 4 | 4 | Monospace identity is consistent and expressive; the long personal name remains intentionally dense. |
| Color and contrast | 4 | 4 | Violet and signal-lime guide attention on deep black; secondary microcopy is deliberately subdued. |
| Interaction and motion | 4 | 4 | Drag-to-orbit hero, responsive menu, tool selector, terminal tabs, and restrained hover motion work coherently. |
| Responsive design | 4 | 5 | Desktop uses interactive WebGL; mobile uses a purpose-built poster and stacked project composition with zero horizontal overflow. |
| Accessibility | 3 | 4 | Focus states, alt text, Escape handling, reduced motion, menu state, and native-cursor fallback are present. |
| Performance perception | 4 | 5 | WebGL is gated and paused; DPR is capped; project images are 74–89 KB WebP sources; off-screen sections are contained. |
| Copy and credibility | 3 | 4 | Empty placeholder language was removed and unverified work remains transparently labelled Concept or Experiment. |
| Craft and consistency | 3 | 5 | Hero, work, case studies, system diagrams, and contact now share one recognizable visual system. |
| **Total** | **36/50** | **45/50** | **+9 points** |

## Verification performed

- `npm run lint`: passed with no TypeScript errors.
- `npm run build`: passed; home, three project routes, sitemap, and robots file generated successfully.
- Desktop browser QA: one WebGL canvas, no horizontal overflow, interactive orbit tested.
- Mobile browser QA: static fallback used, no WebGL canvas, no horizontal overflow, menu open/close tested.
- Image configuration: qualities `75` and `76` are configured; the reported Next Image warning is resolved.
- Identity check: `dzcoding75` is absent and the current email is `dzikrijombang@gmail.com`.

## Performance comparison notes

In the same headless-browser inspection, Basement Studio transferred roughly 14 MB and used up to two canvases on desktop. This portfolio's local development capture transferred roughly 1.4 MB with one canvas. These figures are directional—not a lab-grade production benchmark—but they confirm the chosen architecture is materially lighter while keeping an immersive hero.

The project images added in this revision total less than 250 KB as source WebP files. The mobile hero fallback was reduced from approximately 1.3 MB PNG to approximately 73 KB WebP.

## Remaining limitations

1. The case studies are concepts and experiments; verified demos, repository links, outcomes, and measurements should replace the current exploratory claims when available.
2. The live procedural WebGL model intentionally has fewer reflections and environmental details than a pre-rendered hero concept. This is a conscious performance tradeoff.
3. A deprecation warning for `THREE.Clock` originates inside the current Three/React Three Fiber dependency stack. It does not break rendering, but should be rechecked after future dependency upgrades.
4. Accessibility was checked structurally and through keyboard-relevant interactions, but a full screen-reader matrix remains future work.

## Release recommendation

**Ready to publish.** The build is stable, the presentation no longer feels empty, and the performance strategy is appropriate for a personal portfolio. The highest-value next improvement is real project evidence—not more decorative motion.
