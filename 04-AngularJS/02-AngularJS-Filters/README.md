# AngularJS Filters, Services & APIs Assignment

## Overview
This module demonstrates AngularJS built-in filters, custom filter definition, core AngularJS services (`$location`, `$http`, `$timeout`), custom service injection, `$http` response dissection (`.config`, `.data`, `.status`), and global `angular.*` APIs.

## PDF Assignment Requirements & Implementation

### 1. Built-in & Custom Filters
- **Built-in Filters**: `date`, `uppercase`, `lowercase`, `number`, `currency`.
- **Custom Filters**:
  - `reverseText`: Reverses any string input (`input.split('').reverse().join('')`).
  - `titleCase`: Capitalizes the first character of each word.

### 2. Built-in Services & Custom Service
- `$location`: Inspects host, protocol, port, and absolute URLs.
- `$timeout`: Schedules asynchronous code execution in sync with the AngularJS `$digest` loop.
- `CalculationService`: Custom service registered via `app.service()` providing business logic methods.

### 3. $http Methods & Response Properties
- Demonstrates `$http.get()` and `$http.post()` with promises (`.then()`, `.catch()`).
- Unpacks:
  - `response.status`: HTTP response code (200, 201, 404).
  - `response.data`: Server payload parsed as JSON.
  - `response.config`: Configuration object utilized for dispatching the request.

### 4. Angular Global APIs
- `angular.lowercase()` / `angular.uppercase()`
- `angular.isString()`, `angular.isNumber()`, `angular.isDate()`
- `angular.copy()`

---

## Interview Questions & "Things to Know"

### Q1: What is an AngularJS Filter?
A filter formats the output of an expression for display without mutating the underlying model data.
- **Pipe Syntax**: `{{ expression | filterName:parameter1:parameter2 }}`
- **Chaining**: `{{ name | lowercase | reverseText }}`
- **In Controllers**: Injected via `$filter('filterName')(value, args)`

### Q2: What is the AngularJS Global API?
A collection of static utility functions exposed directly on the `angular` window object used for type checking, object cloning, loop iterations, and DOM wrapping without needing external utility libraries.

