# 📦 Project Dependencies – BookQubit 

Path: `dev/dependencies/dependencies.md`

This document tracks **all libraries, frameworks, tools, and VS Code extensions** used in the BookQubit development environment.

---

## 🧠 Purpose

* Single source of truth for project dependencies
* Easy onboarding for new contributors
* Quick audits & cleanup

---

## 🌐 Frontend (Web)

### Core Libraries

* **react** `^19.2.0` – Core UI library
* **react-dom** `^19.2.0` – React DOM renderer
* **react-router-dom** `^7.13.0` – Client-side routing

### Styling / UI

* **tailwindcss** `^4.1.18` – Utility-first CSS framework
* **@tailwindcss/vite** `^4.1.18` – Tailwind integration for Vite
* **react-icons** `^5.5.0` – Icon library
* **framer-motion** `^12.29.0` – Animations & motion

### Build / Tooling

* **vite** `^7.2.4` – Frontend dev server & bundler
* **@vitejs/plugin-react** `^5.1.1` – React support for Vite

---

## 🛠️ Dev Dependencies (Frontend)

### Language & Types

* **typescript** `~5.9.3` – Static typing
* **@types/react** `^19.2.5`
* **@types/react-dom** `^19.2.3`
* **@types/node** `^24.10.1`

### Linting / Code Quality

* **eslint** `^9.39.1`
* **@eslint/js** `^9.39.1`
* **typescript-eslint** `^8.46.4`
* **eslint-plugin-react-hooks** `^7.0.1`
* **eslint-plugin-react-refresh** `^0.4.24`
* **globals** `^16.5.0`

---

## 📱 Frontend (React Native / Expo)

* **Expo**
* **React Navigation**
* **Vector Icons**

---

## 🖥️ Backend

### Runtime

* **Node.js**
* **Express.js** – Server framework

### Utilities

* **dotenv** – Environment variables
* **cors** – CORS handling

---

## 🗄️ Database

* *(MongoDB / PostgreSQL / etc)*
* ODM/ORM: *(Mongoose / Prisma / Sequelize)*

---

## 🔧 Dev Dependencies

### Tooling

* **Vite / Webpack**
* **ESLint**
* **Prettier**
* **Nodemon**

---

## 🧪 Testing

* **Jest**
* **React Testing Library**

---

## 🧩 VS Code Extensions (Recommended)

### Core

* ESLint
* Prettier – Code formatter
* Tailwind CSS IntelliSense

### Productivity

* Dependency Graph
* npm Intellisense
* GitLens
* Error Lens

---

## 🔐 Security / Analysis

* depcheck
* npm audit

---

## 📌 Notes

* Update this file whenever a dependency is added or removed
* Keep versions in sync with `package.json`

---

_Last updated: _
