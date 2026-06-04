import "dotenv/config";
import app from "./app";
import { startReminderJob } from "./jobs/reminder.job";

startReminderJob();

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});