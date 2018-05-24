
var fs = require('fs'); // to read structuredData.json from fs

var databaseFile = fs.readFileSync('structuredData.json');
let database = JSON.parse(databaseFile);

module.exports = database;