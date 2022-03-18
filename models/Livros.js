const mongoose = require('mongoose');

const livrosSchema = new mongoose.Schema({
    _id : {type : mongoose.Types.ObjectId},
    name : {type: String, required: true}
})

const Livros = mongoose.model('livros', livrosSchema)

module.exports = Livros