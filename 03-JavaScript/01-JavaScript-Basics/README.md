# JavaScript Basics Assignment

## Overview
This module demonstrates core JavaScript language mechanisms, including comment syntax, in-place array manipulation, `for...in` object property iteration, dual object property access techniques, variable hoisting semantics, and strict mode error isolation.

## PDF Assignment Requirements & Implementation

### 1. Comments in JavaScript
- Single-line comments: `// Explanation here`
- Multi-line comments: `/* Detailed block comment */`

### 2. Array Sorting in Descending Order
- Array of fruit strings: `["Banana", "Orange", "Apple", "Mango", "Pineapple", "Grapes"]`.
- Click-triggered descending sort using `.sort().reverse()`.

### 3. FOR/IN Loop
- Iterates through enumerable keys of an object:
```javascript
for (let key in object) {
    if (object.hasOwnProperty(key)) {
        // accesses object[key]
    }
}
```

### 4. Object Property Access: Two Methods
Given: `const person = { firstname: "Priya", lastname: "Venkatesh" };`
1. **Dot Notation**: `person.firstname` (clean, standard identifier).
2. **Bracket Notation**: `person["firstname"]` (permits dynamic keys, special characters, or variables: `person[variableKey]`).

### 5. Variable Hoisting
Demonstrates:
```javascript
hoistedScore = 95;  // Assignment first
var hoistedScore;   // Declaration hoisted to top of scope by JS Engine
```
Explains the compilation/creation phase vs execution phase and compares `var` with ES6 `let`/`const` Temporal Dead Zone (TDZ).

### 6. Strict Mode (`"use strict";`)
Demonstrates that assigning a value to an undeclared variable (e.g. `undeclaredVar = 500`) throws a `ReferenceError` instead of polluting the global `window` scope.

---

## Interview Questions & "Things to Know"

### Q1: How JavaScript Differs from Java?
1. **Language Type**: JavaScript is an interpreted/JIT scripting language; Java is a statically typed, compiled object-oriented language.
2. **Typing**: JavaScript is dynamic (variables can change type at runtime); Java is strictly static (`int x = 10;`).
3. **Execution Environment**: JavaScript runs natively in web browser engines (V8, JavaScriptCore) and Node.js; Java runs on the Java Virtual Machine (JVM).
4. **Inheritance Model**: JavaScript relies on prototypical inheritance (objects inherit directly from other objects); Java uses classical class-based inheritance.
5. **Concurrency**: JavaScript operates on a single-threaded Event Loop with non-blocking I/O; Java uses multi-threading with thread pools and synchronization primitives.

