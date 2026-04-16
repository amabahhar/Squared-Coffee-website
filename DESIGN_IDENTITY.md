# Squared Coffee: Design Identity & Brand Guidelines

> **Status:** Active / Source of Truth
> **Theme:** Precision Lab / Modern Minimalism
> **Brand Colors:** Cyan, Black, Gray, White

---

## 1. Brand Essence
Squared Coffee is where **Specialty Coffee meets Technical Precision**. We treat brewing as a science and our shop as a specialized laboratory for taste. The identity is sharp, clean, and intentionally "agency-grade."

### Core Pillars
*   **Precision:** Everything is measured, logical, and intentional.
*   **Transparency:** High-contrast visuals representing clarity in our process.
*   **Evolution:** A tech-forward approach to a traditional beverage.

---

## 2. Visual Identity

### Color Palette (The Precision Palette)
We use a high-contrast, neutral base with a single surgical accent color.

| Role | Token | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Primary** | `black` | `#09090B` (Zinc-950) | Backgrounds, primary text, dark mode base. |
| **Accent** | `cyan` | `#009FB8` | Interaction, buttons, links, technical highlights. |
| **Secondary** | `cyan-light` | `#33CEE6` | Hover states, subtle accents. |
| **Surface** | `white` | `#FFFFFF` | Light mode background, card faces. |
| **Muted** | `gray-100` | `#F4F4F5` (Zinc-100) | Secondary backgrounds, borders. |
| **Borders** | `gray-200` | `#E4E4E7` | Component boundaries, grid lines. |

### Typography
Consistent font usage is critical for the "technical" feel. Use **Inter** for authority and **Roboto** for utility.

*   **Headings:** **Inter** (Bold, sans-serif) - Tracking: `-0.02em`.
*   **Body:** **Roboto** (Regular, sans-serif) - For readability and clean blocks of text.
*   **Technical/Captions:** **Roboto Mono** - Used for figures, specs, and metadata labels.

---

## 3. UI Geometry & components

### Shape & Structure
*   **Borders:** Subtle rounding is preferred. Standard is `8px` (`rounded-lg`). Avoid full circles unless specifically for small icons or status indicators.
*   **Grids:** Use a 40px grid pattern in the background (3% opacity) to signify a "lab" environment.
*   **Separators:** Use thin, high-contrast lines (`1x` border) with `gray-100` or `cyan/20`.

### Depth & Shadows (Precision Shadows)
Avoid soft, fuzzy, "warm" shadows. Use tight, crisp shadows:
*   **Shadow Precision:** `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
*   **Shadow Precision-LG:** `0 4px 6px -1px rgba(0, 0, 0, 0.1)`

---

## 4. Interaction & Motion
Motion should feel "robotic" yet smooth—predictable and high-performance.

*   **Transitions:** Standard duration is `200ms` or `300ms` using `cubic-bezier(0.33, 1, 0.68, 1)`.
*   **Micro-Animations:** Use "Pulse" or "Wave" effects for loading or active states (e.g., Pixel Wave Loader).
*   **Hover States:** Buttons should shift background or border color transformatively without changing size significantly to avoid layout shift.

---

## 5. Voice & Tone
*   **Professional:** Address the user as an enthusiast who values quality.
*   **Direct:** Keep copy concise. Use active verbs ("Brew," "Order," "Join").
*   **No Fluff:** Avoid generic emoji usage or overly casual "hey there!" language.

---

## 6. Prohibited Elements (The "Purge" List)
*   ❌ **No Brown/Cream:** These represent old, generic coffee shop tropes.
*   ❌ **No Warm Gold/Orange:** Replaced by Precision Cyan.
*   ❌ **No Serif Fonts:** Keep it strictly Sans/Mono for the tech aesthetic.
*   ❌ **No Soft/Warm Shadows:** Keep depth crisp and technical.
