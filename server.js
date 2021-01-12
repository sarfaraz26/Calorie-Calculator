require('dotenv').config();
const PORT = process.env.PORT || 2021;
const express = require('express');
const routes = require('./routes');

const app = express();

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.use('/',routes);


app.listen(PORT,function(){
    console.log(`Listening to port ${PORT}`);
})

