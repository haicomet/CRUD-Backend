const db = require("./db");
//const Duck = require("./duck");
const Students = require("./students");
const Campus = require("./campus");

Campus.hasMany(Students);
Students.hasOne(Campus);

module.exports = {
  db,
  Students,
  Campus
};
