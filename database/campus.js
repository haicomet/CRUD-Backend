const { DataTypes } = require("sequelize");
const db = require("./db");

// You porbably don't need a Duck model, this is just for demonstration purposes
const campus = db.define("CAMPUS", {
  campusName: {
    type: DataTypes.STRING,
    allowNull : false,

  },

  imageUrl: {
    type: DataTypes.STRING,
    defaultValue: "default-image",

  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,

  },
description: {
    type: DataTypes.TEXT('long'),
    allowNull: false,

  },



});
module.exports = campus;


//name 