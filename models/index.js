const dbConfig = require("../configs/db-config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = [];
db.mongoose = mongoose;
db.url = dbConfig.url;
db.users = require("../file-upload.js")();

module.exports = db;