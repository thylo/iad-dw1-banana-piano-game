//requiring path and fs modules
const path = require("path");
const fs = require("fs");
//joining path of directory
const directoryPath = path.join(__dirname, "..", "_sources");
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  const words = [
    "banana",
    "piano",
    "student",
    "logo",
    "apple",
    "raspberry",
    "trumpet",
    "hill",
    "armchair",
    "strawberry",
    "watermelon",
    "saxophone",
  ];

  let lines = files
    .filter((file) => file !== ".DS_Store")
    .map((value, index) => {
      const name = value
        .replace(/\d+_/, "")
        .replaceAll("_", " ")
        .replace(".png", "");

      return [index, name].join(",");
    })
    .join("\n");

  lines = "id,name\n" + lines;
  //listing all files using forEach
  fs.writeFileSync(path.join(__dirname, "..", "_images.csv"), lines);

  const image_categories = files
    .filter((file) => file !== ".DS_Store")
    .map((file, id) => {
      const categories = words.reduce((previousValue, currentValue) => {
        if (file.toLowerCase().includes(currentValue)) {
          return [...previousValue, currentValue];
        }
        return previousValue;
      }, []);
      return { id, file, categories };
    });
  fs.writeFileSync(
    path.join(__dirname, "..", "categories.json"),
    JSON.stringify(image_categories, null, 2)
  );
});
