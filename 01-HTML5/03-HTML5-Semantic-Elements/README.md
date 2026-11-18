# HTML5 Semantic Elements

## Overview
This module demonstrates semantic page architecture vs non-semantic markup, and implements all primary HTML5 semantic tags.

## PDF Assignment Requirements & Implementation

### 1. Non-Semantic Elements
- `<div>`: A generic block-level container with no intrinsic semantic meaning.
- `<span>`: A generic inline container used to style or script phrasing text.

### 2. Semantic Elements
- `<form>`: Denotes an interactive section that accepts user inputs to submit.
- `<table>`: Denotes tabular multidimensional data with rows (`<tr>`), headers (`<th>`), and cells (`<td>`).
- `<article>`: Self-contained, independently distributable composition (e.g. blog post, news story, review).

### 3. Complete Suite of HTML5 Tags Implemented
- `<header>`: Introductory content or navigational aid for a page or section.
- `<hgroup>`: Groups a heading with related subheadings or subtitles.
- `<nav>`: Section declaring major navigational links.
- `<section>`: Generic standalone section of a document.
- `<article>`: Independent piece of syndicatable content.
- `<aside>`: Tangentially related content (sidebar, author notes, related links).
- `<figure>`: Self-contained illustration, photo, diagram, or code listing.
- `<figcaption>`: Caption or legend describing parent `<figure>`.
- `<mark>`: Highlighted text indicating relevance.
- `<time>`: Machine-readable representation of a specific date, time, or duration.
- `<footer>`: Footer containing author information, copyright, and closing links.

---

## Interview Questions & "Good to Know"

### Q1: Difference between `span` and `div`?
- **`<div>`**: Block-level element. Starts on a new line, takes full width of parent, accepts custom `width`, `height`, `margin`, and `padding`. Used for structural division.
- **`<span>`**: Inline element. Continues on the same line, takes only the width needed by its contents, ignores top/bottom `margin` and `height`. Used for styling inline text.

### Q2: Difference between HTML4 and HTML5 for structural tags?
| Structural Area | Legacy HTML4 Approach | Modern HTML5 Semantic Standard |
| :--- | :--- | :--- |
| **Header** | `<div id="header">` or `<div class="header">` | `<header>` / `<hgroup>` |
| **Menu / Nav** | `<div id="menu">` / `<div class="nav">` | `<nav>` |
| **Main Content** | `<div id="content">` / `<div class="main">` | `<main>` / `<section>` |
| **Article** | `<div class="post">` / `<div class="article">` | `<article>` |
| **Sidebar** | `<div id="sidebar">` | `<aside>` |
| **Footer** | `<div id="footer">` or `<div class="footer">` | `<footer>` |

**Benefits of HTML5 Semantics**:
1. **Accessibility (A11y)**: Screen readers can jump between landmarks (`<nav>`, `<main>`, `<footer>`).
2. **SEO Optimization**: Search engines easily parse document outlines and index articles appropriately.
3. **Maintainability**: Clean, standardized markup eliminates custom naming confusion across developer teams.

