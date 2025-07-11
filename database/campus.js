const { DataTypes } = require("sequelize");
const db = require("./db");


const Campus = db.define("CAMPUS", {
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
module.exports = Campus;


//name 