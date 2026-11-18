# JavaScript Access and Properties Assignment

## Overview
This module demonstrates execution context binding (`this`), explicit function invocation using `call()` and `apply()`, event-driven counter implementations, object property encapsulation using `get` and `set` accessors, and prototype chain inheritance.

## PDF Assignment Requirements & Implementation

### 1. "this" Keyword Disappearing Button
- Configured via inline handler `onclick="this.style.display='none';"` or `addEventListener`.
- Inside the standard event listener function, `this` evaluates to the event target (the clicked button element), immediately setting its CSS `display` to `none`.

### 2. Invoking Functions via `call()` and `apply()`
- **`Function.prototype.call(thisArg, arg1, arg2, ...)`**: Invokes the function binding `this` to `thisArg` with arguments passed individually as a comma-separated list.
- **`Function.prototype.apply(thisArg, [argsArray])`**: Invokes the function binding `this` to `thisArg` with arguments passed together inside a single array.
- **Mnemonic**: **C**all takes **C**ommas; **A**pply takes an **A**rray.

### 3. Incremental Counter
- Tracks state in a closure/global variable, updating the DOM textContent on every click trigger.

### 4. Counter with Getter & Setter Accessors
- Implements `get count()` to format or compute outputs on read.
- Implements `set count(val)` to validate types and enforce constraints (e.g. non-negative numeric boundaries) prior to mutating the internal property `_internalValue`.

### 5. Prototype Extensions
- Extends the `Person` constructor function via `Person.prototype.gender` and `Person.prototype.getFullName()`.
- Proves prototypical inheritance: properties attached to `Constructor.prototype` are shared across all instantiations without duplicative memory allocations.

---

## Interview Questions & "Things to Know"

### Q1: Reserved Keywords in JavaScript?
Reserved words have predefined syntactic roles in JavaScript and cannot be used as variable identifiers:
- Control Flow: `if`, `else`, `switch`, `case`, `default`, `break`, `continue`, `return`
- Loops: `for`, `while`, `do`, `in`, `of`
- Declarations: `var`, `let`, `const`, `function`, `class`, `import`, `export`
- Context & Object: `this`, `new`, `super`, `instanceof`, `typeof`, `delete`
- Async & Errors: `try`, `catch`, `finally`, `throw`, `async`, `await`

### Q2: Core Built-in Global Objects & Utility Functions?
- **Global Functions**: `parseInt()`, `parseFloat()`, `isNaN()`, `isFinite()`, `encodeURIComponent()`, `decodeURIComponent()`.
- **Standard Objects**:
  - `Object`: `keys()`, `values()`, `entries()`, `assign()`, `freeze()`
  - `Array`: `map()`, `filter()`, `reduce()`, `forEach()`, `find()`
  - `String`: `trim()`, `split()`, `slice()`, `replace()`, `includes()`
  - `Math`: `random()`, `floor()`, `ceil()`, `round()`, `max()`, `min()`
  - `JSON`: `parse()`, `stringify()`
  - `Date`: `now()`, `toISOString()`, `getFullYear()`

