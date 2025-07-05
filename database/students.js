const {DataTypes} = require("sequelize");
const db = require("./db");

const Students = db.define("students", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    imageUrl: {
        type: DataTypes.STRING,
        defaultValue: "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…FUCCbZQcR14ErMpq9EmBSQYoywsg31vd5YU66dSQ&usqp=CAU"
    },
    gpa: {
        type: DataTypes.FLOAT,
        validate: {
            min: 0.0,
            max: 4.0
        }
    },
    campusId: {
        type: DataTypes.INTEGER,
        references: {
          model: "CAMPUS",
          key: "id"
        }
      }
});

module.exports = Students;