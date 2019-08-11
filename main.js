const { app, BrowserWindow, ipcMain } = require('electron');
function createWindow() {
    win = new BrowserWindow({ minWidth: 1220, minHeight: 600, frame: true})
    win.loadFile('window/index.html')
    win.on('closed', () => {
        win = null
    });
}
app.on('ready', createWindow)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})