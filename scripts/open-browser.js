import { exec } from "node:child_process";

// Wait for the dev server to start
setTimeout(() => {
  const command = process.platform === "darwin" ? "open" : process.platform === "win32" ? "start" : "xdg-open";
  exec(`${command} http://localhost:5173`);
}, 3000);
