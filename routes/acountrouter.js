
const express=require('express');
const router=express.Router();
const Person = require("./../model/signup");

router.post("/signup", async (req, res) => {
    try {
      const data = req.body;
      const Newsignup = new Signup(data);
      const response = await Newsignup.save();
      console.log("data save successfully");
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "internal server error" });
    }
  });
  router.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find the user in the database by email
      const user = await Signup.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      // Check if the provided password matches the stored password (plaintext comparison)
      if (user.password !== password) {
        return res.status(401).json({ error: "Invalid password" });
      }
  
      // If credentials are valid, you can simply return a success message or user data
      res.status(200).json({ message: "Login successful", user });
    } catch (err) {
      console.error("Error logging in:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  module.exports=router;