# Sabbir Ahammed — Portfolio

A modern, responsive developer portfolio for **Sabbir Ahammed**, Full-Stack Developer. Built with Next.js and Tailwind CSS, with light and dark themes and an emerald accent color.

## Features

- Light and dark mode with a navbar toggle (saved in the browser, follows the system setting on first visit)
- Sections: Hero, Experience, Technical Skills, Projects, Education, Certifications, Contact
- Skill chips with technology logos
- Project cards with screenshots, tech tags, and Live / GitHub links
- Colorful social icons and accent-colored call-to-action buttons
- Contact form that opens the visitor's email app
- Fully responsive, with scroll-reveal animations that respect reduced-motion settings

## Tech Stack

- [Next.js](https://nextjs.org/) 15 (App Router) and React 19
- TypeScript
- [Tailwind CSS](https://tailwindcss.com/) 3
- shadcn/ui-style components (Button, Card, Badge, Input, Textarea)
- [lucide-react](https://lucide.dev/) icons
- [Devicon](https://devicon.dev/) technology logos

## Getting Started

Requires Node.js 18.18 or later.

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # serve the production build
```

## Project Structure

```
public/
  sabbir.jpeg            # profile photo
  projects/              # project screenshots
src/
  app/                   # layout, page, global styles and theme tokens
  components/            # page sections and shared components
    ui/                  # shadcn/ui-style primitives
  lib/
    data.ts              # all portfolio content
    utils.ts             # class name helper
```

## Customizing

- **Content:** edit `src/lib/data.ts` (name, intro, experience, skills, projects, education, links).
- **Colors:** change the theme tokens in `src/app/globals.css` (`:root` for light, `.dark` for dark). The accent color is `--primary`.
- **Photo and screenshots:** replace the files in `public/`.
- **Skill logos:** loaded from the Devicon CDN in the visitor's browser, with a generic icon as a fallback. To self-host, put the SVGs in `public/logos/` and update `CDN` in `src/components/skill-badge.tsx`.

## To Do

- Replace the Certifications placeholder in `src/components/certifications.tsx` with the Programming Hero certificate.
- Connect the contact form to a service such as Formspree or a Next.js API route if you want messages delivered without opening an email app.

## Deployment

Push the repository to GitHub, then import it on [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/). The default Next.js settings work without extra configuration.

## Contact

- Email: sabbir.ah799@gmail.com
- LinkedIn: [sabbir-pavel](https://www.linkedin.com/in/sabbir-pavel/)
- GitHub: [sabbir-codes](https://github.com/sabbir-codes)
