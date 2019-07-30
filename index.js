const fs = require("fs");
var content;
// First I want to read the file
fs.readFile("./name.json", "utf8", function readFileCallback(err, data) {
  if (err) {
    console.log(err);
  } else {
    let _d = JSON.parse(data); //now it an object
    let newData = [];
    for (var i = 0; i < _d.length; i += 2) {
      newData.push(_d[i]);
    }
    let _new = JSON.stringify(newData); //convert it back to json
    fs.writeFile("./newNames.json", _new, "utf8", () => {}); // write it back
    // console.log(chosenAccount);
  }
});
