const express = require('express');
const router = express.Router();
const User = require('../models/Usuarios');

router.get('/', async (req, res) => {
  const  user = await User.find();
  res.json(user);
 
})

 router.get('/:id', async (req, res) => {
     const  user = await User.findById(req.params.id)
     res.json(user);  
})

router.post('/', async (req, res) => {

    const user = await User(req.body);
    user.save();
    console.log(user);
    res.json("GUARDADO CORRECTAMENTE");
    
})

router.put('/:id', async (req, res) => {
   await User.findByIdAndUpdate(req.params.id, req.body);
   res.json({
       ESTATUS: "FELICIDADES YA ACTUALIZA"
   })
})

router.delete('/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json("ELIMINADO CORRECTAMENTE FELICIDADES");
 })
 
module.exports = router;