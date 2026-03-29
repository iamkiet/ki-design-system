# Design System Specification: High-Key Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Ethereal Manuscript"**

This design system moves away from the rigid, boxed-in layouts of traditional SaaS and embraces the fluidity of high-end editorial fashion journals. The objective is to create a digital environment that feels like it’s breathing. By utilizing a high-key color palette (predominantly whites and soft lavenders), we achieve a "weightless" interface.

To break the "template" look, designers must lean into **intentional asymmetry**. Align text to the far left while anchoring imagery to the right with generous `spacing-24` gutters. Overlap typography onto container edges to create a sense of depth that feels curated rather than programmed. This is not a grid to be filled; it is a canvas to be composed.

---

## 2. Colors & Tonal Architecture
The palette is strictly limited to tones of violet, lavender, and pristine whites. Any deviation into warm tones (yellows, browns) or clashing cools (blues) is strictly prohibited to maintain the "High-Key" signature.

### The "No-Line" Rule
Traditional 1px borders are heavy and disruptive. In this system, **borders are prohibited** for sectioning. Boundaries must be defined solely through background color shifts:
*   **Base Layer:** `surface` (#f9f9fa)
*   **Sectioning:** Use `surface_container_low` (#f2f4f5) to create a subtle shift in focus.
*   **Emphasis:** Use `primary_container` (#ebdcff) for soft, atmospheric highlighting behind key content blocks.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, fine papers. 
*   **Lowest Level:** Use `surface_container_lowest` (#ffffff) for high-impact content cards sitting on top of a `surface` background.
*   **Nesting:** When placing a container inside another, always move one step "Up" or "Down" the tier. For example, a `surface_container_high` (#e4e9ec) search bar should sit inside a `surface_container_low` (#f2f4f5) header.

### The "Glass & Gradient" Rule
To add soul to the interface, use a **Linear Gradient** for hero sections and primary CTAs:
*   **Direction:** 135 degrees.
*   **Start:** `primary` (#68548d)
*   **End:** `primary_dim` (#5c4880)
This creates a subtle "velvet" texture that distinguishes brand-critical elements from functional ones.

---

## 3. Typography: The Editorial Voice
We use **Plus Jakarta Sans** exclusively. Its modern, geometric construction provides the clarity required for a minimalist aesthetic while maintaining a sophisticated edge.

*   **Display Scale:** Use `display-lg` (3.5rem) for hero statements. Reduce letter-spacing to `-0.02em` to create a "tight," professional editorial look.
*   **The Label Contrast:** Pair large displays with `label-md` (0.75rem) in all-caps with a letter-spacing of `0.1em`. This contrast between the massive and the minute is the hallmark of premium design.
*   **Body Copy:** Use `body-lg` (1rem) for readability. Ensure line-height is generous (typically 1.6x) to allow the "Ether" to flow between sentences.

---

## 4. Elevation & Depth
We reject traditional drop shadows in favor of **Tonal Layering** and **Ambient Light**.

### Tonal Layering
Depth is achieved by stacking tones. A `surface_container_lowest` card placed on a `surface` background provides enough "lift" for the eye without the clutter of a shadow.

### Ambient Shadows
If a "floating" element (like a modal or dropdown) is required:
*   **Blur:** Use `spacing-10` or higher for a wide, diffused spread.
*   **Opacity:** 4%–6% maximum.
*   **Color:** Use the `on_surface` token (#2d3336) as the shadow base, never pure black.

### Glassmorphism
For navigation bars and floating action buttons, use a **Backdrop Blur** (20px–30px) combined with a semi-transparent `surface` color at 80% opacity. This allows the soft purples of the content to "bleed" through, maintaining the high-key, airy atmosphere.

---

## 5. Components

### Buttons
*   **Primary:** Pill-shaped (`rounded-full`). Background: `primary` (#68548d). Text: `on_primary` (#fdf5ff). No shadow.
*   **Secondary:** Pill-shaped. Background: `primary_container` (#ebdcff). Text: `on_primary_container` (#5b487f).
*   **Tertiary:** Text only. Use `label-md` (All Caps). Color: `primary`.

### Cards & Lists
*   **The "No-Divider" Rule:** Never use lines to separate list items. Use `spacing-3` of vertical white space or alternating tonal shifts (e.g., `surface` to `surface_container_low`).
*   **Card Styling:** Use `rounded-xl` (0.75rem). Use `surface_container_lowest` with no border. 

### Input Fields
*   **State:** Default state is `surface_container_high` (#e4e9ec) with no border.
*   **Focus:** Transition to `primary_container` (#ebdcff). Use a "Ghost Border" of `primary` at 20% opacity to signal activity without breaking the minimalist flow.

### Featured Component: The "Content Veil"
For long-scroll editorial pages, use a gradient overlay at the bottom of the viewport using `surface` (#f9f9fa) at 0% to 100% opacity. This "fades" the content out into the ether, encouraging a feeling of infinite space.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use the full `spacing-24` scale for top-level section margins.
*   **Do** rely on `on_surface_variant` (#596063) for secondary text to maintain low-contrast sophistication.
*   **Do** ensure all interactive elements have a minimum touch target of 44px, despite their minimalist appearance.

### Don't:
*   **Don't** use any colors outside the purple/white spectrum (e.g., no blue links, no orange alerts). 
*   **Don't** use 1px solid dividers or "containment" boxes.
*   **Don't** crowd the layout. If you feel a section is too empty, add *more* whitespace, not more decorative elements.
*   **Don't** use high-contrast shadows. If the shadow is clearly visible as a shape, it is too dark.