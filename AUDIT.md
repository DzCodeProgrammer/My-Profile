# Portfolio Design and Frontend Audit

Audit date: **29 August 2026**

Preset: **Editorial atelier / compact orbital portfolio v2**

Surfaces reviewed: home page, selected work, capability selector, lab, contact, mobile navigation

Viewports: **1440 × 900** desktop and **390 × 844** mobile

## Executive review

The portfolio keeps its strongest differentiator—the interactive orbital Three.js system—but now frames it inside a split editorial hero rather than leaving it in an unstructured black field. The home page uses seven purposeful bands, a 1,320 px atelier grid, an active capability readout, an asymmetric one-featured-plus-two-supporting project rail, a coordinated workbench, and a framed contact finale. Content is visible by default; GSAP progressively enhances it instead of creating empty pre-scroll states.

The redesign is an original synthesis rather than a visual copy. Basement Studio informed atmosphere and confidence; CraftzDog demonstrated how one signature 3D object can coexist with compact content; Txema Albero informed interactive-object continuity. The generated concept board was used for density, palette, and layout relationships only. Its fictional identity, location, experience, email, and project names were intentionally rejected.

## Scorecard

Scores use a 1–5 scale, where 5 is release-quality for this portfolio direction.

| Category | Previous orbital | Current compact | Evidence |
| --- | :---: | :---: | --- |
| Visual hierarchy | 3 | 5 | H1 is 61.92 px on desktop; section headings are 43–70 px and no longer compete with the hero. |
| Layout and composition | 2 | 5 | A consistent 1,320 px split/editorial grid replaces repeated full-width, full-height compositions. |
| Typography | 3 | 5 | Display type is still expressive but body copy remains 11–13 px monospace with controlled line lengths. |
| Color and contrast | 4 | 4 | Violet and signal-lime guide attention over black; some tertiary technical labels remain deliberately subdued. |
| Interaction and motion | 4 | 5 | GSAP reveals, project parallax, WebGL entrance, orbit control, keyboard capability selection, terminal tabs, and mobile menu all work. |
| Responsive design | 4 | 5 | No horizontal overflow at 1440 or 390 px; the mobile layout removes WebGL and stacks the content naturally. |
| Accessibility | 4 | 5 | Focus styles, semantic sections, labelled canvas, menu state, Escape handling, alt text, reduced motion, and native-cursor fallback are present. |
| Performance perception | 4 | 5 | One gated desktop canvas, zero mobile canvases, capped DPR, compressed artwork, and no scroll hijacking. |
| Copy and credibility | 4 | 4 | Verified identity and contact details are retained; projects remain honestly labelled Concept or Experiment. |
| Craft and consistency | 4 | 5 | Split rails, system lines, violet/lime signals, project framing, and workbench surfaces now read as one authored system. |
| **Total** | **36/50** | **48/50** | **+12 points** |

## Measured before and after

| Metric | Before compact pass | Current | Change |
| --- | ---: | ---: | ---: |
| Desktop document height | 18,981 px | 5,909 px | −69% |
| Primary display type | approximately 79–96 px | 43–70 px | controlled hierarchy |
| Top-level content sections | 14 | 7 | −50% |
| Desktop WebGL canvases | 1 | 1 | unchanged signature scene |
| Mobile WebGL canvases | 0 | 0 | static optimized fallback |
| Horizontal overflow | none | none | maintained |
| Browser runtime errors | 0 | 0 | maintained |

The mobile document is 9,511 px because all two- and four-column groups stack into one readable column. This is expected responsive flow, not oversized viewport sections; the mobile hero uses a static optimized render and only the hero has a fixed presentation height.

## Motion and rendering strategy

- GSAP ScrollTrigger progressively enhances visible-by-default content with a 12 px travel distance, 35 ms stagger, and `power2.out` easing.
- Project images receive a subtle scroll-linked scale change; native page scrolling is preserved.
- Route changes receive a short 480 ms transform/opacity transition for spatial continuity.
- The Three.js world uses GSAP only for its initial scale and rotation entrance; pointer response uses frame-rate-independent damping.
- `prefers-reduced-motion` disables GSAP transforms, animated contact geometry, and interactive WebGL.
- `Save-Data` and viewports below 900 px receive the 1,400 × 1,750 WebP hero fallback.
- The desktop canvas pauses outside the hero and when the document is hidden; DPR is capped at 1.5.
- Project images are 1,400 × 876 WebP sources and are lazy-loaded through `next/image`.

## Verification performed

- `npm run lint`: passed with no TypeScript errors.
- `npm run build`: passed; eight static outputs generated, including three project case studies.
- `npm audit`: passed with **0 vulnerabilities**.
- Desktop browser QA: 1 canvas, 1,440 px viewport width, 5,909 px document height, no horizontal overflow, no runtime errors.
- Mobile browser QA: 0 canvases, 390 px content width, 9,511 px document height, no horizontal overflow, no runtime errors.
- Capability selector: keyboard focus + Enter changed the active readout to **AI & vision** and updated `aria-pressed` correctly.
- Terminal tabs: TypeScript selection changed the active file to `future.ts`.
- Mobile navigation: open state changed to `aria-expanded="true"`; Escape returned it to `false`.
- Image configuration: qualities `75` and `76` are configured; the previous Next Image quality warning is absent.
- Console regression check: `THREE.Clock` and missing `data-scroll-behavior` warnings are absent on home-to-case-study navigation.
- Identity scan: the current email is `dzikrijombang@gmail.com`; no old `dzcoding75` identity remains in application content.

## Known non-blocking diagnostics

1. Three.js remains pinned to `r182` because the latest React Three Fiber release still constructs the deprecated `Clock` API introduced in later Three.js releases. Re-test the current Three.js release after Fiber migrates to `Timer`.
2. Headless Chromium may report a GPU `ReadPixels` stall while screenshots are captured. This is specific to the screenshot path and is not a page runtime exception.
3. Automated browser checks cover layout and interactions, but a full assistive-technology matrix remains future work.
4. Case studies still need verified repository links, live demos, outcomes, and measurements before they can be presented as shipped products.

## Reference review

- [Basement Studio](https://basement.studio/) — immersive scene-setting and confident art direction.
- [CraftzDog homepage](https://github.com/craftzdog/craftzdog-homepage) — compact content with one lazy 3D signature object.
- [Txema Albero portfolio](https://github.com/Txemalon/3d-portfolio) — persistent React Three Fiber interaction and Next.js structure.
- [R3F portfolio by Arthur Panazolo](https://github.com/nothingnothings/r3f-portfolio) — full-scene navigation pattern used as a complexity comparison.
- [Bruno Simon](https://bruno-simon.com/) — full 3D-world portfolio pattern, intentionally not adopted for this information-led site.

## Release recommendation

**Ready to publish.** The redesign directly resolves the reported oversized text, excessive section height, and empty-feeling composition while preserving the distinctive 3D identity. The highest-value next improvement is verified project evidence, not additional decorative motion.
