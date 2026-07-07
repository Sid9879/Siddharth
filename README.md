# Siddharth Singh Portfolio

A modern personal portfolio website for Siddharth Singh, a junior backend engineer focused on Node.js, Express.js, MongoDB, Socket.IO, REST APIs, and production backend systems.

The site is built with React and Vite, with animated sections for professional experience, featured projects, technical skills, education, and contact information.

## Features

- Responsive single-page portfolio layout
- Animated hero, section reveals, and project cards with Framer Motion
- Smooth in-page navigation with React Scroll
- Backend-focused project showcase
- Skills grouped by language, backend, database, integrations, tools, and core concepts
- Contact section with direct email, phone, LinkedIn, GitHub, and a message form
- Glass-style UI, animated mesh background, and custom component styling

## Tech Stack

- React
- Vite
- TypeScript build tooling
- Framer Motion
- Lucide React icons
- React Scroll
- Typewriter Effect
- Axios

## Getting Started

### Prerequisites

Install Node.js and npm on your machine.

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Vite will start a local development server and print the URL in the terminal, usually:

```text
http://localhost:5173/
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```text
.
|-- public/
|   |-- favicon.svg
|   `-- icons.svg
|-- src/
|   |-- components/
|   |   |-- About.jsx
|   |   |-- Contact.jsx
|   |   |-- Education.jsx
|   |   |-- Experience.jsx
|   |   |-- Footer.jsx
|   |   |-- Hero.jsx
|   |   |-- Icons.jsx
|   |   |-- Navbar.jsx
|   |   |-- Projects.jsx
|   |   `-- Skills.jsx
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- package.json
`-- tsconfig.json
```

## Contact Form

The contact form in `src/components/Contact.jsx` sends messages to:

```text
http://localhost:5000/api/contact
```

To make the form work, run a backend server with a matching `POST /api/contact` endpoint, or update `BACKEND_URL` in `Contact.jsx` to point to your deployed API.

## Customization

- Update personal details in `Hero.jsx`, `About.jsx`, `Experience.jsx`, `Education.jsx`, and `Contact.jsx`.
- Update project cards in `Projects.jsx`.
- Update skill groups in `Skills.jsx`.
- Adjust global colors, layout utilities, and shared styles in `src/index.css`.
- Component-specific styles live beside each component in `src/components/*.css`.

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Type-check and create production build
npm run preview  # Preview production build locally
```

## Author

Siddharth Singh

- GitHub: [Sid9879](https://github.com/Sid9879)
- LinkedIn: [siddharth-singh-0b363b256](https://www.linkedin.com/in/siddharth-singh-0b363b256/)
- Email: [singhsiddharth1438@gmail.com](mailto:singhsiddharth1438@gmail.com)
