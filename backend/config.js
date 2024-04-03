const mongoose = require("mongoose");

const db = async () => { // better practice
  await mongoose.connect("mongodb://127.0.0.1:27017/Hospital_Data"); // create database
}

module.exports = db;







