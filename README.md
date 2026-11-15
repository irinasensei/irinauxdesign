# Irina's Portfolio

The source for [irinauxdesign.com](https://irinauxdesign.com), rebuilt from Framer as a static website with [Astro](https://astro.build).

## Preview the site on your Mac

You need Node.js 22.23 or newer (version 24 is installed).

Open the Terminal app, go to this folder, and run:

```bash
npm install
```

That downloads the tools the site needs. It is only required the first time, or after `package.json` changes.

```bash
npm run dev
```

Then open <http://localhost:4321> in your browser. The page refreshes by itself whenever a file is saved. Press `Ctrl` + `C` in the Terminal to stop.

## Other commands

| Command           | What it does                                                 |
| :---------------- | :----------------------------------------------------------- |
| `npm run build`   | Builds the finished site into the `dist/` folder             |
| `npm run preview` | Serves the built `dist/` folder, as the live site would       |

## Where things live

| Path                          | What is in it                                                        |
| :---------------------------- | :------------------------------------------------------------------- |
| `src/pages/`                  | One file per page. `index.astro` is the homepage                     |
| `src/pages/work/`             | One file per case study. The file name is the page address           |
| `src/components/`             | Reusable parts: header, footer, button, project card, cookie banner, case-study image, gallery, "Next project" link |
| `src/layouts/BaseLayout.astro`| The shell every page shares, including search and sharing tags       |
| `src/layouts/CaseStudyLayout.astro` | The frame of a case study: title, summary, cover, "Next project" |
| `src/data/projects.ts`        | Project titles, summaries, covers and their order                    |
| `src/data/site.ts`            | Email, social links, CV link, Google Analytics ID                    |
| `src/styles/tokens.css`       | Colours, font sizes and spacing                                      |
| `src/styles/case-study.css`   | Spacing and text styles used inside the case studies                 |
| `src/assets/images/`          | Original images. Smaller web versions are generated automatically    |
| `src/assets/fonts/`           | Inter and Sora font files                                            |
| `public/`                     | Files copied as they are: favicon, share image, `robots.txt`         |
| `src/pages/writing/`          | Forwards the five old Framer demo-post addresses to the homepage     |
| `src/utils/paths.ts`          | Helper that keeps internal links working on the GitHub test address  |
| `.github/workflows/deploy.yml`| The recipe GitHub follows to build and publish the site              |
| `reference/`                  | Snapshot of the original Framer pages and working notes. On this Mac only, not on GitHub |
| `migration-audit.md`          | The audit of the original site. On this Mac only, not on GitHub      |

## Publishing

The site is hosted on GitHub Pages. Every change that reaches the `main` branch on GitHub is built and published automatically, usually within a few minutes. Progress is shown in the repository's **Actions** tab.

## Common edits

- **Change text on the homepage:** edit `src/pages/index.astro`.
- **Change text in a case study:** edit its file in `src/pages/work/`. The text is ordinary HTML.
- **Change a project title, summary, cover or the project order:** edit `src/data/projects.ts`. The homepage cards, the top of each case study and the "Next project" links all follow it.
- **Change the description of an image (alt text):** edit the `alt="…"` text next to that image in the case-study file. Cover descriptions are in `src/data/projects.ts`.
- **Change a colour or font size everywhere:** edit `src/styles/tokens.css`.
- **Replace an image:** save the new file over the old one in `src/assets/images/`, keeping the same name.
