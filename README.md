# Dipesh Patel - Personal Portfolio Website

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-0077b6)](https://Pate1Dipesh.github.io)
[![Status](https://img.shields.io/badge/Status-Live-06d6a0)](https://Pate1Dipesh.github.io)

> Personal portfolio website for **Dipesh Patel** — IT Support Analyst & Microsoft 365 Engineer based in Toronto, Ontario. Built with vanilla HTML, CSS, and JavaScript. No frameworks, no dependencies, no build tools — just clean, fast, deployable code.

---

## 🌐 Live Site

**[Pate1Dipesh.github.io](https://Pate1Dipesh.github.io)**

---

## 📋 Overview

This portfolio showcases my professional experience, technical skills, certifications, and projects across Microsoft 365, endpoint management, cybersecurity, and IT automation. It is designed to be fast, accessible, and visually distinctive — built entirely in pure HTML/CSS/JS with no external frameworks.

---

## ✨ Features

- **Animated skill dot canvas** — interactive floating skill dots on the hero section, colour-coded by category with live hover tooltips and click-to-filter
- **Project carousel** — filterable project grid with category navigation (Microsoft, Infrastructure, Cybersecurity, Automation) and left/right carousel pagination
- **Individual project pages** — each of the 10 projects has a dedicated detail page with a full overview, step-by-step process, and per-step screenshot upload
- **Screenshot upload** — upload real screenshots to any project step; images persist in `localStorage`
- **Certification carousel** — scrollable certification cards with left/right navigation
- **Tabbed experience section** — click-to-switch between all 4 work experiences
- **Custom animated cursor** — centred dot + trailing ring cursor with hover states
- **Smooth scroll navigation** — all nav links scroll precisely to their sections, accounting for fixed navbar height
- **Scroll progress bar** — thin progress indicator at top of page
- **Responsive design** — fully mobile-friendly with hamburger menu
- **Favicon** — custom `.ico` file matching the nav logo icon

---

## 🗂️ File Structure

```
portfolio/
├── index.html          # Main portfolio page
├── project.html        # Dynamic project detail page (serves all 10 projects via ?id=XX)
├── projects-data.js    # Single source of truth for all project data
├── favicon.ico         # Browser tab icon
├── favicon.svg         # SVG version of favicon
└── README.md           # This file
```

---

## ⚡ Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (custom properties, grid, flexbox, animations) |
| Interactivity | Vanilla JavaScript (ES6+) |
| Canvas | HTML5 Canvas API (skill dots animation) |
| Storage | Browser `localStorage` (screenshot persistence) |
| Fonts | Google Fonts — Rajdhani + JetBrains Mono |
| Hosting | GitHub Pages |
| Icons | Inline SVG |

---

## 🚀 Getting Started

### View Locally

No build process required. Just open the files in a browser:

```bash
git clone https://github.com/Pate1Dipesh/Pate1Dipesh.github.io.git
cd Pate1Dipesh.github.io

# Open directly in browser
open index.html

# Or serve with Python for proper local links
python3 -m http.server 8000
# Then visit http://localhost:8000
```

> **Note:** `project.html` uses `?id=XX` URL parameters. When opening locally with `file://`, links between pages work fine. For the `projects-data.js` script tag to load correctly, use a local server (Python or VS Code Live Server).

### Deploy to GitHub Pages

1. Fork or clone this repository
2. Rename your repo to `yourusername.github.io`
3. Go to **Settings → Pages → Source → Deploy from a branch → main**
4. Your site will be live at `https://yourusername.github.io` within a few minutes

---

## ✏️ Customisation

### Adding or Editing a Project

All project data lives in **`projects-data.js`** — edit this one file and changes automatically reflect on both the home page carousel and the individual project detail page.

```js
// Add a new project at the end of the PROJECTS array in projects-data.js
{
  id:'11', num:'11',
  cat:'microsoft',                          // Filter category key
  catLabel:'Microsoft 365 & Endpoint',      // Displayed on project page hero
  status:'live', statusLabel:'Live',
  name:'Your Project Name',
  desc:'Short description for home page card (1–2 sentences).',
  tagline:'Longer subtitle shown on the project detail page hero.',
  tech:['Tool 1', 'Tool 2', 'Tool 3'],
  icon:'<path d="..."/>',                   // SVG path for home page card icon
  link:'https://github.com/...',            // External link or '#' if none
  meta:[
    {label:'Type', val:'Your Type'},
    {label:'Scope', val:'Your Scope', cls:'blue'},   // cls: 'blue' | 'green' | none
    {label:'Status', val:'Active', cls:'green'},
  ],
  overview:['Paragraph 1...', 'Paragraph 2...', 'Paragraph 3...'],
  steps:[
    {title:'Step Title', desc:'What you did.', code:'# optional code snippet'},
  ],
  outcomes:['Outcome 1', 'Outcome 2', 'Outcome 3'],
},
```

**Category options:** `microsoft` | `infrastructure` | `cybersecurity` | `networking`

### Updating Personal Information

All personal details (name, bio, experience, education, certifications, skills, contact) are embedded directly in `index.html`. Search for the relevant section and update in place.

### Changing the Skill Dots

The floating skill dots on the hero section are defined in the `SKILLS` array inside `index.html`. Add, remove, or change skills and they update automatically:

``` js
const SKILLS = [
  { label:'Your Skill', cat:'network' },   // cat: 'network' | 'security' | 'cloud'
  // ...
];
```

---

## 📸 Screenshots

| Section | Description |
|---|---|
| Hero | Animated skill dot canvas with category filter |
| Profile | About me, skills, status panel, certifications panel |
| Experience | Tabbed interface for all 4 work experiences |
| Projects | Category-filtered carousel with 10 projects |
| Project Detail | Full overview, step-by-step process, screenshot upload |
| Certifications | Scrollable certification cards |
| Contact | Contact panel with all links |

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

You are free to use this code as a template or reference for your own portfolio. Please do not directly copy the personal content (bio, experience, projects, certifications) — those belong to Dipesh Patel.

---

## 👤 Author

**Dipesh Patel**
IT Support Analyst & Microsoft 365 Engineer

- 🌐 Portfolio: [Pate1Dipesh.github.io](https://Pate1Dipesh.github.io)
- 💼 LinkedIn: [linkedin.com/in/dipeshpatel-it](https://www.linkedin.com/in/dipeshpatel-it)
- 🐙 GitHub: [github.com/Pate1Dipesh](https://github.com/Pate1Dipesh)
- 📧 Email: [dipesh91295@gmail.com](mailto:dipesh91295@gmail.com)
- 📍 Location: Toronto, Ontario, Canada

---

*Built with care. No frameworks were harmed in the making of this portfolio.*
