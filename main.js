// import the app and BrowserWindow modules of the electron package to be able to 
//manage your application's lifecycle events
const { app, BrowserWindow } = require('electron');

// define a function that creates a new browser window with node integration enabled, 
// loads index.html file into this window
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('index.html')
}


// create a new browser window by invoking the createWindow function once the Electron 
// application is initialized.
app.whenReady().then(createWindow)

// add a new listener that tries to quit the application when it no longer has any open windows. 
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})