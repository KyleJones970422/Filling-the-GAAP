# Filling the GAAP — website

Marketing site for [www.ftgaap.co.za](https://www.ftgaap.co.za): accounting and tax services, the FTG Books and FTG Review products, free tools and a resources blog.

Built with [Astro](https://astro.build) as a fully static site and deployed on Netlify.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serves dist/
```

Node 22 is required.

## Where to change things

| What | Where |
| --- | --- |
| Phone, email, hours, booking link, social links, credentials | `src/config.ts` |
| Registration numbers (SAIPA, SARS), headshot path, Google reviews link, testimonials, the four promises, VAT note under prices | `src/config.ts` |
| Navigation menu | `src/config.ts` (`nav`) |
| Service lists and client types | `src/data/services.ts` |
| Prices and packages | `src/data/pricing.ts` |
| FAQ answers | `src/data/faq.ts` |
| Tax calendar deadlines | `src/data/calendar.ts` |
| Income tax tables (add a new tax year here; the default year is `defaultTaxYear` in `src/config.ts`) | `src/data/tax-tables.ts` |
| Colours, fonts, spacing | `src/styles/global.css` (the `:root` block) |
| Logo mark | `src/components/Logo.astro`, `public/favicon.svg`, `public/logo.svg` |
| Page copy | `src/pages/**/*.astro` |
| Blog articles | `src/content/blog/*.md` |

### Adding a blog post

Create a new Markdown file in `src/content/blog/`. The file name becomes the URL under `/resources/`. Front matter:

```md
---
title: "Post title"
description: "One or two sentences shown in listings and search results."
date: 2026-09-01
category: Personal tax   # Personal tax | Business | Compliance | Software | News
tags: [SARS, deadlines]
draft: false             # true hides the post
---

Your content in Markdown.
```

### Things to fill in before launch

- `registrations.saipa` and `registrations.sarsPractitioner` in `src/config.ts`: shown on the About page and footer so prospects can verify you. Hidden while empty.
- `headshot`: drop a photo into `public/` (e.g. `public/kyle.jpg`) and set `headshot: '/kyle.jpg'`. Initials show until then.
- `reviews` and `googleReviewsUrl`: add testimonials as `{ quote, name, role, rating }`. The section appears on the home page once there is at least one.
- `pricesNote`: currently "Prices exclude VAT where applicable." Change it if you are not VAT registered.

### Enabling the booking calendar

Paste your Calendly, Cal.com or Google appointment link into `bookingUrl` in `src/config.ts`. The contact page then shows a "Open booking calendar" button.

### Contact form

The form on `/contact` uses [Netlify Forms](https://docs.netlify.com/forms/setup/). After the first deploy, open the Netlify dashboard, go to Forms, and add an email notification to `kyle@ftgaap.co.za`. Submissions redirect to `/thank-you`.

### Social share image

`public/og.png` and `public/apple-touch-icon.png` are generated from `scripts/og-image.html`:

```bash
node scripts/gen-images.cjs
```

## Deploying on Netlify

1. In Netlify, add a new site from this GitHub repository.
2. Build settings are read from `netlify.toml` (build command `npm run build`, publish directory `dist`, Node 22).
3. Add the custom domain `www.ftgaap.co.za` and set it as the primary domain. The bare domain redirects to www.
4. Enable the form notification as described above.

## Checks

```bash
npm run build && node scripts/check-links.cjs   # verifies every internal link resolves
```
