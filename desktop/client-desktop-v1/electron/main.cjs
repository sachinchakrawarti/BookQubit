const { app, BrowserWindow, Menu } = require("electron");

const DEV_URL = process.env.VITE_DEV_URL || "http://localhost:6003";

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    autoHideMenuBar: true, // ✅ hide menu bar
  });

  // ✅ Remove menu completely (File / Edit / View)
  Menu.setApplicationMenu(null);

  const tryLoad = () => {
    win.loadURL(DEV_URL).catch(() => {
      setTimeout(tryLoad, 500);
    });
  };

  tryLoad();
}

app.whenReady().then(createWindow);

// ✅ Windows / Linux quit behavior
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
