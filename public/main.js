const { app, BrowserWindow } = require('electron')
require('@electron/remote/main').initialize()

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        enableRemoteModule: true
    },
  })

  // and load the url of react app.
  win.loadURL('http://localhost:3000')
}

try {
    require('electron-reloader')(module)
  } catch (_) {}
  

app.whenReady().then(createWindow)
