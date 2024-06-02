const fsPromise = require("fs").promises;
const path = require("path");

const renamingFile = async () => {
  try {
    const data = await fsPromise.rename(
      path.join(__dirname, "files", "lorem.txt"),
      path.join(__dirname, "files", "renammed.txt")
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
const writingFiles = async () => {
  try {
    const data = await fsPromise.writeFile(
      path.join(__dirname, "files", "renammed.txt"),
      "I have been written"
    );
  } catch (error) {
    console.log(error);
  }
};
const addingData = async () => {
  try {
    const data = await fsPromise.appendFile(
      path.join(__dirname, "files", "renammed.txt"),
      "\nI have been uppdated"
    );
  } catch (error) {
    console.log(error);
  }
};

const filesOps = async () => {
  try {
    const data = await fsPromise.readFile(
      path.join(__dirname, "files", "renammed.txt"),
      { encoding: "utf8" }
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

renamingFile();
writingFiles();
addingData();
filesOps();
