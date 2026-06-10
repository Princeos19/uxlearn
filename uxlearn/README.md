# UXLearn — UI/UX Design E-Learning Platform

A modern e-learning platform for UI/UX design education.
Built with React + Vite + Tailwind CSS, designed to deploy on Vercel.

## Stack
- **React 18** + **Vite** — fast dev server and build
- **Tailwind CSS 3** — utility-first styling
- **React Router v6** — client-side routing
- **Supabase** — auth + database (Phase 2)
- **Vercel** — deployment

## Project Structure

```
src/
├── pages/
│   └── Home.jsx              ← Landing page (assembles all sections)
├── components/
│   └── landing/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── LogosStrip.jsx
│       ├── CourseCard.jsx
│       ├── CoursesSection.jsx
│       ├── WhySection.jsx
│       ├── StatsSection.jsx
│       ├── TestimonialsSection.jsx
│       └── CTABanner.jsx
├── data/
│   └── courses.js            ← All static content data
├── App.jsx                   ← Router setup
├── main.jsx                  ← React entry point
└── index.css                 ← Tailwind base + global styles
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
http://localhost:5173
```

## Build & Deploy

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

For Vercel: connect your GitHub repo, Vercel auto-detects Vite.

## Design Tokens

| Token | Value |
|-------|-------|
| Brand accent | `#C8FF00` |
| Background | `#0A0A0A` |
| Surface | `#141414` |
| Surface alt | `#161616` |
| Text primary | `#F0EFE9` |
| Text muted | `rgba(240,239,233,0.45)` |
| Display font | Syne (800) |
| Body font | Inter (400/500) |

## Roadmap

- **Phase 1** ✅ Landing page — static, fully responsive
- **Phase 2** — Supabase auth (sign up / login / protected routes)
- **Phase 3** — Course player with lessons, quizzes, progress tracking
- **Phase 4** — Admin dashboard, Stripe payments, PostHog analytics
