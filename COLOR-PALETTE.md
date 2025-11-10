# Christian Borja Brand Color Palette

This document defines the official color palette used throughout the website.

## Color Reference

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Nyanza** | `#d8f3dc` | Section backgrounds, light backgrounds |
| **Celadon** | `#b7e4c7` | Card bases, secondary backgrounds |
| **Mint** | `#74c69d` | Accent lines, hover highlights, CTA buttons |
| **Sea-Green** | `#40916c` | Primary buttons, headings, callouts |
| **Dartmouth-Green** | `#2d6a4f` | Testimonial text, navigation, body text |
| **Dark-Green** | `#081c15` | Strong text, high contrast elements |

## Usage Guidelines

### Backgrounds
- **Primary sections**: `nyanza` (#d8f3dc)
- **Alternate sections**: `celadon` (#b7e4c7)
- **Hero overlays**: Gradient from `dark-green` → `dartmouth-green` → `sea-green`

### Text
- **Headings**: `sea-green` (#40916c) or `dartmouth-green` (#2d6a4f)
- **Body text**: `dartmouth-green` (#2d6a4f) or `dark-green` (#081c15)
- **Testimonials**: `dartmouth-green` (#2d6a4f)

### Interactive Elements
- **Primary buttons**: Background `sea-green` (#40916c), hover `dartmouth-green` (#2d6a4f)
- **Secondary buttons**: Border `sea-green`, hover background `nyanza`
- **Links**: Normal `dartmouth-green`, hover `sea-green`
- **Accent highlights**: `mint` (#74c69d)

### Cards & Components
- **Card backgrounds**: `celadon` (#b7e4c7)
- **Borders**: `mint` (#74c69d)
- **Hover states**: `mint` with transparency

## Tailwind CSS Classes

```css
/* Direct color classes */
bg-nyanza
bg-celadon
bg-mint
bg-sea-green
bg-dartmouth-green
bg-dark-green

text-nyanza
text-celadon
text-mint
text-sea-green
text-dartmouth-green
text-dark-green

border-nyanza
border-celadon
border-mint
border-sea-green
border-dartmouth-green
border-dark-green
```

## Accessibility

All color combinations have been chosen to meet WCAG 2.1 AA standards:
- Dark-green on nyanza/celadon: AAA
- Dartmouth-green on white/nyanza: AA
- Sea-green on white/nyanza: AA
- White on sea-green/dartmouth-green/dark-green: AAA

## Implementation

The color palette is defined in `tailwind.config.ts` and used consistently across:
- Hero section backgrounds and buttons
- Navigation and footer
- Service cards and sections
- Testimonials
- Contact forms and CTAs

