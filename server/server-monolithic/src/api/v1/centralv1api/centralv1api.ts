import express from "express";
import { healthV1Api } from "../healthv1api/healthv1api.js";

type Request = express.Request;
type Response = express.Response;

const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
  res.json({
    name: "BookQubit API",
    version: "v1",
    status: "running"
  });
});

router.get("/health", healthV1Api);

export default router;
