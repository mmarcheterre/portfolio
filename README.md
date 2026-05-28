# Portfolio — Marian Marcheterre

Portfolio personnel professionnel en HTML, CSS et JavaScript vanilla.

## Structure

```
portfolio/
├── index.html     # Structure principale
├── style.css      # Styles, responsive, accessibilité visuelle
├── script.js      # Compteurs animés, menu mobile, fade-in au scroll
├── favicon.svg    # Icône du site
└── cv.pdf         # CV à ajouter manuellement
```

## Sections

- **Hero** — Présentation avec photo (initiales), titre et appels à l'action
- **À propos** — Description de Marian + badge disponibilité
- **Chiffres clés** — Bandeau stats animées (compteurs)
- **Bandeau techno** — Défilement infini des technologies
- **Services** — Sites web, Flask, APIs
- **Compétences** — Grille par catégories avec icônes
- **Expérience** — Timeline verticale
- **Projets** — Cartes avec liens GitHub
- **Contact** — Formulaire relié à Formspree

## Déploiement GitHub Pages

1. Ouvrir **Settings → Pages**
2. Choisir **Deploy from a branch**
3. Branche `main`, dossier `/ (root)`
4. Cliquer **Save**

Disponible sur : `https://mmarcheterre.github.io/portfolio/`

## À faire

- Ajouter `cv.pdf` à la racine
- Vérifier l'endpoint Formspree dans `index.html`
