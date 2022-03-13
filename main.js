const { app, Menu, Tray } = require("electron");
const os = require("os-utils");

const ICON_NUMBERS = 10;
let tray;
let runSpeed = 200;
let timer;

app.whenReady().then(() => {
  tray = new Tray("./icon/icon-0.png");
  let idx = 0;
  setInterval(() => {
    os.cpuUsage((usage) => {
      clearInterval(timer);
      runSpeed = parseInt(200 / Math.max(1, parseInt(usage * 100)));
      timer = setInterval(() => {
        idx = idx % 8;
        tray.setImage(`./icon/icon-${idx}.png`);
        idx++;
      }, runSpeed);
    });
  }, 1000);

  const contextMenu = Menu.buildFromTemplate([
    {
      label: "exit",
      type: "radio",
      click: () => {
        app.exit();
      },
    },
  ]);
  tray.setContextMenu(contextMenu);
});
