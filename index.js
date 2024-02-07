const fs = require("fs");
const path = require("path");

const replaceThis = "sourav";
const replaceWith = "rohit";

const preview = false;

const folder = __dirname;

try {
  fs.readdir(folder, (err, data) => {
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
      const item = data[i];

      let oldFile = path.join(folder, item);
      let newFile = path.join(
        folder,
        item.replaceAll(replaceThis, replaceWith)
      );
      if (!preview) {
        fs.rename(oldFile, newFile, () => {
          console.log("Rename Successfull");
        });
      } else {
        if (oldFile != newFile) {
          console.log("data/" + item + " will be renamed to : " + newFile);
        }
      }
    }
  });
} catch (error) {
  console.log(error);
}
