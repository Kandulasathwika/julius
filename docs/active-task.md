# Active Task

## Current Status: Julius Silvert distributor-style homepage

## What Was Completed

- Homepage reworked to follow my.juliussilvert.com-style IA: helper bar, navy header with categories, inventory strip, hero carousel, promo tiles, featured product rows, inventory detail section, trust bar, curated partners, footer
- New components: HelperBar, InventoryAlertStrip, PromoTiles, FeaturedProductRows, BrandPartners, TrustBar
- Removed: QuickActions, CategoryBrowse, ValueProps (replaced by tiles and product rows)
- Fonts: Libre Baskerville and Source Sans 3 in root layout for Julius styling; metadata title updated
- next.config: remotePatterns for images.unsplash.com
- Theme tokens: js-navy, js-navy-deep, js-canvas, js-paper, js-ink, js-redline
- Central image map: `src/lib/julius-images.ts` (`JULIUS_IMG`) for Unsplash URLs used across Julius sections
- Photo and UI pass: header logo mark, hero four slides (including cheese or dairy slide), promo tiles and featured rows wired to `JULIUS_IMG`, inventory section banner plus per-row product thumbnails, footer subtle texture overlay, product card hover polish, BrandPartners hover scale uses valid Tailwind `scale-105`
- Several Unsplash photo IDs were returning HTTP 404 from `images.unsplash.com` (tomato, wagyu, delivery, multiple partner tiles, Compart, Carved). Those entries in `julius-images.ts` were swapped for verified 200 URLs so Next.js Image and the strip load reliably

## Next Steps

- Replace placeholder copy or imagery with brand-approved assets if required
- Run dev server for visual QA on mobile category scroll and carousels
