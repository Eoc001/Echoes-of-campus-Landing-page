# Echoes of Campus — Website

A complete, responsive, four-page public website for **Echoes of Campus**, an independent
student-focused media initiative at the University of Ilorin.

**Design:** dark ink-blue (#0A1A34) is the default theme, with Campus Orange (#F16610)
as the accent throughout. Staggered scroll-reveal animations (IntersectionObserver)
respect `prefers-reduced-motion`.

**Plain HTML5 + CSS3 + vanilla JavaScript.** No frameworks, no build step, no dependencies.
Open `index.html` in a browser, or upload the folder to any static host (Netlify, Vercel,
GitHub Pages, cPanel, etc.).

> Everyone has a story. Every story needs to be heard.

---

## Pages

| File                  | Page                              |
|-----------------------|-----------------------------------|
| `index.html`          | Home                              |
| `about.html`          | About (incl. Meet the Team, Join the Team, Our Impact) |
| `campus-voices.html`  | Campus Voices (editorial showcase) |
| `contact.html`        | Contact / Share Your Voice        |

## Folder structure

```
├── index.html / about.html / campus-voices.html / contact.html
├── css/
│   └── style.css           # tokens, components, pages, responsive rules
├── js/
│   └── main.js             # PART 1 config (edit) · PART 2 data (edit) · PART 3 behaviour
├── assets/
│   ├── logo/               # logo-primary.svg, logo-mark.svg (official artwork)
│   ├── team/               # ← team-01.png … team-16.png (the 16 ID cards)
│   ├── images/
│   │   ├── hero/           # homepage hero photography
│   │   ├── about/          # team / behind-the-scenes photography
│   │   ├── campus-voices/  # story thumbnails
│   │   └── shared/         # CTA band, social preview image
│   ├── videos/             # interview footage (MP4/WebM + posters)
│   └── icons/              # favicon.svg
├── robots.txt
└── sitemap.xml             # update the domain before deploying
```

## 1. Running the site

No installation. Either:

- **Local preview:** double-click `index.html`, or run a tiny server for clean URLs:
  `python3 -m http.server 8000` then visit `http://localhost:8000`.
- **Deploy:** upload the whole folder to any static web host. That's it.

## 2. Connecting the forms (Formspree) — REQUIRED

Both forms (Share Your Voice on `contact.html`, and Join the Team on `about.html`)
send through [Formspree](https://formspree.io). No backend needed.

1. Create one or two forms at formspree.io (free tier is fine).
2. In the Formspree dashboard, set the **recipient email address** — this is never
   stored in the code.
3. Open `js/main.js` (Part 1) and paste your endpoints:
   ```js
   formspree: {
     contactEndpoint: 'https://formspree.io/f/abcdwxyz',
     volunteerEndpoint: 'https://formspree.io/f/efgh1234',
   }
   ```
   You may point **both** at one shared form — a hidden `submission_type` field
   (`share_your_voice` / `volunteer_application`) is always sent so your inbox can
   tell them apart.
4. While the placeholder `YOUR_..._FORM_ID` values remain, the forms show a visible
   "setup needed" notice and nothing is sent. Test by submitting each form after
   configuring.

## 3. Social links

In `js/main.js` (Part 1), replace `null` with the real URLs:

```js
social: { x: 'https://x.com/yourhandle', instagram: 'https://instagram.com/yourhandle', ... }
```

Any link left as `null` is hidden everywhere (footer included), and the footer shows
an honest "Social links coming soon" state. YouTube and Spotify stay inactive until
real links exist — do not enable them early.

## 4. Adding the 16 team ID cards

1. Export each card as a **public-safe** PNG (no private QR/barcode/ID data).
2. Save them as `assets/team/team-01.png` … `team-16.png` (empty slots with these
   names are already prepared).
3. In `js/main.js` (Part 2), fill in each member entry (`name`, `role`, `departments` —
   multiple allowed — and an optional `bio`), point `image` at the matching
   `assets/team/team-XX.png`, and set `placeholder: false`.
4. Until then, the grid renders clearly-marked placeholder cards; nothing is faked.

## 5. Publishing Campus Voices content

Edit `js/main.js` (Part 2) → `STORIES`. Each story needs: `id`, `category` (one of
`STORY_CATEGORIES`), `title`, `excerpt`, `image`, `mediaType` (`video` | `article` |
`audio`), and either `url` (a page on this site) or `externalUrl` (a real X/Instagram
link). Add `date` only when verified, and mark one story `featured: true`.
Empty categories automatically show a helpful empty state — never invent filler.

## 6. Replacing images, logo and video

Every visual currently ships as a clearly labelled placeholder. Swap files, keeping the
same paths (or update the references in the HTML / `main.js` Part 2). Never stretch, recolor
or re-create the official logo; drop the real files into `assets/logo/` when supplied.

### Asset inventory

| Expected asset                          | Where it goes                                   | Used on            |
|-----------------------------------------|-------------------------------------------------|--------------------|
| logo-primary.svg (official logo)        | `assets/logo/` (replace placeholder)            | header, footer     |
| logo-mark.svg (icon)                    | `assets/logo/` (replace placeholder)            | future use         |
| favicon.svg                             | `assets/icons/` (replace placeholder)           | browser tab        |
| Hero interview photo (4:5)              | `assets/images/hero/`                           | Home               |
| Hero detail photo (square)              | `assets/images/hero/`                           | Home               |
| About / team production photos          | `assets/images/about/`                          | Home, About        |
| Story thumbnails (16:9)                 | `assets/images/campus-voices/`                  | Campus Voices      |
| 16 member ID cards (portrait, ~5:7)       | `assets/team/team-XX.png`                       | About              |
| Interview videos (MP4/WebM + poster)    | `assets/videos/`                                | Campus Voices      |
| Social preview image (1200×630)         | `assets/images/shared/`                         | meta tags          |

## 7. Notes and honest limitations

- The site is **independent media**, not a UNILORIN channel: this is stated in the footer.
- Anonymous submissions are "not identified publicly", not technically untraceable — the
  copy says exactly that.
- Accessibility: semantic landmarks, skip link, visible focus rings, keyboard-accessible
  menu/modal/filters, `prefers-reduced-motion` support, 44px+ touch targets.
- Tested breakpoints: 360, 390, 768, 1024, 1280, 1440px.
- Delete `privacy.html`-reference concerns: the contact page carries a plain-language
  privacy statement plus a slot for a future formal notice.
