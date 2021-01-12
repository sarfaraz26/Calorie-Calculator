const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index');
})

router.get('/:type',(req,res)=>{
    const {type} = req.params;

    if((type==="Build-Muscle") || (type==="Loose-Fat"))
    {
        res.render('name',{type:type});
    }
})

module.exports = router;