# Ujjwal Tyagi — Software Developer Portfolio

> **Backend & Systems Focus** · REST APIs · Database Architecture · Real-Time Collaboration · Applied AI Integration

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Theme](https://img.shields.io/badge/Theme-Electric_Indigo-6366f1)](#design-system--aesthetics)

---

## 🌐 Quick Links

- **Live Portfolio:** [ujjwaltyagivashishtha.github.io/Portfolio](https://ujjwaltyagivashishtha.github.io/Portfolio/)
- **GitHub:** [github.com/ujjwaltyagivashishtha](https://github.com/ujjwaltyagivashishtha)
- **LinkedIn:** [linkedin.com/in/ujjwal-tyagi-0a3798386](https://www.linkedin.com/in/ujjwal-tyagi-0a3798386)
- **Email:** [ujjwaltyagivashishtha@gmail.com](mailto:ujjwaltyagivashishtha@gmail.com)

---

## 📌 Overview

This repository houses the source code for my personal developer portfolio. It is designed with an **editorial, engineering-first philosophy**: prioritizing readability, structural clarity, and technical storytelling rather than distracting, heavy visual effects.

The application showcases my projects, engineering mindset, internships, and computer science foundations at **Quantum University** (B.Tech CSE with an academic minor in Data Analytics).

---

## ✨ Key Features & UX Design

- **Electric Indigo Design System:** Curated color tokens featuring `#6366f1` (Electric Indigo) with balanced contrast across both dark (`#09090b`) and light (`#fafaf9`) modes.
- **Tactile Micro-Interactions:** 
  - Smooth card-lifting effects on hover (`hover:-translate-y-1` with soft depth shadows).
  - Responsive button feedback with tactile press scaling (`active:scale-[0.98]`).
  - Calm status beacons and quiet typography indicators.
- **Buttery Smooth Section Reveals:** Subtle, GPU-accelerated reveals (`12px` glide with custom cubic-bezier transitions) driven by `IntersectionObserver` that eliminate scroll hitching and pop-in.
- **Interactive Command Palette (`Cmd + K` / `Ctrl + K`):** Quick keyboard-driven navigation across sections, instant email copying, and theme toggling.
- **Architectural Case Study Modals:** Dedicated deep-dive modal views for featured systems detailing the problem, architectural solutions, engineering challenges, and invariants.
- **Verified Resume Modal:** Comprehensive in-browser resume viewer presenting verified experience, academic coursework, technical competencies, and credentials.
- **GPU-Accelerated Reading Progress Bar:** Minimalist top progress bar tracking real-time scroll position across the page.
- **Accessibility & Reduced Motion:** Full support for `prefers-reduced-motion` media queries, high-contrast `:focus-visible` rings, and semantic HTML5 hierarchy.

---

## 🛠️ Tech Stack

### Core Frontend & Styling
| Technology | Purpose |
| :--- | :--- |
| **React 18** | Modular UI architecture and component state management |
| **Vite 6** | Fast development server (port 3000) and optimized rollup production bundling |
| **Tailwind CSS 3** | Utility-first styling with custom typography and color tokens |
| **Vanilla CSS** | Smooth scrollbar styling, keyframe transitions, and custom ease curves |
| **Lucide React** | Consistent, modern vector iconography |

### Core Backend Competencies (Featured in Projects)
| Domain | Technologies & Patterns |
| :--- | :--- |
| **Languages** | Java (DSA, OOP, System Fundamentals), JavaScript / Node.js (ES6+) |
| **Backend Frameworks** | Express.js, RESTful API design, modular routing, middleware pipelines |
| **Databases** | MongoDB, Mongoose ORM, ACID multi-document session transactions |
| **Real-Time & AI** | Socket.io (WebSocket rooms & namespaces), Google Gemini API, WebContainers |
| **Tools & Testing** | Git, GitHub, Postman, Vite, npm |

---

## 🚀 Featured Engineering Projects

### 1. Bank Transaction System
*Financial Backend & Persistence Layer*
- **Stack:** Node.js, Express.js, MongoDB, Mongoose, JWT, Nodemailer
- **Architecture:** Double-entry ledger architecture enforcing strict debit/credit atomicity using MongoDB session transactions (`session.withTransaction()`).
- **Invariants:** Guaranteed rollback on partial execution, deterministic error envelopes, balance non-negativity constraints, and automated transaction alert notifications.

### 2. Fusion AI Studio
*Real-Time Collaborative AI IDE Platform*
- **Stack:** React, Node.js, Express.js, MongoDB, Socket.io, Google Gemini API, WebContainers
- **Architecture:** Multi-user collaborative workspace with isolated Socket.io room channels and in-browser micro-operating system execution via WebContainers.
- **LLM Pipeline:** Deterministic 5-stage orchestration flow (Prompt Parsing → Dependency Resolution → Virtual Filesystem Mounting → Code Generation → In-Browser Live Preview).

### 3. Interactive Resume Builder
*Document Engineering & Dynamic State Engine*
- **Stack:** React, Tailwind CSS, Express.js, MongoDB
- **Architecture:** Nested state engine powering real-time live preview of complex resume schemas.
- **Features:** Print-specific media query CSS ensuring pixel-perfect 1-page PDF export without browser header/footer clipping.

---

## 💻 Getting Started Locally

### Prerequisites
- **Node.js:** v18.0.0 or higher
- **npm:** v9.0.0 or higher
- **Git**

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ujjwaltyagivashishtha/Portfolio.git
   cd Portfolio
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

4. **Run the production build:**
   ```bash
   npm run build
   ```
   The optimized production bundle will be output to the `dist/` directory.

5. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## 📁 Repository Structure

```text
PORTFOLIO/
├── public/                      # Static assets and favicons
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx       # Header with reading progress & theme toggle
│   │   │   └── Footer.jsx       # Footer with copyright & profile links
│   │   └── ui/
│   │       ├── Badge.jsx        # Pill badges
│   │       ├── Button.jsx       # Tactile responsive button component
│   │       ├── Card.jsx         # Subtle lifting container card
│   │       ├── CommandPalette.jsx # Cmd+K modal palette
│   │       ├── ProjectCaseStudyModal.jsx # Deep-dive architecture modal
│   │       ├── ResumeModal.jsx  # Verified resume modal
│   │       ├── SectionHeading.jsx # Section header with glowing status dot
│   │       └── Toast.jsx        # Floating action toast notifications
│   ├── config/
│   │   └── site.js              # Site metadata, navigation links, and socials
│   ├── data/
│   │   ├── personalInfo.js      # Bio summary and core metrics
│   │   ├── projects.js          # Project case studies & architecture flows
│   │   ├── skills.js            # Categorized skills matrix & CS coursework
│   │   └── education.js         # Academic credentials & certifications
│   ├── lib/
│   │   ├── utils.js             # Tailwind class merging utility (clsx + twMerge)
│   │   └── useScrollReveal.js   # High-performance IntersectionObserver hook
│   ├── sections/
│   │   ├── Hero.jsx             # Hero with topology network graph & CTAs
│   │   ├── About.jsx            # Core architectural tenets & academic background
│   │   ├── Projects.jsx         # 3 featured engineering systems with deep dives
│   │   ├── Skills.jsx           # 6-category technical matrix & CS rigor
│   │   ├── Experience.jsx       # Internship history & engineering contributions
│   │   ├── Education.jsx        # Formal degrees & verified certifications
│   │   └── Contact.jsx          # Direct email callout & mail helper form
│   ├── App.jsx                  # Main application layout & global listeners
│   ├── index.css                # Design system tokens, scrollbars & keyframes
│   └── main.jsx                 # React root mount
├── index.html                   # HTML entry point and SEO meta tags
├── package.json                 # Dependencies and npm scripts
├── tailwind.config.js           # Tailwind theme configuration (Electric Indigo)
├── vite.config.js               # Vite build configuration (base: './')
└── README.md                    # Project documentation
```

---

## 🚀 Deployment

The project is preconfigured with relative assets (`base: command === 'build' ? './' : '/'` in [`vite.config.js`](file:///Users/ujjwaltyagi/Desktop/PORTFOLIO/vite.config.js)) to allow deployment across static hosting services:

- **GitHub Pages:**
  1. Build the production bundle: `npm run build`
  2. Deploy the `dist/` directory using GitHub Actions or the `gh-pages` branch.
- **Vercel / Netlify:**
  - Build Command: `npm run build`
  - Output Directory: `dist`

---

## 📬 Contact & Connect

I am actively seeking software engineering and backend developer roles. Feel free to reach out:

- **Email:** [ujjwaltyagivashishtha@gmail.com](mailto:ujjwaltyagivashishtha@gmail.com)
- **LinkedIn:** [linkedin.com/in/ujjwal-tyagi-0a3798386](https://www.linkedin.com/in/ujjwal-tyagi-0a3798386)
- **GitHub:** [github.com/ujjwaltyagivashishtha](https://github.com/ujjwaltyagivashishtha)
- **Location:** Saharanpur, Uttar Pradesh, India (IST / UTC+5:30)

---

*Designed and engineered with care by **Ujjwal Tyagi**.*
