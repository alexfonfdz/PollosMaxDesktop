const { app, BrowserWindow, screen } = require('electron')
const express = require('express');
const path = require('path');
const expressAppPath = path.join(__dirname, 'src', 'Back-End', 'index.js');//Poner donde está tu proyecto de express (server.js/app.js)

require(expressAppPath) //inicia express


function createWindow() {
    const { width, height } = screen.getPrimaryDisplay().size;
    const mainWindow = new BrowserWindow({
        title: 'Pollos Max',
        autoHideMenuBar: true,
        width: width,
        height: height,
        resizable: false,
        maximizable: true,
        fullscreenable: true,
        frame: true,
        closable: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: false,
            session: true,
            accessibleTitle: 'Pollo Max',
            scrollBounce: true,
        }
    })

    // Cambia la URL a la del servicio de React
    mainWindow.loadURL('http://localhost:3000')
    // const startUrl = url.format({
    //     protocol: 'http',
    //     hostname: 'localhost',
    //     port: 3001,
    //     pathname: 'src/ProyectoFront/dist/index.html',
    // });
    // mainWindow.loadURL(startUrl);
    // mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow()
    
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })

     app.on('window-all-closed', function () {
        
        app.exit()
        app.quit()

        if (process.platform !== 'darwin') app.quit()
    })

    
})
