const db = require("./db");
//const Duck = require("./duck");
const Students = require("./students");
const campus = require("./campus");

campus.hasMany(Students, {foreignKey: `campusId`});
Students.belongsTo(campus, {foreignKey: `campusId`});

module.exports = {
  db,
  Students,
  campus
};
