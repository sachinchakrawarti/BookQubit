import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Needed for ES modules (__dirname replacement)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

export default app;
