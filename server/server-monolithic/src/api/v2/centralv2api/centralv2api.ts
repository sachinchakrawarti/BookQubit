import express from "express";
import { healthV1Api } from "../healthv2api/healthv2api.js";

type Request = express.Request;
type Response = express.Response;

const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
  res.json({
    name: "BookQubit API",
    version: "v2",
    status: "running"
  });
});

router.get("/health", healthV1Api);

export default router;
