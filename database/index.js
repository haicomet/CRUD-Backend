const db = require("./db");
//const Duck = require("./duck");
const Students = require("./students");
const campus = require("./campus");

campus.hasMany(Students);
Students.hasOne(campus);

module.exports = {
  db,
  Students,
  campus
};
