const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index');
})

router.get('/:type',(req,res)=>{
    const {type} = req.params;
    if(type ==="Build-Muscle" || type ==="Loose-Fat")
    {
        res.render('gender',{type : type});
    }
})

router.get('/:type/:gender',(req,res)=>{
    const {type,gender} = req.params;

    if((type==="Build-Muscle" || gender==="male") || (type==="Loose-Fat" || gender==="male") || (type==="Build-Muscle" || gender==="female") || (type==="Loose-Fat" || gender==="female"))
    {
        res.render('name',{type:type, gender:gender});
    }
})

router.get('/:type/:gender/workout-plans',(req,res)=>{
    res.render('workouts');
})

module.exports = router;