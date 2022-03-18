const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config()
const port = process.env.port
const mongoConnection = require('./connection/mongoConnection')
const livrosRouter = require('./routes/livrosRouter')

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.mongoConnection = mongoConnection

app.use('/api/livros', livrosRouter)

app.listen(port, ()=>{
    console.log(`Server is listening the port : ${port}`)
})