const express = require('express');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();
const Hero = require('../models/Hero')
//const User = require("../models/User")

//http://localhost:5000/api/saveHero
router.post('/saveHero', (req,res,next)=>{
  let hero  = req.body
  Hero.create(req.body).then(stufffromDB=>{
    res.json({
      hero:'saved'
    })
  }).catch(err=>console.log(err))
})

//http://localhost:5000/api/hero 
router.get('/hero', (req,res,next)=>{
  Hero.find().then(heroesFromDB=>{
    res.json(heroesFromDB)
  })
})


//http://localhost:5000/api/hero/deleteHeroPlease 404 (Not Found)
router.post('/hero/deleteHeroPlease', (req,res,next)=>{
  console.log(req.body, req.params, req.query, req.file)
  Hero.findByIdAndDelete(req.body.id).then(responseFromDB=>{
    res.json({deleted:responseFromDB})
  })
  
  //id is not defined this is my error 
})


// { id: '5ce6b041f5ebdb21037495c2' } {} {} undefined
// ----- An error happened -----
// ReferenceError: id is not defined


module.exports = router;
