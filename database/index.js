const db = require("./db");
//const Duck = require("./duck");
const Students = require("./students");
const Campus = require("./campus");

Campus.hasMany(Students, {foreignKey: `campusId`});
Students.belongsTo(Campus, {foreignKey: `campusId`});

module.exports = {
  db,
  Students,
  Campus
};
