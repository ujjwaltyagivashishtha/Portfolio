# 🚀 Ujjwal — Developer Portfolio

A modern, high-performance, dark-themed **Software Engineering Portfolio Website** built using **React 18**, **Vite**, **Tailwind CSS**, and **JavaScript**. 

Designed with an ultra-clean modular architecture, glowing obsidian aesthetics, glassmorphism UI primitives, and interactive project breakdown modals.

---

## 🌟 Overview & Key Features

* **Strictly Resume-Verified Content**: Powered 100% by verified academic, internship, project, and technical skill data.
* **Modern Dark Aesthetics**: Custom obsidian theme (`#030712`), ambient mesh background glows, and glowing pill tags.
* **Modular React Architecture**: Decoupled dataset layer (`src/data/`), generic UI primitives (`src/components/ui/`), layout shell (`src/components/layout/`), and page sections (`src/sections/`).
* **Featured Engineering Work Showcase**:
  * **Fusion AI Studio**: Real-time collaborative MERN development platform integrated with Google Gemini API, Socket.io chat, file tree, code editor, and in-browser WebContainer runtime.
  * **Bank Transaction System**: Full-stack banking system featuring an immutable double-entry ledger with balances derived via MongoDB aggregation, atomic transfers, race-safe idempotency, and automated email notifications.
* **Interactive Controls**:
  * Smooth section navigation with scroll-spy active indicators.
  * Architectural breakdown detail modals for projects.
  * One-click copy-to-clipboard functionality for Email and Phone.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | UI library & component architecture |
| **Vite 6** | Next-generation frontend build tooling |
| **Tailwind CSS 3** | Utility-first styling & custom glassmorphism design system |
| **Lucide React** | Clean, modern vector icon set |
| **JavaScript (ES6+)** | Core application logic |
| **Google Fonts** | *Plus Jakarta Sans* & *JetBrains Mono* typography |

---

## 📂 Project Directory Structure

```text
src/
├── assets/                 # Static vector assets & icons
├── components/
│   ├── layout/             # Structural shell (Navbar, Footer)
│   └── ui/                 # Reusable UI primitives (Button, Card, Badge, SectionHeading)
├── config/
│   └── site.js             # Site metadata, email, phone, and social profile links
├── data/                   # Structured datasets
│   ├── personalInfo.js     # Bio, location, headline summary
│   ├── education.js        # Quantum University (B.Tech CSE) & Class XII details
│   ├── experience.js       # 3Skill India Web Dev Internship achievements
│   ├── projects.js         # Fusion AI Studio & Bank Transaction System
│   ├── skills.js           # Languages, Frontend, Backend, Databases & Tools
│   └── certifications.js   # IIT Mandi AI Foundation & Database Foundations
├── lib/
│   └── utils.js            # Tailwind merge & helper utilities
├── sections/               # Self-contained page section components
│   ├── Hero.jsx            # Greeting, CTA buttons, developer snapshot IDE window
│   ├── About.jsx           # Engineering profile & background narrative
│   ├── Experience.jsx      # Interactive internship timeline card
│   ├── Projects.jsx        # Project cards & architectural breakdown modal
│   ├── Skills.jsx          # Categorized technical competency matrix
│   ├── Education.jsx       # Degree, CGPA, and academic timeline
│   ├── Certifications.jsx  # Verified credential cards
│   └── Contact.jsx         # Reach-out cards & social profile links
├── App.jsx                 # Main application assembler
└── main.jsx                # React root mount entry point
```

---

## 🚀 Getting Started Locally

Follow these steps to run the portfolio on your local machine:

### 1. Clone the repository
```bash
git clone https://github.com/ujjwaltyagivashishtha/Portfolio.git
cd Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the live application.

### 4. Build for production
```bash
npm run build
```
The optimized production bundle will be generated inside the `dist/` directory.

---

## 📬 Contact & Social Links

* **Location**: Saharanpur, Uttar Pradesh, India
* **Email**: [ujjwaltyagivashishtha@gmail.com](mailto:ujjwaltyagivashishtha@gmail.com)
* **Phone**: [+91-7505159821](tel:+91-7505159821)
* **GitHub**: [github.com/ujjwaltyagivashishtha](https://github.com/ujjwaltyagivashishtha)
* **LinkedIn**: [linkedin.com/in/ujjwal-tyagi-0a3798386](https://www.linkedin.com/in/ujjwal-tyagi-0a3798386)
* **LeetCode**: [leetcode.com/u/ujjwaltyagivashishtha_178](https://leetcode.com/u/ujjwaltyagivashishtha_178/)

---

© 2026 Ujjwal. Engineered with React.js & Tailwind CSS.
