# CSS Basics Assignment

## Overview
This module demonstrates the fundamentals of CSS stylesheets, including CSS syntax comments, background styling with fixed attachments, multi-pattern borders, fixed vs fluid dimensional units (px vs %), and typography customization.

## PDF Assignment Requirements & Implementation

### 1. CSS Comments
Demonstrated throughout `style.css` using `/* ... */` syntax blocks to annotate sections clearly.

### 2. Background Color & Fixed Background Image
- Implemented with `background-color`, `background-image: url(...)`, `background-attachment: fixed`, and `background-size: cover`.
- Creates a fixed parallax viewport where the image stays stationary relative to the browser viewport as the page scrolls.

### 3. Four Border Styles with Custom Patterns
Implemented on a single element showcasing four unique sides:
- `border-top: 6px solid #e63946;` (Solid Red)
- `border-right: 8px dashed #2a9d8f;` (Dashed Teal)
- `border-bottom: 10px double #e76f51;` (Double Coral)
- `border-left: 7px dotted #1d3557;` (Dotted Navy)

### 4. Element Dimensions (Pixels vs Percentages)
- Fixed dimensions using absolute units (`px`) provide deterministic size regardless of parent width.
- Relative dimensions using percentage (`%`) adapt dynamically to parent boundaries.

### 5. Typography Formatting
- `font-family`: Serif (`Georgia`), Sans-serif (`Segoe UI`, `Arial`), Monospace (`Courier New`).
- `font-style`: `normal`, `italic`, `oblique`.
- `font-size`: Configured using `rem`, `px`, and relative scales.
- `text-align`: `left`, `center`, `right`, and `justify`.
- `color`: Hexadecimal (`#e63946`, `#2a9d8f`) and functional colors.

---

## Interview Questions & "Things to Know"

### Q1: Importance of HTML DOCTYPE?
- **DOCTYPE** stands for Document Type Declaration: `<!DOCTYPE html>`.
- It instructs the web browser which version of HTML the page is written in.
- In modern HTML5, it ensures the browser renders the page in **Standards Mode** (compliant with W3C/WHATWG specifications) rather than falling into legacy **Quirks Mode** (which simulates bug-ridden behaviors of 1990s Netscape/IE).

### Q2: Syntax to link an external style sheet?
```html
<link rel="stylesheet" type="text/css" href="style.css">
```
- `<link>` tag resides in the `<head>` section.
- `rel="stylesheet"` declares the relationship of the linked resource.
- `href="style.css"` specifies the path to the stylesheet.

