const {
    remote,
    ipcRenderer
} = require('electron');
var baud = [110, 300, 600, 1200, 2400, 4800, 9600, 14400, 19200, 28800, 38400, 56000, 57600, 115200, 128000, 153600, 230400, 256000, 460800, 921600];
var sp = require('serialport');
for (let i = 0; i < baud.length; i++) {
    creaElem("option", document.querySelector("#baud"), baud[i], baud[i], "");
}
sp.list(function (err, ports) {
    for (var i = 0; i < ports.length; i++) {
        creaElem("option", document.querySelector("#com"), ports[i].comName, ports[i].comName, "");
        console.log(ports[i].comName);
    }
});
function confirm(){
    comx = document.querySelector("#com").value;
    baudx = document.querySelector("#baud").value;
    js = {com: comx, baud: baudx};
    ipcRenderer.send('messaggio', js);
    
}
ipcRenderer.on('hr', (event, arg) => {
    if (arg == 1) {
        location.href = "../window/chat.html";
    }
});