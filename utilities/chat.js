const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
const parser = new Readline();
const fs = require('fs');
var set = fs.readFileSync("utilities/data.json", "utf8");
set = JSON.parse(set);
var baud = Number(set.baud);
var com = set.com;
const ser = new SerialPort(com, {baudRate: baud});
ser.pipe(parser);

parser.on('data', function (data) {
    chat(data, "terminal");
});
