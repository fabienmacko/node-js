const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", (req,res)=>{
  Post.find((err, response) => {
    if (!err) {
      res.json(response)
    }
    
  });
  
  
  // res.send(allPOsts);
})

router.post("/insert", (req,res)=>{
  console.log("Insert new post!");
  
  const post = new Post({
    pseudo: req.body.pseudo,
    description: req.body.description
  });

  post.save()
  .then(data => {
    res.status(201);
    res.json(data);
  })
  .catch(err => {
    console.log(err);
    
  });
})

module.exports = router;