# AngularJS Basics Assignment

## Overview
This module demonstrates the core architecture of AngularJS, including expression evaluation (`{{ }}`), dynamic styling via `ng-style`, modularization with external controllers and directives, directives (`ng-model`, `ng-init`, `ng-repeat`, `ng-include`), and scope hierarchies (`$scope` vs `$rootScope`).

## PDF Assignment Requirements & Implementation

### 1. Expressions & Background Color Text Box
- Uses `{{ expression }}` for template evaluations.
- Dynamically updates text box background color using `ng-model="boxBgColor"` and `ng-style="{'background-color': boxBgColor}"`.

### 2. External Module, Directive, and Controller
Separated cleanly across three script files:
- `app.js`: Declares `angular.module('basicsApp', [])` and bootstraps global data on `$rootScope`.
- `myController.js`: Defines `basicsMainCtrl`, injecting `$scope` and `$rootScope`.
- `myDirective.js`: Defines custom directive `<custom-course-banner>` demonstrating reusable template components.

### 3. Directives Suite
- `ng-model`: Two-way data binding syncing inputs and model.
- `ng-init`: Initialized array collection in the view.
- `ng-repeat`: Iterates over collections rendering dynamic lists with `$index`.
- `ng-include`: Dynamically fetches and embeds external sub-templates (`external-header.html`).

### 4. Scope Hierarchy (`$scope` vs `$rootScope`)
- `$rootScope`: Root parent object shared across the entire AngularJS application instance.
- `$scope`: Child execution context tied exclusively to a specific controller and its DOM subtree.

---

## Interview Questions & "Things to Know"

### Q1: What are the primary benefits of AngularJS?
1. **Two-Way Data Binding**: Eliminates manual DOM querying and manipulation; whenever model data changes, view updates automatically, and vice-versa.
2. **MVC Architecture**: Enforces clean separation between presentation (HTML/CSS), data model (Plain JS objects), and presentation logic (Controllers).
3. **Directives**: Empowers developers to invent new HTML domain-specific tags and attributes for reusable UI behaviors.
4. **Dependency Injection**: Services and factories are injected on-demand, enabling unit test isolation and test mocking.
5. **POJO Data Models**: AngularJS models are Plain Old JavaScript Objects (no need for getter/setter wrapper classes).

