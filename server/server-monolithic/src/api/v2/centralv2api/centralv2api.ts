import express from "express";
import { healthV2Api } from "../healthv2api/healthv2api.js"; // ✅ must be v2

type Request = express.Request;
type Response = express.Response;

const router = express.Router();

// Root of v2
router.get("/", (_req: Request, res: Response) => {
  res.json({
    name: "BookQubit API",
    version: "v2",
    status: "running"
  });
});

// Health endpoint
router.get("/health", healthV2Api);

export default router;
