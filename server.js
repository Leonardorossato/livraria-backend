const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config()
const port = process.env.port

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(port, ()=>{
    console.log(`Server is listening the port : ${port}`)
})