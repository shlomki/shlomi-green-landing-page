# Shlomi Green landing page

Static Cloudflare Pages-ready site. No build step is required.

## Assets to add

- `assets/profile.jpg` — copied from the existing Carrd page.
- `assets/promptpay-qr.jpg` — the supplied PromptPay QR image, used by the PromptPay modal and download link.

The page uses a tiny client-side localization layer and keeps the user's language preference locally. Country selection currently uses browser language/timezone as a safe static fallback; a Cloudflare Pages Function can later provide `request.cf.country` for more accurate country detection without redirects.

## Private Tailscale preview

The current working copy is available only to devices on the same tailnet at:

<https://shlomi-pc-linux.kite-yo.ts.net:8445/>

The preview uses the user service `shlomi-landing-preview.service` on `127.0.0.1:8787`, fronted by Tailscale Serve. It starts automatically for this user and does not expose the site through Cloudflare or the public internet.

Useful maintenance commands:

```bash
systemctl --user status shlomi-landing-preview.service
systemctl --user restart shlomi-landing-preview.service
systemctl --user stop shlomi-landing-preview.service
tailscale serve status
```
