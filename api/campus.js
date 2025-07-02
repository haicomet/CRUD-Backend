const express = require("express");
const router = express.Router();
const { Campus, Students } = require("../database");


      //async for await
      //post creating a new campus
router.post("/", async (req, res) => {

   try{  
    const camp = req.body;
    await Campus.create(camp);
    res.sendStatus(201);
   }
   catch(error) {
   res.sendStatus(500);
   }


});

// GET all ducks = retriveing info
router.get("/", async (req, res) => {
try{  
    const camp = await Campus.findAll();
    res.send(camp);
   }
   catch(error) {
   res.sendStatus(500);
   }

});

router.get("/:id", async (req, res) => {
try{  
    const camp = await  Campus.findByPk(req.params.id, {
      include: Students,
      
    });
    res.send(camp);
   }
   catch(error) {
   res.sendStatus(500);
   }

});

router.delete("/:id", async (req, res) => {
try{  
    const camp = Number(req.params.id);
    const deleteCamp = await Campus.destroy({
      where: {id: camp}
    });
   }
   catch(error) {
   res.sendStatus(500);
   }

});



module.exports = router;
