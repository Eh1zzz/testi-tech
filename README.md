# Testi-Tech Global

Marketing + lead-gen site for **Testi-Tech Global** — a Buy · Sell · Swap gadget
marketplace and repair/unlocking shop in **Benin City, Edo State, Nigeria**.

Built with **Next.js 15 (App Router) + React 19**. Single-page site with a
filterable shop, services, trade-in form, testimonials carousel, and a contact
form. WhatsApp is the primary contact channel throughout.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

Build / run production:

```bash
npm run build
npm run start
```

## Project layout

```
app/
  layout.js          # SEO metadata + LocalBusiness JSON-LD + fonts + theme
  page.js            # page composition (hero, services, about, footer)
  globals.css        # the design system (Electric Noir) — reused as-is
  api/contact/route.js   # real contact endpoint (email or WhatsApp fallback)
  robots.js sitemap.js manifest.js   # SEO / PWA (auto-served)
components/           # Navbar, Shop, Swap, Testimonials, Contact, etc.
lib/data.js           # products, reviews & business info (edit these)
public/               # icon.svg, and product images you add
legacy/               # the original static HTML/CSS/JS (reference only)
```

## Editing content

- **Products / reviews / phone / address:** `lib/data.js`.
- **Product images:** drop a file in `public/products/` and set the product's
  `image` path (e.g. `'/products/iphone-15-pro-max.jpg'`). Until then the emoji
  placeholder shows. Images are served through `next/image` (auto-optimised).

## Contact form delivery

The contact form POSTs to `/api/contact`. Two modes:

- **No email configured (default):** the route returns gracefully and the form
  opens **WhatsApp** pre-filled — messages always reach the shop.
- **Email enabled:** set these env vars (e.g. in a `.env.local` or on your host)
  to also receive enquiries by email via [Resend](https://resend.com):

  ```
  RESEND_API_KEY=re_xxxxxxxx
  CONTACT_TO_EMAIL=you@example.com
  CONTACT_FROM_EMAIL=Testi-Tech <onboarding@resend.dev>   # optional
  ```

## Deploy

Deploy on **Vercel** (recommended for Next.js) or **Netlify** — connect the
GitHub repo (not drag-and-drop, since there's now an API route). Set the
contact env vars in the host's dashboard if you want email delivery. Update
`BIZ.url` in `lib/data.js` to your live domain so SEO metadata/sitemap are
correct.
