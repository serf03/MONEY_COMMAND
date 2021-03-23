const express = require('express');
const router = express.Router();
const Cm = require('../models/ComandasModels');

router.get('/', async (req, res) => {
  const  cm = await Cm.find();
  res.json(cm);
 
})

 router.get('/:id', async (req, res) => {
     const  cm = await Cm.findById(req.params.id)
     res.json(cm);  
})

router.post('/', async (req, res) => {

    const cm = await Cm(req.body);
    tasks.save();
    console.log(cm);
    res.json("GUARDADO CORRECTAMENTE");
    
})



router.put('/:id', async (req, res) => {
   await Cm.findByIdAndUpdate(req.params.id, req.body);
   res.json({
       ESTATUS: "FELICIDADES YA ACTUALIZA"
   })
})


router.delete('/:id', async (req, res) => {
    await Cm.findByIdAndDelete(req.params.id);
    res.json("ELIMINADO CORRECTAMENTE FELICIDADES");
 })
 
module.exports = router;