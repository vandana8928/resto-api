const express=require('express');
const router=express.Router();
const Person = require("./../model/menu");

router.post("/menu", async (req, res) => {
    try {
      const data = req.body;
      const Newmenu = new Menu(data);
      const response = await Newmenu.save();
      console.log("data save successfully");
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "internal server error" });
    }
  });
  
  //fectching the data from database api
  router.get("/menu", async (req, res) => {
    try {
      const data = await Menu.find();
      console.log("data fetch successfully");
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "internal server error" });
    }
  });
  router.get("/:tastetype", async (req, res) => {
    try {
      const tastetype=req.params.tastetype;
      if(tastetype=='sweet' || tastetype=='spicy' || tastetype=='sour'){
        const response = await Menu.find({taste:tasteype});
        res.status(200).json(response);
      }
      else{
        res.status(404).json({error:'invalid taste type'});
      }
    
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "internal server error" });
    }
  });


  router.put('/:id',async(req,res)=>{
    try{
      const menuId=req.params.id;
      const updatemenudata=req.body;
      const response=await Menu.findByIdAndUpdate(menuId,updatemenudata,{
        new:true,
        runValidators:true,
      })
      if(!response){
        return res.status(404).json({error:'menu not found'});
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
      const menuId=req.params.id;
      const response=await Menu.findByIdAndRemove(menuId);
      if(!response){
        return res.status(404).json({error:'menu  not found'});
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