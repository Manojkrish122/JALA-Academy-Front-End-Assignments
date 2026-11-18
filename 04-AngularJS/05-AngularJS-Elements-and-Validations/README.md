# AngularJS Elements, Validations, Animations & Routing Assignment

## Overview
This module demonstrates form controls, native and custom AngularJS validation pipelines, CSS3 transition animations with `ngAnimate`, and Single Page Application (SPA) routing with `ngRoute` and `$routeProvider`.

## PDF Assignment Requirements & Implementation

### 1. Form Elements
- Textbox (`input[type="text"]`, `input[type="email"]`)
- Selectbox (`select` paired with `ng-options`)
- Radio buttons (`input[type="radio"]`)
- Checkbox (`input[type="checkbox"]`)

### 2. Form Validations
- Native constraints: `required`, `type="email"`.
- Custom Directive Validator: `custom-phone-validator` enforcing a valid 10-digit Indian mobile number format via `$validators` pipeline.
- Visual state classes: `.ng-invalid`, `.ng-valid`, `.ng-touched`, `.ng-pristine`, `.ng-dirty`.
- Dynamic button disabling: `ng-disabled="formName.$invalid"`.

### 3. Animations on `ng-show` and `ng-hide`
- Integrates `angular-animate.js`.
- Implements CSS3 keyframe/transition classes (`.ng-hide-add`, `.ng-hide-remove`, `.ng-hide`) for smooth collapsible panels without jerky layout clipping.

### 4. SPA Client Routing (`ngRoute`)
- Injected module `ngRoute`.
- Routes configured using `$routeProvider.when('/home', ...)`, `.when('/about', ...)`, `.when('/contact', ...)`.
- Fallback configured via `.otherwise({ redirectTo: '/home' })`.
- Rendered into `<div ng-view></div>`.

---

## Interview Questions & "Things to Know"

### Q1: How do Animations work in AngularJS?
AngularJS animates views and directives through the `ngAnimate` module. Rather than manipulating styles directly in JavaScript, `ngAnimate` inspects the DOM and dynamically attaches semantic transition classes (e.g., `.ng-hide-add`, `.ng-hide-add-active`, `.ng-enter`, `.ng-leave`). Web developers write standard CSS transitions against those classes.

### Q2: What is the purpose of `$routeProvider` and `otherwise()`?
- `$routeProvider` maps URL hash patterns (`/home`, `/about`) to corresponding HTML view templates and dedicated controllers in a Single Page Application (SPA).
- `otherwise()` acts as a default/catch-all fallback route. If a user navigates to an invalid, broken, or unmapped URL, `otherwise({ redirectTo: '/home' })` safely redirects the browser back to a known entry view.

