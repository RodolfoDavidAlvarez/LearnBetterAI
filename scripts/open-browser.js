const { exec } = require("child_process");
const os = require("os");

const platform = os.platform();

function openBrowser(url) {
  let command;

  switch (platform) {
    case "darwin": // macOS
      command = `open ${url}`;
      break;
    case "win32": // Windows
      command = `start ${url}`;
      break;
    default: // Linux and others
      command = `xdg-open ${url}`;
      break;
  }

  exec(command, (error) => {
    if (error) {
      console.error("Error opening browser:", error);
    }
  });
}

// Wait for 2 seconds to ensure the development server is running
setTimeout(() => {
  openBrowser("http://localhost:3000");
}, 2000);
