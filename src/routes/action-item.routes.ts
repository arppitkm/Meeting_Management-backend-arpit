import { Router } from "express";

import {
  createHandler,
  listHandler,
  updateStatusHandler,
  deleteHandler,
} from "../controllers/action-item.controller";

import {
  authenticate,
} from "../middlewares/auth.middleware";

const router = Router();

router.use(authenticate);

router.post("/", createHandler);

router.get("/", listHandler);

router.patch(
  "/:id/status",
  updateStatusHandler
);

router.delete(
  "/:id",
  deleteHandler
);

export default router;