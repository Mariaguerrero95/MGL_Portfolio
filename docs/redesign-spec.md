# Redesign Spec — Editorial Homepage (summary)

Fuente de verdad: Hero (tipografía, ritmo, halo, border treatment).

## Estructura final de la home

1. Hero
2. Selected Work from Zano (3 editorial previews)
3. Product Philosophy / Impact (cualitativo)
4. Capabilities & Technologies (marquee, 2 filas)
5. Experience Timeline (Zano company card + sub-items)
6. Testimonials
7. Contact

## Tokens (guía rápida para dev)

- Radii: cards 24–32px; containers 48px.
- Borders: 1px hairline rgba(20,20,30,0.06).
- Halo: radial accent behind key visuals, 6–12% opacity.
- Spacing: XS 8, S 16, M 24, L 40, XL 64, XXL 96.
- Easing: cubic-bezier(.2,.9,.2,1); hover 320ms; entry 420ms.

## Selected Work — content model

- `id`, `slug`, `title`, `shortContext`, `roles[]`, `tech[]`, `problem`, `solution`, `screenshot` (paths)

## Assets required

- For each Zano case: high-res desktop screenshot (16:9) and mobile screenshot. Place in `public/previews/`.
- Zano company logo for company card.

## Markup snippets (example — Selected Work preview)

```html
<div class="zcase zcase--editorial" data-zcase="life-sciences">
  <div class="zcase__media">
    <img
      src="/previews/life-sciences-desktop.jpg"
      alt="Life Sciences Workspace screenshot"
    />
  </div>
  <div class="zcase__content">
    <div class="kicker">Selected Work · Zano</div>
    <h3 class="zcase__title">Life Sciences Intelligence Workspace</h3>
    <div class="zcase__roles">Product Engineer · Frontend · AI</div>
    <p class="zcase__context">Short one-line context…</p>
    <p class="zcase__problem"><strong>Problem:</strong> …</p>
    <p class="zcase__solution"><strong>Solution:</strong> …</p>
    <a class="btn btn--primary" href="/cases/life-sciences">Ver case study</a>
  </div>
</div>
```

## Notes

- No usar métricas numéricas a menos que el owner las proporcione. Usar lenguaje cualitativo.
- Este repo contiene markup-only components; la conversión a SCSS vendrá después de validar la estructura.
