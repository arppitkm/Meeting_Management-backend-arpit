import { Router } from "express";

import { authenticate }
  from "../middlewares/auth.middleware";

import { runRemindersHandler }
  from "../controllers/reminder.controller";

const router = Router();

router.post(
  "/run",
  authenticate,
  runRemindersHandler
);

export default router;