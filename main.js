const { app, Menu, Tray } = require("electron");
const sharp = require("sharp");

let tray = null;

app.whenReady().then(() => {
  tray = new Tray("./icon/output-large-0@2x.png");
  let idx = 2;
  setInterval(() => {
    idx = idx % 6;
    tray.setImage(`./icon/output-large-${idx}@2x.png`);
    idx++;
  }, 100);

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
