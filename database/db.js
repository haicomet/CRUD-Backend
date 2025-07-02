require("dotenv").config();
const { Sequelize } = require("sequelize");
const pg = require("pg");

// Feel free to rename the database to whatever you want!
const dbName = "ttp_crud";

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`,
  {
    logging: false, // comment this line to enable logging
  }
);

module.exports = db;
db.authenticate()
  .then(() => {
    console.log("✅ Connected to DB!");
    console.log("📦 Database name:", db.config.database);
    console.log("👤 DB user:", db.config.username);
    console.log("🖥️ Host:", db.config.host);
    console.log("🛠️ Dialect:", db.getDialect());
  })
  .catch((err) => {
    console.error("❌ Unable to connect to DB:", err);
  });