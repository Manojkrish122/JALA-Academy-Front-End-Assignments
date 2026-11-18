# CSS Compatibility & Responsive Layouts

## Overview
This module demonstrates CSS layout compatibility, including strict `table-layout: fixed` vs `auto`, custom `list-style-type` variations, modern CSS Grid layouts, full-width hero image overlays, and viewport-adaptive media queries for responsive images and videos.

## PDF Assignment Requirements & Implementation

### 1. Table-Layout: Fixed vs Auto
- `table-layout: auto`: Column widths are driven by the widest unbreakable content within any cell, often ignoring user-specified CSS percentages.
- `table-layout: fixed`: Table columns adhere strictly to predefined widths or percentage distributions, speeding up browser rendering and allowing text truncation (`text-overflow: ellipsis`).

### 2. Customizing List-Style-Type
Implemented multiple list bullets:
- `square`
- `circle`
- `upper-roman`
- `lower-alpha`

### 3. CSS Grid
- Utilizes `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))` to deliver fluid multi-column cards that re-flow naturally across all screen resolutions without hardcoded breakpoint triggers.

### 4. Hero Image
- A full-width banner combining background image, dual-tone gradient overlay (`rgba(...)`), high-contrast typography, and an interactive call-to-action button.

### 5. Viewport, Media Queries & Responsive Media
- Meta viewport tag configured in `<head>`: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.
- Responsive images using `max-width: 100%; height: auto;`.
- Responsive 16:9 aspect ratio video wrapper using the intrinsic padding technique (`padding-bottom: 56.25%`).

---

## Interview Questions & "Things to Know"

### Q1: Understand Table Structure?
A complete semantic HTML table is organized hierarchically:
- `<table>`: Root tabular data container.
- `<caption>`: Explanatory title placed at the top of the table.
- `<thead>`: Encloses column headers (`<th>`).
- `<tbody>`: Contains main data rows (`<tr>` and `<td>`).
- `<tfoot>`: Encloses calculation summaries, totals, or notes.
- `<colgroup>` & `<col>`: Applies formatting and widths across entire columns uniformly.

### Q2: Explain Cell Padding and Cell Spacing?
- **Cell Padding**: The internal cushion between the cell border and the textual/image content inside the cell. Controlled via CSS `padding: 8px 12px;` on `<td>` and `<th>`.
- **Cell Spacing**: The external clearance gap separating adjacent cells from one another. Controlled in CSS via `border-spacing: 4px;` on the `<table>` element, or collapsed completely using `border-collapse: collapse;`.

### Q3: What are Form Attributes?
1. `action`: The URL endpoint to which submitted data will be transmitted.
2. `method`: HTTP transfer protocol: `GET` (appends data to query string, visible in URL) vs `POST` (transmits in request payload body, secure for credentials/mutations).
3. `enctype`: MIME encoding format (e.g. `multipart/form-data` for file uploads).
4. `target`: Determines where the server response is displayed (`_blank`, `_self`, or iframe name).
5. `autocomplete`: Toggles browser suggestion history (`on` / `off`).
6. `novalidate`: Bypasses built-in browser input validation rules.

