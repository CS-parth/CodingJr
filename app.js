const express = require('express');
const path = require('path');
const app = express();
const datapath = path.join(__dirname,'data');

console.log(datapath);

//Below is a static way of inclideing web pages theough nodejs
app.use(express.static(datapath));

app.get('',(req,res)=>{
    res.sendFile(`${datapath}/index.html`)
})

app.listen(5000,()=>{})