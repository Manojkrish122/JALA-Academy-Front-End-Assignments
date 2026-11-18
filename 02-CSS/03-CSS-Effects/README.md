# CSS Effects Assignment

## Overview
This module demonstrates visual effects including box shadows, text shadows, CSS animations (`@keyframes`), pagination types, position coordinates (`static`, `relative`, `absolute`, `fixed`, `sticky`), overflow scrolling, and image opacity transitions.

## PDF Assignment Requirements & Implementation

### 1. Shadow Effects & Hover
- Implemented using `box-shadow: 0 4px 12px rgba(...)` and `text-shadow`.
- Hover interactions elevate the cards dynamically with `transform: translateY(-8px)` and deeper multi-layered shadows.

### 2. CSS Animations & Pagination Varieties
- **Keyframe Animations**: Configured with `animation-name`, `animation-duration`, `animation-iteration-count`, `animation-delay`, and `animation-timing-function`.
  - Continuous pulsing beacon (`animation-iteration-count: infinite`).
  - Cubic-bezier sliding headline (`animation-delay: 0.3s; animation-fill-mode: forwards`).
- **Pagination Patterns**:
  - Hoverable pagination with individual spaced pills (`.pagination-spaced`).
  - Unified continuous bordered pagination without spacing (`.pagination-continuous`).

### 3. CSS Positions
- `position: static`: Normal layout order; offsets ignored.
- `position: relative`: Shifted relative to its normal position without removing it from flow. Serves as reference context for absolute descendants.
- `position: absolute`: Removed from document flow and placed relative to its closest positioned parent.
- `position: fixed`: Pinned relative to the browser window (floating chat action button).
- `position: sticky`: Pinned to the top of its scrolling container once reached.

### 4. Handling Overflow with Scroll
- `overflow-y: scroll`: Forces a vertical scrollbar for overflowing content.
- `overflow-x: auto`: Displays a horizontal scrollbar dynamically when width exceeds container boundary.

### 5. Image Opacity
- Initial `opacity: 0.45;` smoothly transitioning to `opacity: 1.0;` on mouse hover (`transition: opacity 0.4s ease;`).

---

## Interview Questions & "Things to Know"

### Q1: Detailed breakdown of Position properties?
| Property | Normal Flow? | Offsets (`top`, `left`, etc.) | Positioned Relative To |
| :--- | :--- | :--- | :--- |
| `static` | Yes | Ignored | Normal layout flow |
| `relative` | Yes | Active | Its own normal position in flow |
| `absolute` | No | Active | Nearest ancestor with non-static position |
| `fixed` | No | Active | Viewport window |
| `sticky` | Yes (until threshold) | Active | Parent container + viewport scroll position |

### Q2: What is the CSS Box Model?
Every element rendered by CSS is treated as a rectangular box:
1. **Content**: Text, images, or media.
2. **Padding**: Transparent space clearing the area around content (inside the border).
3. **Border**: Outline wrapping around the padding and content.
4. **Margin**: Transparent space clearing the area outside the border.

- `box-sizing: content-box` (Default): `width = content width`. (Padding and border add extra width onto total size).
- `box-sizing: border-box` (Modern standard): `width = content + padding + border`. Makes layout calculations intuitive and prevents unexpected overflow bugs.

