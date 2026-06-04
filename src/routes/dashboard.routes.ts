import { Router } from "express";

import { authenticate }
  from "../middlewares/auth.middleware";

import { statsHandler }
  from "../controllers/dashboard.controller";

const router = Router();

router.get(
  "/stats",
  authenticate,
  statsHandler
);

export default router;