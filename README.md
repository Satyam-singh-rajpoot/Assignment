# AI UI Assessment

This repository is a compact Next.js + TypeScript (strict) frontend scaffold for an AI playground UI suitable for a frontend/UI-UX assessment.

What's included:
- Next.js 14 + React 18 + TypeScript 5 (strict)
- Tailwind CSS tokens mapped to CSS variables
- Mock APIs: `/api/models`, `/api/templates`
- Components: `ModelSelector`, `PromptEditor`, `ParametersPanel`, `ChatOutput`, `ThemeToggle`
- ThemeProvider with light/dark modes via CSS variables
- Storybook scaffold (scripts included)
- Accessibility and UX best-practices notes below

Getting started

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Run Storybook:

```bash
npm run storybook
```

Deployment

This project is ready to deploy on Vercel. Make sure to run `npm run build` before starting.

Design notes

- Tailwind tokens are mapped to CSS variables in `src/styles/globals.css` using `--color-*` variables to allow runtime theming.
- Components are built with ARIA attributes and keyboard-focusable controls.

Accessibility & UX

- All interactive elements include `aria-label`s.
- Contrast is handled via color tokens; recommend testing with Lighthouse.

Storybook

- Add stories under `src/components/*.stories.tsx` for each component.

HR deliverables

- This structure, a working demo, and the README should be enough for a hiring review. Include a short video walkthrough and deploy URL when sharing.
