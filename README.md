# Shlomi Green

Personal contact and profile landing page for Shlomi Green, Engineering Manager at Agoda.

**Live site:** [shlomi.green](https://shlomi.green)

## Features

- Responsive, lightweight static site with no build step.
- Contact shortcuts for Thailand and Israel phone numbers, LINE, WhatsApp, work and personal email, LinkedIn, and Facebook.
- PromptPay QR modal with download and share actions.
- Save-contact action that generates a downloadable vCard.
- Native share support with clipboard fallback.
- English, Thai, and Hebrew translations, including right-to-left layout for Hebrew.
- Region-aware contact ordering using browser settings and Cloudflare request country data when available.
- Local persistence for language and region preferences.
- Accessible controls, semantic markup, responsive layout, and reduced-motion-friendly interactions.

## Stack

- HTML, CSS, and vanilla JavaScript
- Cloudflare Pages Functions for lightweight request context detection
- Static assets served from the repository

## Development

No dependencies or build command are required. Serve the repository root with any static file server, or deploy it directly to Cloudflare Pages.

For Cloudflare Pages, use:

- **Build command:** none
- **Build output directory:** `/`

The `/functions` directory is deployed automatically as Pages Functions.
