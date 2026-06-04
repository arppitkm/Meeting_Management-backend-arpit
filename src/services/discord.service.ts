import axios from "axios";

export async function sendDiscordReminder(
  task: string,
  assignee: string,
  dueDate: Date
) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn("Discord webhook URL not configured");
    return;
  }

  await axios.post(webhookUrl, {
    content:
      `🔔 OVERDUE ACTION ITEM\n\n` +
      `Task: ${task}\n` +
      `Assigned To: ${assignee}\n` +
      `Due Date: ${dueDate.toISOString()}`
  });
}