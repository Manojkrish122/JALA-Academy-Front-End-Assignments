# HTML5 Basics Assignment

## Overview
This module demonstrates the fundamentals of HTML structure, formatting tags, intra-page anchor navigation, and CSS pseudo-classes & pseudo-elements.

## PDF Assignment Requirements & Implementation

### 1. Tag Showcase
- **Document Structure**: `<!DOCTYPE html>`, `<html>`, `<head>`, `<title>`, `<body>`
- **Headings**: `<h1>` through `<h6>` demonstrating heading hierarchy.
- **Content Flow**: `<p>`, `<hr>`, `<blockquote>`, `<ul>`, `<li>`
- **Inline Formatting**: `<b>` and `<strong>`, `<i>` and `<em>`, `<span>`
- **Containers**: Block-level `<div>` and inline `<span>`
- **Media & Forms**: `<img>` with `alt` tag, `<label>` bound to `<input>` via `for` and `id`

### 2. Intra-Page Navigation
- Implemented with anchor links `<a href="#section-id">` targeting distinct page landmarks.
- Includes smooth scrolling behavior (`html { scroll-behavior: smooth; }`) and "Back to Top" links.

### 3. CSS Pseudo-Classes & Pseudo-Elements
- **Pseudo-classes**:
  - `:hover` - transforms buttons on mouse pointer hover.
  - `:active` - visually indents button during mouse press.
  - `:focus` - highlights input borders when keyboard-focused.
  - `:first-child` - highlights the initial item in a list.
  - `:nth-child(even)` - provides alternating zebra striping for list items.
- **Pseudo-elements**:
  - `::first-letter` - creates a decorative drop-cap in paragraph text.
  - `::before` - inserts typographic quotation marks.
  - `::selection` - customizes highlight color for user-selected text.

---

## Interview Questions & "Good to Know"

### Q1: Difference between HTML, HTML5, CSS, and JavaScript?
- **HTML**: HyperText Markup Language — provides the structural skeleton of a web page.
- **HTML5**: The 5th major version of HTML, introducing native audio/video support, canvas, local storage, semantic tags (`<header>`, `<nav>`, `<article>`, `<section>`), and new form input types.
- **CSS**: Cascading Style Sheets — defines the visual presentation, styling, layout, typography, animations, and responsive adaptions.
- **JavaScript**: A client-side interpreted programming language that adds interactivity, state manipulation, asynchronous data fetching (AJAX/Fetch), and business logic to web pages.

### Q2: Difference between `<div>` and `<span>`?
| Feature | `<div>` | `<span>` |
| :--- | :--- | :--- |
| **Element Type** | Block-level element | Inline element |
| **New Line** | Always begins on a new line | Flows within current line text |
| **Width** | Expands to 100% of available parent width | Takes only the width of its content |
| **Dimensions** | Respects `width`, `height`, `margin`, `padding` | Ignores vertical `margin` and `height`/`width` |
| **Primary Use** | Structuring sections and layout blocks | Styling specific text segments or inline icons |

