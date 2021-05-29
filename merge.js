const PDFMerger = require("pdf-merger-js");
const fs = require("fs");

const merge = async () => {
  const merger = new PDFMerger();
  const mergePDFs = async (filename) => {
    merger.add(`${__dirname}/pdf/${filename}`);
    merger.add(`${__dirname}/merge.pdf`);
    console.log("added");
    await merger.save(`${__dirname}/output/${filename}`);
  };

  fs.readdir(`${__dirname}/pdf`, async (err, files) => {
    if (err) {
      return console.log(`Unable to scan directory: ${err}`);
    } else {
      for (let file of files) {
        console.log(file.slice(-3));
        if (file.slice(-3) === "pdf") {
          console.log(`Merging ${file}`);
          await mergePDFs(file);
        }
      }
    }
  });
};

merge();
