# Server Monolithic – Dependencies

Path:
`D:/Projects/chakrawarti-empire/bookqubit/dev/dependencies/server-monolithic.md`

This document describes all runtime and development dependencies used in the **BookQubit server-monolithic backend** (Express + TypeScript + JWT + Swagger).

---

## Runtime Dependencies (`dependencies`)

### express

* **Version:** ^5.2.1
* **Purpose:** Core HTTP server framework
* **Why:** Fast, minimal, and stable for REST APIs

---

### cors

* **Version:** ^2.8.6
* **Purpose:** Enable Cross-Origin Resource Sharing
* **Why:** Required for frontend apps (web/mobile) to call the API

---

### dotenv

* **Version:** ^17.2.3
* **Purpose:** Load environment variables from `.env`
* **Why:** Secure configuration (JWT secret, ports, DB URLs)

---

### jsonwebtoken

* **Version:** ^9.0.3
* **Purpose:** JWT creation and verification
* **Why:** Stateless authentication for users and admins

---

### bcryptjs

* **Version:** ^3.0.3
* **Purpose:** Password hashing
* **Why:** Secure password storage (no plain text)

---

### swagger-jsdoc

* **Version:** ^6.2.8
* **Purpose:** Generate OpenAPI specs from JSDoc comments
* **Why:** Auto API documentation from route files

---

### swagger-ui-express

* **Version:** ^5.0.1
* **Purpose:** Serve Swagger UI
* **Why:** Interactive API documentation at `/api/docs`

---

## Development Dependencies (`devDependencies`)

### typescript

* **Version:** ^5.9.3
* **Purpose:** Type-safe JavaScript
* **Why:** Better maintainability and fewer runtime bugs

---

### ts-node-dev

* **Version:** ^2.0.0
* **Purpose:** Run TS directly in development
* **Why:** Fast reload on file changes (`npm run dev`)

---

### @types/node

* **Version:** ^25.0.10
* **Purpose:** Node.js type definitions
* **Why:** Required for `process`, `Buffer`, etc.

---

### @types/express

* **Version:** ^5.0.6
* **Purpose:** Express TypeScript types
* **Why:** Proper typing for `req`, `res`, `next`

---

### @types/jsonwebtoken

* **Version:** ^9.0.10
* **Purpose:** JWT TypeScript support
* **Why:** Typed JWT payloads and verification

---

### cross-env

* **Version:** ^7.0.3
* **Purpose:** Cross-platform environment variables
* **Why:** Ensures `NODE_ENV` works on Windows, Linux, macOS

---

## NPM Scripts

```json
{
  "dev": "cross-env NODE_ENV=development ts-node-dev --respawn --transpile-only src/server.ts",
  "build": "tsc",
  "start": "cross-env NODE_ENV=production node dist/server.js"
}
```

### Script Usage

* **dev** → Local development with hot reload
* **build** → Compile TypeScript to `/dist`
* **start** → Run production build

---

## Environment Variables

```env
PORT=5000
JWT_SECRET=bookqubit_super_secret
NODE_ENV=development
```

---

## Notes

* This setup is **monolithic**, not microservices
* Designed for **BookQubit** scale (auth, books, audiobooks, users)
* Easy to extend with:

  * Database (MongoDB / PostgreSQL)
  * Prisma / Mongoose
  * Docker & CI/CD

---

Maintained by **BookQubit / Chakrawarti Empire** 🚀
