# JavaScript Events, Validation & Cookies Assignment

## Overview
This module demonstrates DOM event binding with `addEventListener`, form submission validation, comprehensive browser console debugging methods, complete cookie lifecycle management (`setCookie`, `getCookie`, `checkCookie`), and JSON object manipulation using dot notation.

## PDF Assignment Requirements & Implementation

### 1. Button Event Listener for Date & Time
- Uses `element.addEventListener('click', handler)` to decouple HTML markup from JavaScript execution.
- Generates locale-formatted date, time, and ISO timestamp using the native `Date` object.

### 2. Form Validation: Non-Empty Field Check
- Intercepts form submission via `event.preventDefault()`.
- Validates that the input value is non-empty (`.trim().length > 0`), displaying immediate visual feedback (success vs error message) without page reloading.

### 3. Debugging with `console.log()`
Demonstrates diagnostic capabilities in DevTools:
- `console.log()` for status updates and object states.
- `console.warn()` for non-fatal deprecation notices.
- `console.error()` for exception and error reporting.
- `console.table()` for visualizing array data in tabular rows and columns.
- `console.time()` / `console.timeEnd()` for performance benchmarking.

### 4. Cookie Management (Set, Get, Check)
- `setCookie(cname, cvalue, exdays)`: Encodes values, calculates expiration timestamps, and writes to `document.cookie`.
- `getCookie(cname)`: Decodes and parses `document.cookie` semicolon-delimited key-value pairs.
- `checkCookie(cname)`: Determines whether a specific cookie exists and returns its value.
- Includes expiration deletion capability (`exdays: -1`).

### 5. JSON Object Creation & Dot Notation Access
- Parses JSON data using `JSON.parse()`.
- Accesses nested properties directly via dot notation (`parsedData.candidate.education.degree`).

---

## Interview Questions & "Things to Know"

### Q1: Modern Debugging Techniques in JavaScript?
1. **Console APIs**: `console.log()`, `console.error()`, `console.warn()`, `console.table()`, `console.trace()`.
2. **`debugger;` Statement**: Programmatic breakpoint that halts execution when browser DevTools are open.
3. **Browser DevTools Breakpoints**:
   - Line-of-code breakpoints
   - Conditional breakpoints (only pause when condition `x > 5` evaluates to true)
   - DOM mutation breakpoints (pause on child list changes or attribute mutations)
   - XHR / Fetch network breakpoints
   - Event listener breakpoints (pause on `click`, `keydown`, etc.)
4. **Call Stack & Watch Expressions**: Tracking the execution path and variable values step-by-step (`Step Over`, `Step Into`, `Step Out`).

### Q2: What are Cookies and How Do They Compare to Web Storage?
| Feature | Cookies (`document.cookie`) | LocalStorage | SessionStorage |
| :--- | :--- | :--- | :--- |
| **Capacity** | ~4 KB | ~5 - 10 MB | ~5 MB |
| **Transmitted to Server** | Yes (with every HTTP request) | No (client-side only) | No (client-side only) |
| **Expiration** | Configurable (`expires` / `max-age`) | Persistent until explicitly cleared | Cleared when browser tab closes |
| **Security Flags** | `HttpOnly`, `Secure`, `SameSite` | None (accessible via JavaScript) | None (accessible via JavaScript) |
| **Primary Use** | Session identifiers, authentication tokens | User preferences, theme, cached application data | Single-session workflow data |

