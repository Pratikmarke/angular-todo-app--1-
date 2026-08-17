# Angular Todo App

A small task manager built with Angular (standalone components + signals).
Add tasks, mark them complete, and delete them.

## How to run it

**Option A — Online, no install (fastest, do this first):**
1. Go to https://stackblitz.com and choose "Angular" as the template.
2. Delete the default generated files, then create the same folder/file
   structure as this project and paste in each file's content.
3. StackBlitz installs dependencies and runs the app automatically.

**Option B — On your own machine:**
```bash
npm install
npm start
```
Then open http://localhost:4200 in your browser.

## What this project demonstrates

- **Components**: `AppComponent` (parent) and `TodoItemComponent` (child)
- **Data binding**: `{{ }}` interpolation, `[property]` binding, `(event)` binding,
  and two-way binding with `[(ngModel)]`
- **Directives**: `*ngIf`, `*ngFor`
- **Component communication**: `@Input()` (parent → child) and
  `@Output()` + `EventEmitter` (child → parent)
- **Services & dependency injection**: `TodoService` is injected into
  `AppComponent` via the constructor
- **State management**: Angular `signal()` for reactive state
- **Standalone components**: no `NgModule` boilerplate (modern Angular style)

## Talking points for an interview

- "I built a todo app to practice Angular's component model — the app has
  a parent component that owns the list and a child component that renders
  each item."
- "Data flows down to the child via `@Input`, and the child notifies the
  parent of changes (toggle/remove) via `@Output` and `EventEmitter` — that's
  the standard Angular parent-child communication pattern."
- "State lives in a service (`TodoService`) using Angular's `signal()` API,
  so any component that injects the service sees the same reactive data."
- "This mirrors what I already did with Lightning Web Components in my
  Salesforce project — LWC also uses a component + data-binding model, so
  the concepts transferred quickly."
