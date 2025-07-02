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

//Get student by ID
router.get("/:id", async (req, res) => {
	try{
		const student = await Students.findByPk(req.params.id, {
			include: campus,
		});
		if (!student){
			res.status(404).json({ error: "Student not found" });
		}
		res.send(student);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch student" });
	}
});

//Create new student
router.post("/", async (req, res) => {
	try{
		const student = await Students.create(req.body);
		res.status(200).send(student);
	} catch (error) {
		res.status(500).json({ error: "Failed to create student" });
	}
});



module.exports = router;