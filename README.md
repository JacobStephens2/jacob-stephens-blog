# jacobstephens.net

Personal website of Jacob Stephens. A lightweight, static HTML site with no build tooling, no JavaScript, and self-hosted fonts.

## Structure

```
├── index.html              # Homepage
├── posts/                  # Blog posts (clean HTML)
│   ├── index.html          # Posts listing
│   ├── bending-fire/
│   ├── on-sexuality-and-criminality/
│   ├── why-anti-cyrillic-croats-attack-serbian-language/
│   ├── two-natures-one-being/
│   ├── finding-greener-alternatives-to-ap-chromatography-lab/
│   └── the-heart-fragile-as-glass/
├── about/                  # About page
├── message/                # Contact page
├── privacy-policy/         # Privacy policy
├── styles/                 # CSS
│   ├── reset.css           # Meyer CSS reset
│   └── style.css           # Site styles
├── fonts/                  # Self-hosted web fonts (Merriweather, Playfair Display)
├── static/                 # Images and media
└── .htaccess               # Apache rewrites and redirects
```

## Adding a new post

1. Create a directory under `posts/` with a hyphenated slug (e.g., `posts/my-new-post/`)
2. Add an `index.html` following the template used by existing posts
3. Add the post to the list in `posts/index.html`
