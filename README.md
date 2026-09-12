# Coast Heating & Air Conditioning — emergency service landing page

Single-page, mobile-first site built to out-convert a directory listing. Next.js
(App Router) + Tailwind CSS, zero database required to run, deployable to Vercel.

**Goal of the page:** get a panicked phone visitor to `tel:+12288754674` in under
3 seconds, with a 4-field request form as the secondary path for people who
don't want to call yet.

---

## Conversion structure

| Element | Where | Why |
| --- | --- | --- |
| Sticky "Call Now" bar | Fixed to the bottom of the viewport, all screen sizes, rendered from `app/layout.js` | A call target is always visible no matter where they scroll |
| Above-the-fold CTA | Hero | Business name, value prop, hours badge, phone number, one primary CTA — no scrolling on a 360×640 phone |
| Trust bar | Directly under the hero | Star rating + review count, licensing, 25+ years, same-day service |
| Services | `#services` | 5 services, plain-language icons, each with its own click-to-call link |
| Pricing | `#pricing` | Kills the "what's this going to cost me" objection before the FAQ |
| Service area | `#area` | Cities + ZIP codes for local SEO and "am I in range?" reassurance |
| Reviews | `#reviews` | 3 real quotes with names and cities, plus the 4.8★ / 790+ aggregate |
| Urgency banner | Mid-page | "Don't wait in a hot house" + nights/weekends/holidays |
| FAQ | `#faq` | Response time, real 24/7, estimate/diagnostic pricing, licensing |
| Request form | `#request` | Name, phone, service, urgency (+ optional note) |
| Final CTA | FAQ footer block | Last chance to convert after objections are handled |

Every phone number on the page is a `tel:` link. The nav has no multi-page maze —
one scrolling page with an anchor strip.

---

## Run it locally

```bash
npm install
cp .env.example .env.local   # optional — only needed to save form submissions
npm run dev                  # http://localhost:3000
```

## Editing content (start here)

**`lib/business.js` is the single source of truth.** Phone number, hours, review
count, services, cities/ZIPs, testimonials and FAQ answers all live there, and
the page, the `<head>` metadata and the JSON-LD structured data all read from it,
so they can't drift apart.

---

## Request form backend

Submissions POST to `/api/request` (`app/api/request/route.js`).

* With Supabase configured, each lead is inserted into the `service_requests`
  table (already created) with a `status` of `new`.
* Without Supabase configured, the route still returns success, logs the
  submission to the Vercel function log, and the visitor sees the confirmation
  screen with a tap-to-call fallback. The form is never a dead end.

To enable persistence on Vercel: **Project → Settings → Environment Variables**

```
SUPABASE_URL=https://<project>.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<service role key>   # or SUPABASE_ANON_KEY
NEXT_PUBLIC_SITE_URL=https://<your domain>     # for canonical URLs / sitemap
```

Then read leads in the Supabase dashboard, sorted by `created_at`:

```sql
select created_at, name, phone, service, urgency, notes
from public.service_requests
where status = 'new'
order by created_at desc;
```

The table has RLS on with an insert-only policy for the public key, so site
visitors can create a lead but cannot read anyone else's.

---

## SEO

* **Meta title:** `Emergency AC Repair Ocean Springs, MS | Coast Heating & Air Conditioning`
* **Description:** leads with the emergency use case, service area, rating and phone number
* **Structured data** (`lib/schema.js`): `HVACBusiness` + `LocalBusiness` — name, phone, service
  area (9 cities + 2 counties), Mon–Sat 7–7 opening hours, a 24/7 emergency
  `ContactPoint`, `aggregateRating` (4.8 / 790), the 3 reviews, an
  `OfferCatalog` of all 5 services — plus a `FAQPage` built from the same FAQ copy.
* `app/sitemap.js` and `app/robots.js` generate `/sitemap.xml` and `/robots.txt`.

## Performance

No raster images, no carousels, no autoplay video, no web fonts (system font
stack), no client-side JS except the open/closed badge and the form. The page is
prerendered to static HTML at build time, so first paint on 4G is text-immediate.

---

## Pre-launch checklist (confirm these with the owner)

1. **ZIP codes** — the city list includes ZIPs (e.g. Ocean Springs 39564,
   Biloxi 39530–39532, Gautier 39553). Verify each is inside the covered
   territory before publishing, and delete any that aren't.
2. **Pricing FAQ answers** — FAQ #3/#4 and the pricing section deliberately avoid
   quoting a dollar amount or promising free estimates. Replace them with the
   real diagnostic fee policy (there's a `TODO` in `lib/business.js`).
3. **Street address + coordinates** — only the city is known, so the schema has
   `addressLocality` + `addressRegion` + `postalCode` and no street address or
   `geo`. Add them in `lib/schema.js` if they want full Google Business Profile
   parity.
4. **Canonical domain** — set `NEXT_PUBLIC_SITE_URL` to the real domain once it's
   pointed at Vercel, and connect the domain in Vercel → Settings → Domains.
5. **Lead notifications** — the form stores leads; add an email/SMS alert
   (Supabase webhook, Zapier or Twilio) so dispatchers see them instantly.
6. **Analytics** — every CTA carries a `data-cta` attribute
   (`hero-call`, `sticky-call`, `service-call`, `form-confirm-call`, …) so a GA4
   or call-tracking snippet can measure taps per placement.
7. **Review links** — the testimonials name their source platforms; link the
   "Reviews" section out to the live Google/Angi profiles if they want the
   click-through.

## Deploy

Push to `main` and import the repo in Vercel (framework auto-detects as Next.js).
No build configuration needed.
