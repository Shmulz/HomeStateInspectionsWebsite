# Home State Inspections — Website

Plain static HTML/CSS/JS site for Home State Inspections (Boaz Silverberg), replacing the near-empty homestateinspects.com placeholder. No framework, no build step — matches the same locked decision used on the Warp9 Drones rebuild: zero moving parts, native fit for free GitHub Pages hosting.

## Pages

- `index.html` — Home
- `services.html` — General inspection scope
- `service-area.html` — Cities served (draft list, needs Boaz's confirmation)
- `about.html` — About Boaz (has placeholder headshot + bio, needs real content)
- `contact.html` — Contact + "Get a Free Quote" form
- `privacy-policy.html`

## Logo

`logo.png` is Boaz's original file — a screenshot/banner (859x376, opaque sky background, a stray real-house-photo corner baked in). `logo-transparent.png` is the actual usable asset: background removed with `rembg` (u2net model) and auto-cropped to content, 822x357. That's what's used across the site — small (52px tall) in every page header, and large (320px wide, with a drop-shadow) in the homepage hero. If Boaz ever gets a proper vector/transparent source file from whoever designed the logo, swap it in — it'll be cleaner than the rembg cutout.

## Before this goes live — open items

1. **Formspree form ID** — `contact.html`'s quote form points at `https://formspree.io/f/YOUR_FORM_ID`. Create a free Formspree account with `boaz@homestateinspects.com`, add a form, and swap in the real ID. First real submission needs a one-time confirmation click, same as the Warp9 setup.
2. **Boaz's headshot** — `about.html` currently shows an "BS" initials tile as a placeholder. Add a real photo as `boaz.jpg` and swap the markup.
3. **Boaz's bio + Ohio license number** — `about.html` only states what's confirmed (Ohio-licensed, based in Blue Ash). Needs his real background and license number.
4. **Service area list** — `service-area.html` lists nearby Cincinnati suburbs as a reasonable starting point. Confirm/trim with Boaz, then match it exactly to his Google Business Profile service area.
5. **Google Business Profile** — not part of this repo, but the single highest-leverage thing for a brand-new local business to set up next: it's what actually shows up in the Google Maps "local pack" for searches like "home inspector Blue Ash." NAP (name/address/phone) must match this site exactly.

## Local preview

No build step — just serve the folder statically, e.g.:

```
npx serve .
```

## Hosting plan (once reviewed)

Same cutover pattern as Warp9: push to a new GitHub repo (separate account/repo from Warp9, per Shmulik), enable GitHub Pages, then later point the real homestateinspects.com domain at it and retire whatever the domain currently points to.
