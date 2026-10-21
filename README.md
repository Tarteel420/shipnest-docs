# ShipNest Docs

ShipNest user guide built with [Fumadocs](https://fumadocs.dev) (Next.js, notebook layout), styled to match the OMS / AccountWise docs.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000  (redirects to /docs/getting-started)
npm run build && npm start   # production build
```

Deploys to Vercel with no extra configuration.

## Structure

```
content/docs/            MDX pages — one folder per top-nav section
  meta.json              order of the top-nav sections
  <section>/meta.json    sidebar order and "---Group---" separators
public/images/<section>/ screenshots (PNG)
lib/image-sizes.json     screenshot dimensions (used by <Screenshot>)
components/
  notebook-header.tsx    single-row header: section tabs + theme + search
  screenshot.tsx         <Screenshot src alt caption/> — framed, click-to-zoom
  mdx.tsx                MDX components (Steps, Tabs, Accordions, Callout, Cards, Screenshot)
app/global.css           theme colours (same palette as the OMS docs)
```

## Adding a page

1. Create `content/docs/<section>/<page>.mdx` with `title` and `description` front-matter.
2. Add the file name to that folder's `meta.json`.
3. Add screenshots to `public/images/<section>/` and run the snippet below to refresh sizes.

```bash
python3 -c "import json,glob;from PIL import Image;json.dump({'/'+f.split('public/',1)[1]:list(Image.open(f).size) for f in glob.glob('public/images/**/*.png',recursive=True)},open('lib/image-sizes.json','w'),indent=1)"
```

Search (Ctrl/⌘ K) indexes all pages automatically.
