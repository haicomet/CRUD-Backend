const express = require("express");
const router = express.Router();
//const ducksRouter = require("./ducks");

//router.use("/ducks", ducksRouter);

const studentRoutes = require("./student");
router.use("/students", studentRoutes);

const campusRoutes = require("./campus");
router.use("/campus", campusRoutes);

module.exports = router;
