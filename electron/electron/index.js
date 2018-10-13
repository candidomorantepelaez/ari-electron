// Modules to control ElectronApplication life and create native browser window
const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const ElectronApp = electron.app;
const path = require("path");

// Module autoUpdater
const autoUpdater = require("electron-updater").autoUpdater;

autoUpdater.checkForUpdatesAndNotify();

const url = require("url");

// Keep a global reference of the window object, if you don"t, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({fullscreen: true, icon: path.join(__dirname, "server/assets/favicon.ico")})

  logger.log('info', "electron ready!!!");

  if(config.app.profile === "development"){
    mainWindow.loadURL(config.app.frontUrl);
    // mainWindow.webContents.openDevTools();
  }else{
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, "front/index.html"),
      protocol: "file",
      slashes: true
    }));
  }

  // Emitted when the window is closed.
  mainWindow.on("closed", function () {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
ElectronApp.on("ready", createWindow)

// Quit when all windows are closed.
ElectronApp.on("window-all-closed", function () {
  // On OS X it is common for ElectronApplications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    ElectronApp.quit()
  }
})

ElectronApp.on("activate", function () {
  // On OS X it"s common to re-create a window in the ElectronApp when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your ElectronApp"s specific main process
// code. You can also put them in separate files and require them here.