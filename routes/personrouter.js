const express=require('express');
const router=express.Router();
const Person = require("./../model/person");

router.post("/", async (req, res) => {
    try {
      const data = req.body;
      const Newperson = new Person(data);
      const response = await Newperson.save();
      console.log("data save successfully");
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "internal server error" });
    }
  });

  router.get("/", async (req, res) => {
    try {
      const data = await Person.find();
  
      console.log("data fetch successfully");
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "internal server error" });
    }
  });
  router.get("/:worktype", async (req, res) => {
    try {
      const worktype=req.params.worktype;
      if(worktype=='waiter' || worktype=='chef' || worktype=='manager'){
        const response = await Person.find({work:worktype});
        res.status(200).json(response);
      }
      else{
        res.status(404).json({error:'invalid work type'});
      }
    
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "internal server error" });
    }
  });


  router.put('/:id',async(req,res)=>{
    try{
      const personId=req.params.id;
      const updatedPersondata=req.body;
      const response=await Person.findByIdAndUpdate(personId,updatedPersondata,{
        new:true,
        runValidators:true,
      })
      if(!response){
        return res.status(404).json({error:'person not found'});
      }
      console.log("data updated");
      res.status(200).json(response);

    }catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'})


    }
  })
  router.delete('/:id',async(req,res)=>{
    try{
      const personId=req.params.id;
      const response=await Person.findByIdAndRemove(personId);
      if(!response){
        return res.status(404).json({error:'person not found'});
      }
      console.log("data delete");
      res.status(200).json({message:'data deleted successfully'});

    }
    catch(err){
      console.log(err);
      res.status(500).json({
        error:'internal server error'
      });

    }
  })
  module.exports = router;

