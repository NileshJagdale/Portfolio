# GEMINI.md - Project Context

## Project Overview
This is a modern, responsive **3D Portfolio Website** built with **React 18**, **Three.js**, and **Tailwind CSS**. It features interactive 3D models, smooth scroll animations, and a professional layout for showcasing work experience, technologies, and projects.

### Core Technologies
- **Frontend Framework:** React 18 (TypeScript)
- **3D Graphics:** Three.js, `@react-three/fiber`, `@react-three/drei`
- **Animations:** Framer Motion
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Contact Form:** EmailJS

## Architecture & Structure
The project follows a component-based architecture with a clear separation of concerns:

- **`src/components/`**: Divided into `atoms` (basic UI), `layout` (Navbar, Loader), `sections` (About, Contact, etc.), and `canvas` (3D components).
- **`src/constants/`**: Centralized configuration and data.
  - `config.ts`: Global metadata (name, email, section headings).
  - `index.ts`: Data for nav links, services, technologies, experiences, and projects.
  - `styles.ts`: Reusable Tailwind class combinations.
- **`src/hoc/`**: Contains `SectionWrapper.tsx`, a Higher Order Component that wraps sections with Framer Motion animations and consistent spacing.
- **`src/assets/`**: Static images, icons, and 3D textures.
- **`public/`**: GLTF models (e.g., `desktop_pc`, `planet`) and their binary/texture files.

## Building and Running
The project uses `npm` as the package manager.

| Task | Command |
| :--- | :--- |
| **Development** | `npm run dev` |
| **Build** | `npm run build` |
| **Preview** | `npm run preview` |
| **Lint** | `npm run lint` |
| **Type Check** | `npm run ts:check` |

## Development Conventions
- **TypeScript:** Strict typing is used. Types are centrally defined in `src/types/index.d.ts`.
- **3D Components:** Canvas components (in `src/components/canvas/`) should use `Suspense` with a custom `Loader` for better UX during model loading.
- **Styling:** Prefer using utility classes from `src/constants/styles.ts` for section headers and padding to maintain consistency.
- **Animations:** Use `framer-motion` for UI transitions and `SectionWrapper` for section-entry animations.
- **Environment Variables:** Credentials for EmailJS (`VITE_EMAILJS_SERVICE_ID`, etc.) must be defined in a `.env` file (see `.env.example` if available, or README for details).

## Key Files
- `src/App.tsx`: Main entry point orchestrating the layout.
- `src/constants/index.ts`: The primary file for updating portfolio content.
- `src/constants/config.ts`: Used for updating global branding and text.
- `src/hoc/SectionWrapper.tsx`: Defines the animation and layout standard for all sections.
- `src/components/canvas/`: Contains all Three.js logic and model rendering.
