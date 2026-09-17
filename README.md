<!-- Language Switch -->
<p align="right">
  <a href="#francais">Lire en Français</a>
</p>

# 🚀 Lou Fugier – Developer Portfolio

Personal portfolio of Lou Fugier, software developer focused on backend and full-stack development, presented in a cyberpunk-styled single-page interface.

🌐 **Live site**: [akulliaa.github.io/my-portfolio](https://akulliaa.github.io/my-portfolio)

---

## 🧭 Sections

Hero · About · Experience · Projects · Tech Stack · Education · Resume · Contact

## 🧠 Features

- Bilingual FR / EN interface (i18next), remembered between visits
- Dark / light theme, following the system preference by default and persisted
- Reveal-on-scroll animations, respecting `prefers-reduced-motion`
- Custom cyberpunk cursors on precise-pointer devices
- Responsive layout with a mobile navigation menu
- Resume download in both languages
- Contact form (EmailJS)

## 📁 Stack

- **Frontend**: React 19, Vite, Sass (SCSS modules organised as partials)
- **i18n**: i18next / react-i18next
- **Form**: EmailJS
- **Deployment**: GitHub Pages (`gh-pages`)

## 🛠️ Local development

```bash
npm install
npm run dev      # development server
npm run build    # production build
npm run preview  # serve the production build locally
npm run deploy   # publish dist/ to GitHub Pages
```

## 🗂️ Project structure

```
src/
  data/portfolio.js     # structured data: experiences, projects, skills, education
  locales/{en,fr}.json  # every visible string
  pages/                # Home, About, Experience, Projects, Education, Contact
  components/           # Section, TagList, cards, NavBar, forms
  hooks/                # useOnScreen, useTheme, useDocumentLanguage
  styles/               # SCSS partials, single entry point: main.scss
```

Content is edited in two places only: `src/data/portfolio.js` for dates, links
and technologies, and `src/locales/*.json` for all wording. Adding a string
requires adding it to **both** `en.json` and `fr.json`.

## 📬 Contact

- 📧 Email: [fugierlou@gmail.com](mailto:fugierlou@gmail.com)
- 🔗 LinkedIn: [lou-fugier](https://www.linkedin.com/in/lou-fugier-828b8a268/)

---

## Français

<p id="francais"></p>

# 🚀 Lou Fugier – Portfolio Développeur

Portfolio personnel de Lou Fugier, développeur logiciel orienté backend et full-stack, présenté dans une interface single-page au style cyberpunk.

🌐 **Site en ligne** : [akulliaa.github.io/my-portfolio](https://akulliaa.github.io/my-portfolio)

---

## 🧭 Sections

Accueil · À propos · Expériences · Projets · Stack technique · Formation · CV · Contact

## 🧠 Fonctionnalités

- Interface bilingue FR / EN (i18next), mémorisée d'une visite à l'autre
- Thème clair / sombre, basé par défaut sur la préférence système et persisté
- Animations à l'apparition, respectant `prefers-reduced-motion`
- Curseurs cyberpunk personnalisés sur les appareils à pointeur précis
- Mise en page responsive avec menu de navigation mobile
- Téléchargement du CV dans les deux langues
- Formulaire de contact (EmailJS)

## 📁 Technologies

- **Frontend** : React 19, Vite, Sass (SCSS organisé en partials)
- **i18n** : i18next / react-i18next
- **Formulaire** : EmailJS
- **Déploiement** : GitHub Pages (`gh-pages`)

## 🛠️ Développement local

```bash
npm install
npm run dev      # serveur de développement
npm run build    # build de production
npm run preview  # prévisualiser le build en local
npm run deploy   # publier dist/ sur GitHub Pages
```

Le contenu se modifie à deux endroits uniquement : `src/data/portfolio.js`
pour les dates, liens et technologies, et `src/locales/*.json` pour tous les
textes. Toute nouvelle chaîne doit être ajoutée dans **en.json ET fr.json**.

## 📬 Me contacter

- 📧 Email : [fugierlou@gmail.com](mailto:fugierlou@gmail.com)
- 🔗 LinkedIn : [lou-fugier](https://www.linkedin.com/in/lou-fugier-828b8a268/)
