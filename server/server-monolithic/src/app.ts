import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import centralV1Api from "./api/v1/centralv1api/centralv1api.js";
import centralV2Api from "./api/v2/centralv2api/centralv2api.js";   


const app = express();

// ESM dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

// Static site
app.use(express.static(path.join(__dirname, "public")));

// Server health
app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "bookqubit-server",
    timestamp: new Date().toISOString()
  });
});

// API v1 (central router)
app.use("/api/v1", centralV1Api);

// API v2 (central router)
app.use("/api/v2", centralV1Api);

export default app;
