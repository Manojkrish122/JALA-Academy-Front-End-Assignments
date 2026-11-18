# AngularJS JSON, Tables & Options Assignment

## Overview
This module demonstrates working with JSON datasets in AngularJS, including table generation, dynamic sorting using the `orderBy` filter, contextual iteration variables (`$index`, `$odd`, `$even`), and a deep comparison between `ng-options` and `ng-repeat` for `<select>` elements.

## PDF Assignment Requirements & Implementation

### 1. JSON Table with Filter Sorting & Context Variables
- Ingests data from `employees.json` via `$http.get()`.
- Implements interactive multi-column sorting using `orderBy:sortColumn:reverseSort`.
- Demonstrates special `ng-repeat` contextual variables:
  - `$index`: The zero-based iterator offset.
  - `$odd`: Evaluates to `true` if current index is odd (used for alternating zebra stripes).
  - `$even`: Evaluates to `true` if current index is even.

### 2. `ng-options` vs `ng-repeat` in `<select>`
| Criteria | `ng-options` | `ng-repeat` on `<option>` |
| :--- | :--- | :--- |
| **Model Type Bound** | Binds to entire **JavaScript Objects** directly | Binds strictly to **String** values |
| **DOM Efficiency** | Highly optimized memory footprint | Creates repetitive DOM nodes for every item |
| **Usage Pattern** | `<select ng-options="item.name for item in list">` | `<option ng-repeat="item in list" value="{{item.val}}">` |
| **Best Practice** | Recommended for dropdowns in AngularJS | Recommended for lists, tables, and card repetitions |

---

## Interview Questions & "Things to Know"

### Q1: What is JSON and what are its key syntax rules?
- **Definition**: JavaScript Object Notation is a lightweight, language-agnostic textual data-interchange standard.
- **Rules**:
  1. Keys must be enclosed in double quotes (e.g., `"name": "Aarav"`).
  2. Single quotes are invalid JSON.
  3. No trailing commas permitted after the last property or array element.
  4. Allowed types: `string`, `number`, `object`, `array`, `boolean`, `null`.
  5. Forbidden types: `function`, `Date` objects, `undefined`.
- **Parsing/Serializing**: `JSON.parse(str)` converts string to object; `JSON.stringify(obj)` serializes object to string.

