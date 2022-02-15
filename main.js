const { app, Menu, Tray } = require("electron");
const sharp = require("sharp");

let tray = null;

app.whenReady().then(() => {
  tray = new Tray("./icon/test.png");
});
