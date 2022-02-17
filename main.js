const { app, Menu, Tray } = require("electron");
const sharp = require("sharp");
const os = require("os-utils");

let tray;
let usus = 200;
let timer;
app.whenReady().then(() => {
  tray = new Tray("./icon/output-large-0@2x.png");

  let idx = 2;
  setInterval(() => {
    os.cpuUsage((usage) => {
      clearInterval(timer);
      usus = parseInt(200 / Math.max(1, parseInt(usage * 100)));
      timer = setInterval(() => {
        idx = idx % 6;
        tray.setImage(`./icon/output-large-${idx}@2x.png`);
        idx++;
      }, usus);
    });
  }, 2000);

  const contextMenu = Menu.buildFromTemplate([
    {
      label: "종료",
      type: "radio",
      click: () => {
        app.exit();
      },
    },
  ]);
  tray.setContextMenu(contextMenu);
});
