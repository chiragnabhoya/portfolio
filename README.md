# Chirag Nabhoya — Portfolio

Personal portfolio built from the CV. Next.js App Router, React, TypeScript,
Tailwind CSS v4, GSAP and Lucide React. No other UI libraries.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run typecheck
```

## Where things live

| Path                  | What it holds                                              |
| --------------------- | ---------------------------------------------------------- |
| `app/`                | Layout, page, metadata, `robots.ts`, `sitemap.ts`, globals  |
| `sections/`           | One file per page section                                   |
| `components/ui/`      | Reusable presentational pieces                              |
| `components/layout/`  | Navbar and Footer                                           |
| `components/effects/` | Loader, cursor, background, scroll progress, back to top    |
| `hooks/`              | Scroll reveal, scroll progress, active section              |
| `lib/gsap.ts`         | GSAP + ScrollTrigger registration and shared easings        |
| `constants/`          | All CV content and site metadata                            |
| `types/`              | Shared interfaces                                           |

All content lives in `constants/data.ts` and `constants/site.ts`. Editing those
two files updates the whole site.

## Before deploying

- [ ] Set the real domain in `constants/site.ts` (`url`).
- [ ] Add `public/og-image.png` at 1200x630.
- [ ] Add a project screenshot to `public/projects/mobile-shopping.png` and swap
      the placeholder block in `components/ui/ProjectCard.tsx` for `next/image`.
- [ ] Add `repoUrl` and `liveUrl` for the project in `constants/data.ts` if they exist.

## Notes

- Verified with `next build`: static prerender, ~160 kB first load JS.
- Smooth scrolling uses native CSS rather than an extra scroll library, to keep
  the bundle small. Every GSAP animation is wrapped in `gsap.matchMedia` and
  respects `prefers-reduced-motion`.
