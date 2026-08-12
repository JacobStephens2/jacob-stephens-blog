# jacobstephens.net

Personal website of Jacob Stephens (https://jacobstephens.net). A lightweight, static HTML site with no build tooling and self-hosted fonts. Theme follows the OS light/dark preference by default; a fixed toggle in the top-right pins an explicit choice.

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

## Deployment

Every push to `master` triggers `.github/workflows/deploy.yml`. The workflow
connects to the production server with a deploy-only SSH key whose server-side
entry is restricted to one forced command. That command validates the incoming
tree, fast-forwards the clean live checkout at `/var/www/jacobstephens.net`, and
runs `python3 tools/publish.py check` again after deployment.

The server-side command and its Ansible installation playbook live in the
`stephens-page-infra` repository. If a deployment fails, inspect the repository's
Actions tab; the deployer prints the failed safety check or command there.
