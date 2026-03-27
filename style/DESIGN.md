```markdown
# Design System: Editorial Ink

## 1. Overview & Creative North Star

### Creative North Star: "The Living Manuscript"
The design system is built to transform the digital blog into a high-end, tactile editorial experience. It rejects the "app-like" rigidity of modern web design in favor of the timeless authority of a physical broadsheet or a limited-edition literary journal. 

**Breaking the Template:**
To move beyond a generic blog layout, this system utilizes **intentional asymmetry** and **typographic dominance**. We do not use borders to contain ideas; we use the gravity of heavy serif headlines and expansive, rhythmic whitespace (negative space) to guide the eye. Elements like metadata and captions are treated as marginalia—discreetly placed to the side or tucked into "gutters" to maintain a clean, intellectual focus on the primary narrative.

---

## 2. Colors

The palette is rooted in high-contrast legibility and a warm, academic atmosphere. 

### Palette Definition
- **Background (`#fef9ee`):** A warm, off-white "book-bond" paper tone designed to eliminate blue-light harshness and reduce eye strain during long-form reading.
- **Primary Text (`#18454d`):** A deep, ink-like charcoal. This is used for all long-form body text to ensure maximum contrast without the jarring "vibration" of pure black on white.
- **Secondary Accents (`#006a6a`):** A sophisticated teal reserved for links, active states, and quiet moments of brand personality.

### The "No-Line" Rule
**Explicit Instruction:** Prohibit the use of 1px solid borders for sectioning or containment. 
Boundaries must be defined solely through background color shifts. For example, a "Featured Post" section should sit on `surface-container-low` against the `background` main stage. If a visual break is needed, use the **Spacing Scale** (e.g., `spacing-16`) to create a physical void that acts as a separator.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers of fine paper:
*   **Base:** `surface` (#fef9ee) - The primary canvas.
*   **Elevated Content:** `surface-container-low` (#f8f3e8) - Used for asides or quote blocks.
*   **Interactive Layers:** `surface-container-high` (#ece8dd) - Used for fly-out menus or navigation overlays.

### Signature Textures
Avoid flat, lifeless shapes. Use a subtle linear gradient on primary CTAs or header backgrounds transitioning from `primary` (#002e35) to `primary-container` (#18454d) at a 135-degree angle. This mimics the slight sheen of fresh ink on high-quality paper.

---

## 3. Typography

Typography is the core architecture of this system. We lead with the **Newsreader** serif for its "optical size" capabilities—it feels intellectual and authoritative at large sizes and remains exceptionally readable in long-form prose.

*   **Display & Headlines (Newsreader):** Used to establish hierarchy. Large scale differences (e.g., `display-lg` vs. `body-lg`) create a "front-page" editorial feel.
*   **Body (Newsreader):** Set with generous line-height to ensure the eye never loses its place.
*   **Labels & Metadata (Work Sans):** A clean, functional sans-serif/monospace hybrid used for "technical" data: reading time, publication dates, and tags. This creates a clear visual distinction between the *content* and the *data about the content*.

---

## 4. Elevation & Depth

### The Layering Principle
Depth is achieved through **Tonal Layering** rather than shadows. To highlight a card or a sidebar, place a `surface-container-lowest` (#ffffff) element on top of a `surface-container-low` (#f8f3e8) section. This creates a "soft lift" that feels architectural rather than digital.

### Ambient Shadows
If a floating element (like a mobile navigation menu) requires a shadow, it must be an **Ambient Shadow**:
*   **Color:** Tinted with the `on-surface` color (avoid pure grey).
*   **Blur:** Minimum 40px.
*   **Opacity:** 4%–6%.
*   **Result:** A whisper of depth that suggests the element is hovering just millimeters off the paper.

### Glassmorphism & Depth
For floating headers or "Read More" overlays, use a **Glassmorphism** effect:
*   **Background:** `surface` at 80% opacity.
*   **Backdrop Blur:** 12px to 20px.
*   **Purpose:** This allows the elegant typography of the article to bleed through the navigation, keeping the user immersed in the text even when interacting with the UI.

---

## 5. Components

### Navigation
*   **Style:** Minimalist, text-only. 
*   **Rule:** No icons unless strictly necessary for utility (e.g., Search). Use `label-md` in `on-surface-variant` for a quiet, sophisticated presence.

### Buttons
*   **Primary:** Solid `primary` background with `on-primary` text. Use `roundedness-sm` (0.125rem) for a sharp, "trimmed paper" edge.
*   **Tertiary (Editorial Link):** No background or border. Underlined with a 1px stroke of `secondary` positioned 4px below the baseline. On hover, the stroke weight increases to 2px.

### Metadata & Chips
*   **Metadata:** Use `label-sm` with increased letter-spacing (+0.05em).
*   **Chips:** Pill-shaped (`roundedness-full`), using `surface-variant` backgrounds. No borders. They should feel like small "ink stamps" on the page.

### Cards & Lists
*   **Forbid Dividers:** Do not use horizontal lines between list items. Use the **Spacing Scale** (`spacing-8`) to separate entries. 
*   **Hierarchy:** Use a `title-lg` for the headline and `body-sm` for the excerpt. The contrast in font size creates the necessary separation.

### Input Fields
*   **Style:** Underline only. No four-sided boxes.
*   **State:** The underline transitions from `outline-variant` to `primary` on focus.

---

## 6. Do’s and Don’ts

### Do
*   **Do** embrace extreme whitespace. If it feels like "too much" space, it is likely just enough.
*   **Do** use the `Newsreader` italic variant for emphasis—it is designed to look like traditional typesetting.
*   **Do** ensure all images have a subtle `surface-variant` background color while loading to maintain the warm tone of the page.

### Don’t
*   **Don’t** use 100% black. Always use the `primary-container` (#18454d) for text to maintain the "Ink on Paper" feel.
*   **Don’t** use rounded corners larger than `md` (0.375rem) for main content containers. Too much roundness breaks the sophisticated, editorial vibe.
*   **Don’t** use "Drop Shadows" on cards. Stick to tonal shifts or "Ghost Borders" (outline-variant at 15% opacity) if accessibility requires a container edge.