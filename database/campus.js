const { DataTypes } = require("sequelize");
const db = require("./db");

// You porbably don't need a Duck model, this is just for demonstration purposes
const campus = db.define("CAMPUS", {
  campusName: {
    type: DataTypes.STRING,
    allowNull : false,

  },

  imageUrl: {
    type: DateTypes.STRING,
    defaultValue: "default-image",

  },
  adress: {
    type: DateTypes.STRING,
    allowNull: false,

  },
description: {
    type: DateTypes.TEXT('long'),
    allowNull: false,

  },



});
module.exports = campus;


//name 