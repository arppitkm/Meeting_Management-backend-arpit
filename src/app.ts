import express from "express";
import authRoutes from "./routes/auth.routes";

import {
  authenticate,
  AuthRequest,
} from "./middlewares/auth.middleware";

import meetingRoutes from "./routes/meeting.routes";
import actionItemRoutes from "./routes/action-item.routes";
import reminderRoutes from "./routes/reminder.routes";
import dashboardRoutes from "./routes/dashboard.routes";
import evaluationRoutes from "./routes/evaluation.routes";

import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.redirect("/api-docs");
});

app.get("/health", (_req, res) => {
  res.json({
    status: "UP",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/meetings", meetingRoutes);
app.use("/api/action-items", actionItemRoutes);
app.use("/api/reminders", reminderRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/evaluation", evaluationRoutes);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

app.get(
  "/api/profile",
  authenticate,
  (req: AuthRequest, res) => {
    res.json({
      userId: req.userId,
      message: "Protected route works",
    });
  }
);

export default app;