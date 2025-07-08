# Node.js + TypeScript + ESLint + Prettier + Swagger API Boilerplate

A simple boilerplate project to kickstart your backend development using:

- **Node.js**
- **TypeScript**
- **Express**
- **ESLint**
- **Prettier**
- **Swagger (OpenAPI)**

---

## 🚀 Getting Started

### 1. Clone and Install Dependencies

```bash
npm install
```

### 2. Project Structure

```bash
my-node-ts-app/
├── src/
│ ├── index.ts # Entry point
│ └── routes/
│ └── example.ts # Example Swagger route
├── dist/ # Compiled JavaScript files
├── .eslintrc.json # ESLint config
├── .prettierrc # Prettier config
├── tsconfig.json # TypeScript config
├── package.json
└── README.md
```

### 3. Scripts

| Command          | Description                          |
| ---------------- | ------------------------------------ |
| `npm run dev`    | Run the app using `ts-node`          |
| `npm run build`  | Compile TypeScript to JavaScript     |
| `npm start`      | Run compiled JS from `dist/index.js` |
| `npm run lint`   | Lint all `.ts` files                 |
| `npm run format` | Format code using Prettier           |

### 4. TypeScript

- Typescript is configured via `tsconfig.json` :
  - source file : `src/`
  - output dir : `dist/`
- To compile :

```bash
npm run build
```

### 5. ESLint + Prettier

- Lint and Format Your code :

```bash
npm run lint
npm run format
```

configuration :

- `eslintrc.json`
- `prettierrc`
- ignore : `node_modules`, `dist`

### 6. Swagger API Docs

- Available at: `http://localhost:3000/api-docs`

Example route (`src/routes/example.ts`)

```ts
/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Returns a greeting
 *     responses:
 *       200:
 *         description: A successful response
 */
```

### 7. Start the Server

- Development mode :

```
npm run dev
```

- Production:

```
npm run build
npm start
```
