# Ujjwal Tyagi — Developer Portfolio

A typography-led, editorial portfolio website showcasing backend-focused software development, distributed REST APIs, atomic database transaction ledgers, and real-time collaboration engines. Built using **React 18**, **Vite 6**, and **Tailwind CSS**.

---

## 🌟 Overview & Design Philosophy

This portfolio is built on an **editorial, typography-led design system** rather than generic software templates. It avoids decorative glows and radial mesh blurs in favor of strong typographic scale, clean 1px structural dividing rules, intentional whitespace, and authentic engineering case studies.

### Key Capabilities & Features

- **Strictly Verified Information:** Powered 100% by verified academic coursework at Quantum University, industry internship experience at 3Skill India, real project architectures, and certified technical credentials.
- **Dual-Theme Editorial Surface:** Full native support for dark ink (`#09090b`) and warm paper (`#fafaf9`) themes with persistent state saved in `localStorage`.
- **Selected Engineering Case Studies:**
  - **Bank Transaction System:** Financial management backend featuring MongoDB ACID session transactions, double-entry audit ledgers, JWT authentication, and automated email alerts.
  - **Fusion AI Studio:** Real-time collaborative workspace platform combining Socket.io room isolation, structured Google Gemini API prompt-to-file pipelines, and an in-browser WebContainer Node.js runtime.
  - **Interactive Resume Builder:** Document engineering tool with controlled nested form state, live side-by-side preview rendering, and dedicated CSS print-media PDF export styling.
- **Interactive Keyboard & Modal Utilities:**
  - **Command Palette (`⌘K` / `Ctrl+K`):** Fast keyboard-first search to navigate sections, open profile links, and trigger actions.
  - **Verified Resume Modal:** In-app readable resume with dedicated Print and Save-to-PDF formatting.
  - **Case Study Drawer:** In-depth technical breakdown modal for examining problem statements, architectural solutions, and engineering trade-offs.
  - **Direct Email Launcher:** One-click copy interaction with clipboard fallback and pre-filled email client helper.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 18](https://react.dev/) |
| **Build Tooling & Bundler** | [Vite 6](https://vitejs.dev/) |
| **Styling & Design System** | [Tailwind CSS 3.4](https://tailwindcss.com/) with custom paper/ink tokens |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Typography** | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk), [Inter](https://fonts.google.com/specimen/Inter), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) |

---

## 📂 Project Architecture

```text
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx               # Editorial header, wordmark & mobile index drawer
│   │   └── Footer.jsx               # Colophon, copyright year & back-to-top trigger
│   └── ui/
│       ├── Button.jsx               # Accessible button & link primitive
│       ├── Card.jsx                 # Minimal container surface
│       ├── CommandPalette.jsx       # Keyboard palette (Cmd+K)
│       ├── ProjectCaseStudyModal.jsx# Deep technical inspection modal
│       ├── ResumeModal.jsx          # Accessible resume modal with Print/PDF export
│       ├── SectionHeading.jsx       # Section header with badge & title
│       └── Toast.jsx                # Temporary feedback notification banner
├── config/
│   └── site.js                      # Verified URLs, contact details & section links
├── data/
│   ├── personalInfo.js              # Professional summary & engineering focus
│   ├── projects.js                  # Case study narratives, stacks & challenges
│   ├── skills.js                    # Categorized competencies & CS foundations
│   ├── experience.js                # 3Skill India web dev internship data
│   ├── education.js                 # Quantum University (7.99 CGPA) & coursework
│   ├── certifications.js            # IIT Mandi & Database Foundations credentials
│   └── genAI.js                     # 5-stage deterministic LLM flow
├── sections/
│   ├── Hero.jsx                     # Typographic headline & system invariants
│   ├── About.jsx                    # Engineering mindset & 4 architectural tenets
│   ├── Projects.jsx                 # Selected case study compositions
│   ├── Skills.jsx                   # Categorized technical matrix & CS rigor
│   ├── Experience.jsx               # Chronological internship timeline
│   ├── Education.jsx                # Degrees, honors, and verified certifications
│   └── Contact.jsx                  # Direct inbox callout & email drafter
├── index.css                        # Editorial dividing rules & theme base styles
├── App.jsx                          # Main application assembler
└── main.jsx                         # React 18 root entry point
```

---

## 🚀 Getting Started Locally

### Prerequisites

- **Node.js**: Version 18.x or later installed
- **npm**: Version 9.x or later

### Installation

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
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Compile production build:**
   ```bash
   npm run build
   ```
   The production bundle is generated inside the `dist/` directory.

5. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment to GitHub Pages

To deploy this project to GitHub Pages:

1. In `vite.config.js`, ensure the base path matches your repository name:
   ```javascript
   export default defineConfig({
     base: '/Portfolio/',
     plugins: [react()],
   });
   ```
2. Build the production assets:
   ```bash
   npm run build
   ```
3. Commit and push your changes to the `main` branch:
   ```bash
   git add .
   git commit -m "Deploy: Updated editorial portfolio"
   git push origin main
   ```
4. Configure GitHub Pages in your repository settings under **Settings > Pages** to deploy from GitHub Actions or the `gh-pages` branch.

---

## 📬 Contact & Verified Profiles

- **Email:** [ujjwaltyagivashishtha@gmail.com](mailto:ujjwaltyagivashishtha@gmail.com)
- **GitHub:** [github.com/ujjwaltyagivashishtha](https://github.com/ujjwaltyagivashishtha)
- **LinkedIn:** [linkedin.com/in/ujjwal-tyagi](https://www.linkedin.com/in/ujjwal-tyagi-0a3798386)
- **Location:** Saharanpur, Uttar Pradesh, India

---

## 📄 License

This repository is open-source and available under the [MIT License](LICENSE).
