var AdmZip = require("adm-zip");

var zip = new AdmZip("./source.zip");
zip.getEntries().forEach((entry) => {
  console.log(entry.entryName, entry.name || '/')
});
console.log('----------')

zip.writeZip("./source2.zip");

var zip2 = new AdmZip("./source2.zip")
zip2.getEntries().forEach((entry) => {
  console.log(entry.entryName, entry.name || '/')
});