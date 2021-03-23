const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.get('/', async (req, res) => {
  const  tasks = await Task.find();
  res.json(tasks);
 
})

 router.get('/:id', async (req, res) => {
     const  tasks = await Task.findById(req.params.id)
     res.json(tasks);  
})

router.post('/', async (req, res) => {

    const tasks = await Task(req.body);
    tasks.save();
    console.log(tasks);
    res.json("GUARDADO CORRECTAMENTE");
    
})



router.put('/:id', async (req, res) => {
   await Task.findByIdAndUpdate(req.params.id, req.body);
   res.json({
       ESTATUS: "FELICIDADES YA ACTUALIZA"
   })
})


router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json("ELIMINADO CORRECTAMENTE FELICIDADES");
 })
 
module.exports = router;