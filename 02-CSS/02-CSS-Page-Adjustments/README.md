# CSS Page Adjustments Assignment

## Overview
This module demonstrates CSS table styling with hover interaction, element visibility vs display rules, smooth scrolling bookmarks, the box-model margin vs padding distinction, and multi-image background composition.

## PDF Assignment Requirements & Implementation

### 1. Table Hover Page Color Shift
- A table configured with solid black borders (`border: 3px solid #000000;`).
- Hovering over the table triggers a subtle, smooth background color transition across the entire page body (`transition: background-color 0.5s ease;`).

### 2. Visibility vs Display Properties
- `visibility: hidden`: Keeps the element invisible, but **retains the exact layout space** in the document flow.
- `visibility: visible`: Default element rendering.
- `visibility: collapse`: Specifically hides table rows/columns without altering table layout sizing.
- `display: none`: Completely removes the element from rendering flow; occupies **0 pixels** of space.
- `display: inline`: Renders within line boxes without starting a new line.
- `display: block`: Renders as a full-width block box starting on a fresh line.
- `display: contents`: Causes an element's children to appear as if they were direct children of the element's parent.
- `display: list-item`: Renders as a block with an associated marker bullet.

### 3. Smooth Scrolling Top & Bottom Links
- Configured via `html { scroll-behavior: smooth; }`.
- Includes anchors jumping to `#bottomLandmark` and back to `#topLandmark`.

### 4. Padding vs Margin Box-Model
- Visually diagrams that **Margin** is external spacing outside the border, while **Padding** is internal spacing between the border and the content box.

### 5. Multiple Background Images
- Uses comma-separated values in `background-image`, `background-position`, and `background-size` to layer multiple graphical sources simultaneously.

---

## Interview Questions & "Things to Know"

### Q1: Difference between `visibility: hidden` and `display: none`?
| Feature | `visibility: hidden` | `display: none` |
| :--- | :--- | :--- |
| **Visibility** | Invisible | Invisible |
| **Space in DOM Layout** | **Preserved** (takes up width & height) | **Removed** (occupies 0px space) |
| **DOM Tree Presence** | Yes | Yes |
| **Event Triggers** | Cannot be clicked | Cannot be clicked |
| **Screen Readers** | Usually skipped | Completely ignored |

### Q2: Difference between inline and block-level elements?
- **Block-level**: Starts on a new line, takes 100% of parent width, accepts explicit `width`, `height`, and vertical `margin`/`padding` (e.g. `<div>`, `<p>`, `<h1>`).
- **Inline**: Flows along horizontal text flow, occupies only the content width, ignores `height` and top/bottom `margin` (e.g. `<span>`, `<a>`, `<strong>`).

### Q3: What are selectors?
Patterns used to select and target HTML elements for styling. Key types include:
1. **Type Selector**: `p`, `h1`
2. **Class Selector**: `.card`, `.btn`
3. **ID Selector**: `#topLandmark`
4. **Attribute Selector**: `input[type="email"]`
5. **Pseudo-Class Selector**: `:hover`, `:focus`, `:nth-child(2)`
6. **Combinators**: Descendant (`div p`), Child (`ul > li`), Adjacent Sibling (`h2 + p`), General Sibling (`h2 ~ p`).

### Q4: Which property sets the line style for the outline?
The CSS property is **`outline-style`** (values include: `none`, `solid`, `dashed`, `dotted`, `double`, `groove`, `ridge`, `inset`, `outset`).
Unlike `border`, `outline` is drawn outside the element and does not take up layout space.

