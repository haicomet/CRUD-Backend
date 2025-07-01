const express = require("express");
const router = express.Router();
const {Students} = require("../database");

// GET all students
router.get("/", async (req, res) => {
	try{
		const students = await Students.findAll();
		res.send(students);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch students" });
	}
  
});

module.exports = router;