const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", (req,res)=>{
  res.send("We are on Users");
})

router.post("/insert", (req,res)=>{
  console.log("Insert new User!");
  
  const user = new User({
    name: req.body.name,
    age: req.body.age
  });

  user.save()
  .then(data => {
    res.status(201);
    res.json(data);
  })
  .catch(err => {
    console.log(err);
    
  });
})

module.exports = router;