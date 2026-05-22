# ✿ Cheritha — Portfolio

Personal portfolio of **Malreddy Sree Cheritha** — Data Science & ML student at Sphoorthy Engineering College, Class of 2027.

> *Teaching machines to think. Still figuring out the rest.*

---

## 📁 Folder Structure

```
cheritha-portfolio/
│
├── index.html               ← Main page (all sections)
│
├── css/
│   ├── base.css             ← CSS variables, reset, shared components
│   ├── navbar.css           ← Sticky pill navbar
│   ├── nerd.css             ← Hero/intro section
│   ├── skills.css           ← Skills grid
│   ├── projects.css         ← Project cards
│   ├── games.css            ← Number game + Magic Shop
│   ├── contact.css          ← Contact section
│   └── animations.css       ← Floral petals, fade-in, sparkles
│
├── js/
│   ├── floral.js            ← Generates floating petals & sparkles
│   ├── ticker.js            ← Scrolling marquee at the bottom
│   ├── observer.js          ← Scroll fade-in + active nav highlight
│   ├── numbergame.js        ← Guess My Number (1–21) game
│   ├── kpopgame.js          ← Magic Shop K-pop guessing game
│   └── main.js              ← Date init & smooth scroll
│
└── assets/
    ├── resume.pdf           ← ADD YOUR RESUME HERE
    ├── images/
    │   └── profile.jpg      ← ADD YOUR PHOTO HERE
    └── icons/
        ├── github.svg       ← ADD ICON SVGs HERE
        ├── linkedin.svg
        └── mail.svg
```

---

## 🚀 How to Deploy on GitHub Pages

### Step 1 — Create the repo
1. Go to [github.com/new](https://github.com/new)
2. Name it exactly: `your-username.github.io`  
   *(Replace `your-username` with your actual GitHub username)*
3. Set it to **Public**
4. Click **Create repository**

### Step 2 — Push your files
```bash
cd cheritha-portfolio
git init
git add .
git commit -m "Initial portfolio launch ✿"
git branch -M main
git remote add origin https://github.com/your-username/your-username.github.io.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Under "Source": select **Deploy from branch** → `main` → `/ (root)`
3. Click **Save**
4. Wait ~60 seconds → your site is live at `https://your-username.github.io` 🎉

---

## 🛠 Personalisation Checklist

Before going live, update these:

| What | Where |
|------|-------|
| GitHub username | All `YOUR_USERNAME` in `index.html` |
| LinkedIn URL | `index.html` — social links |
| Email address | `index.html` — contact section + mailto |
| Profile photo | Replace `assets/images/profile.jpg`, update `index.html` avatar div |
| Resume PDF | Drop into `assets/resume.pdf` |
| Project GitHub links | `index.html` — project cards |
| SVG icons | Add `github.svg`, `linkedin.svg`, `mail.svg` to `assets/icons/` |

### To add your photo:
In `index.html`, find the profile avatar div and replace:
```html
<!-- current placeholder -->
<div class="profile-avatar">C</div>

<!-- with your photo -->
<div class="profile-avatar">
  <img src="assets/images/profile.jpg" alt="Cheritha" />
</div>
```

### To add a 3rd project:
In `index.html`, find the placeholder card and replace it with:
```html
<div class="project-card">
  <div class="project-name">Your Project Name</div>
  <span class="live-badge">LIVE PROJECT</span>
  <div class="project-tags">
    <span class="project-tag">Python</span>
  </div>
  <p class="project-desc">Your project description here.</p>
  <a class="project-link" href="https://github.com/..." target="_blank">↗ GitHub</a>
</div>
```

---

## 🎮 Games

### Guess My Number
- 13 number sets, each with 3 cryptic hints
- Hints range from cute to chaotic depending on the number
- Press **New Game** to start, **Next Hint** to reveal more, type your guess + press Enter or **Guess →**

### Magic Shop 🎤
- 12 questions — all 7 BTS members + all 5 TXT members
- Each question shows a meme-style description, pick the right idol
- Score tracked throughout the session
- Questions shuffle randomly so it's different every time

---

## 🎨 Palette

| Variable | Hex | Usage |
|----------|-----|-------|
| `--lavender` | `#C8C2F0` | borders, accents |
| `--lavender-light` | `#E8E4FF` | hover fills |
| `--lavender-deep` | `#8B82D4` | buttons, active states |
| `--lavender-pale` | `#F5F3FF` | page background |
| `--gold` | `#EF9F27` | badges, ticker |
| `--charcoal` | `#2C2C2A` | navbar date, resume btn |
| `--rose` | `#ED93B1` | game cards, accents |

---

Made with ☕, 🧠, and questionable commit messages · © 2026 Cheritha
