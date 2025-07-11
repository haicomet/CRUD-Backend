const express = require("express");
const router = express.Router();
const {Students, Campus} = require("../database");

// GET all students
router.get("/", async (req, res) => {
	try{
		const students = await Students.findAll({
			include: Campus,
		});
		res.send(students);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch students" });
	}
  
});

//Get student by ID
router.get("/:id", async (req, res) => {
	try{
		const student = await Students.findByPk(req.params.id, {
			include: Campus,
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
		const { firstName, lastName, email, imageUrl, gpa, campusId } = req.body;
		const student = await Students.create({
		  firstName,
		  lastName,
		  email,
		  imageUrl,
		  gpa: gpa ? parseFloat(gpa) : null,
		  campusId
		});
		res.status(201).send(student);
	} catch (error) {
		res.status(500).json({ error: "Failed to create student" });
	}
});

//Delete student
router.delete("/:id", async (req, res) => {
	try{
		const studentID = Number(req.params.id);
		const deleteStu = await Students.destroy({
			where: {id : studentID}
		});
		res.json({message: `${studentID} deleted`});
	} catch (error) {
		res.status(500).json({ error: "Failed to delete student" });
	}
});



module.exports = router;