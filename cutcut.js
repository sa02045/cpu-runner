const sharp = require("sharp");

for (let i = 0; i < 10; i++) {
  sharp("./icon/test2.png")
    .extract({
      left: 500 * i,
      top: 0,
      width: 500,
      height: 700,
    })
    .resize({ width: 64, height: 64 })
    .toFile(`./icon/output-large-${i}@2x.png`, function (err) {});
}
