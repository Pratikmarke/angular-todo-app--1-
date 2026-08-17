# 📝 Angular Todo App

A small, clean task manager built with **Angular** — practicing standalone components, signals, and parent-child communication.

![Angular](https://img.shields.io/badge/Angular-17-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?logo=typescript&logoColor=white)
![Status](https://img.shields.io/badge/status-active-brightgreen)

---

## ✨ Features

- ➕ Add new tasks
- ✅ Mark tasks as complete
- 🗑️ Remove tasks
- 🔢 Live count of remaining tasks
- 📱 Clean, responsive UI

---

## 🛠️ Built With

- **Angular 17** — standalone components (no NgModule boilerplate)
- **TypeScript**
- **Angular Signals** — for reactive state management
- **RxJS**

---

## 🚀 Getting Started

### Option A — Run online (no install)
Open this project in [StackBlitz](https://stackblitz.com) using the Angular template, and paste in the project files.

### Option B — Run locally
```bash
npm install
npm start
```
Then open [http://localhost:4200](http://localhost:4200) in your browser.

---

## 🧠 What This Project Demonstrates

| Concept | Where |
|---|---|
| Component architecture | `AppComponent` (parent) + `TodoItemComponent` (child) |
| Data binding | `{{ }}`, `[property]`, `(event)`, `[(ngModel)]` |
| Directives | `*ngIf`, `*ngFor` |
| Parent → child communication | `@Input()` |
| Child → parent communication | `@Output()` + `EventEmitter` |
| Reactive state | `signal()` in `TodoService` |
| Dependency injection | `TodoService` injected into `AppComponent` |

---

## 📂 Project Structure

```
src/
├── app/
│   ├── todo-item/
│   │   ├── todo-item.component.ts
│   │   ├── todo-item.component.html
│   │   └── todo-item.component.css
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.css
│   └── todo.service.ts
├── main.ts
└── styles.css
```

---

## 📌 Notes

This project was built as a hands-on way to learn Angular fundamentals — component architecture, data binding, and state management — before applying them in real internship work.

---

## 👤 Author

**Pratik Marke**
[LinkedIn](https://linkedin.com/in/Pratik-marke)
