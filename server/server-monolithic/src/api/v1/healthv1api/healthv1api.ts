import express from "express";

type Request = express.Request;
type Response = express.Response;

export const healthV1Api = (_req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    apiVersion: "v1",
    service: "bookqubit-api",
    timestamp: new Date().toISOString()
  });
};
