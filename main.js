const {
    app,
    BrowserWindow,
    ipcMain,
    dialog
} = require('electron');
let win;
const fs = require('fs');
function createWindow() {
    win = new BrowserWindow({
        minWidth: 900,
        minHeight: 600,
        frame: true,
        webPreferences: {
            nodeIntegration: true
        }
    })
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
ipcMain.on('messaggio', (event, arg) => {
    fs.writeFile('utilities/data.json', JSON.stringify(arg), (err) => {
        if (err) throw err;
        event.sender.send('hr', 1);
    });
});