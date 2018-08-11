/**
 * Electron
 */
global.base_dir = __dirname;
global.abs_path = function(path) {
  return base_dir + path;
}
global.include = function(file) {
  return require(abs_path('/' + file));
}

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const autoUpdater = require("electron-updater").autoUpdater

autoUpdater.checkForUpdatesAndNotify();

/**
 * config para el build.
 */
const desarrollo = true;



/**
 * nodejs server
 */
const express = require("express");
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const path = require('path');
const routes = require('./server/routes');
const appExpres = express();

require('electron-reload')(__dirname,{
  electron: require(`${__dirname}/node_modules/electron`)
});
// appExpres.use(cookieParser());
appExpres.use(express.static(__dirname + '/public'));

appExpres.use(bodyParser.json());
appExpres.use(bodyParser.urlencoded({extended:true}));

appExpres.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

appExpres.use('/', routes);

appExpres.use(function(req, res, next) {
  var err = new Error('Uppps creo que grindeando me carge esta pagina!!!');
  res.status(404).send(err);
});

appExpres.listen(8080, function () {
  console.log('servidor listo en el puerto 8080');
});


/**
 * Creamos la ventana del navegador
 *
 *
 *
 *
 */
const url = require('url');
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow;

function createWindow () {
    // Create the browser window.
    mainWindow = new BrowserWindow({fullscreen: 'true', icon: path.join(__dirname, 'server/assets/favicon.ico')})

    if(desarrollo === true){
      mainWindow.loadURL("http://localhost:3000");
      mainWindow.webContents.openDevTools();
    }else{
      mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'front/index.html'),
        protocol: 'file',
        slashes: true
      }));
    }

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

