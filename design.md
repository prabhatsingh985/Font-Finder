# Firecrawl — Style Reference
> Technical blueprint on warm vellum. A developer tool that swaps cold gray for a single burning orange signal, sitting on near-white surfaces stitched together by hairline grid lines.

**Theme:** light

Firecrawl operates as a developer-first workspace: a pale near-white canvas overlaid with a fine grid of hairline borders, a single vivid orange accent (#ff4d00) that acts as functional punctuation, and typography set in Suisse — a humanist grotesque whose tight tracking and generous x-height keep everything feeling engineered rather than editorial. Components are flat and quiet: pill-shaped controls (999px radius), 8px card corners, and shadow stacks that are barely perceptible (black at 2-3% alpha) so that depth comes from layering and the orange border-glow, not from drop shadows. The orange is never decorative — it appears on the CTA, the fire icon, highlight words in headlines, badge dots, and tab underlines. Everything else is a calibrated gray scale, with #e5e7eb doing the work of a thousand borders and #262626 carrying the full weight of body and heading text at AAA contrast against the off-white surfaces.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Ember Orange | `#ff4d00` | `--color-ember-orange` | Primary action background, accent text, highlight words in headlines, fire icon, active tab underline, badge dots, link strokes — the system's only chromatic signal |
| Ember Glow (light) | `#fcddcc` | `--color-ember-glow-light` | Soft orange-tinted shadow halos behind orange buttons and badges, giving them a warm bloom without raising elevation |
| Ember Wash (deep) | `#febec2` | `--color-ember-wash-deep` | Secondary warm-tinted shadow wash, used for outer glow rings on highlighted cards and code windows |
| Gridline | `#e5e7eb` | `--color-gridline` | Dominant hairline border, card outlines, input strokes, code window dividers, grid background lines — the structural skeleton of every screen |
| Ink | `#262626` | `--color-ink` | Primary text, heading fills, icon strokes, button text on light surfaces, code text |
| Vellum | `#f9f9f9` | `--color-vellum` | Page and card background, the softest surface in the stack; inset shadow fields use a vellum-tinted ring to create depth without darkening |
| Slate | `#727272` | `--color-slate` | Secondary text, muted body copy, placeholder labels, disabled-state copy |
| Graphite | `#616161` | `--color-graphite` | Link text in body copy, supporting paragraphs, slightly lighter than Ink for inline emphasis |
| Ash | `#949494` | `--color-ash` | Tertiary text, helper text, subtle icon strokes, caption-tier metadata |
| Stone | `#c7c7c7` | `--color-stone` | Placeholder text in inputs and code blocks, very light body text where contrast is deliberately reduced |
| Mist | `#b5b5b5` | `--color-mist` | Decorative strokes, faint dividers, background-pattern dots and crosses |
| Pebble | `#838383` | `--color-pebble` | Muted button text on neutral surfaces, subtle UI labels |

## Tokens — Typography

### Suisse — Primary interface and headline face
- **Substitute:** Inter, Söhne, or Untitled Sans
- **Weights:** 400, 450, 500
- **Sizes:** 10, 12, 13, 14, 15, 16, 20, 24, 40, 52, 60
- **Letter spacing:** -0.01em at 60px, -0.005em at 40-52px, normal at 16-24px, +0.01em at 12-14px, +0.02em at 10-13px

### Geist Mono — Code, technical labels, and developer micro-copy
- **Substitute:** JetBrains Mono, IBM Plex Mono
- **Weights:** 400, 500
- **Sizes:** 12, 13, 14
- **Line height:** 1.33, 1.54, 1.57

## Tokens — Spacing & Shapes

**Base unit:** 4px
**Radii:**
- buttons, tags, chips: `999px` (pill)
- cards: `16px`
- inputs, code windows: `8px`

**Shadows:**
- Orange button glow: `0 0 0 6px #fcddcc`
- Ambient vellum ring: `rgb(249, 249, 249) 0px 0px 0px 6px`
- Subtle card shadow: `rgba(0, 0, 0, 0.02) 0px 40px 48px -20px, rgba(0, 0, 0, 0.03) 0px 0px 0px 1px`
