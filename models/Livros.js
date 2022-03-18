const mongoose = require('mongoose');

const livrosSchema = new mongoose.Schema({
    id : {type : mongoose.Types.ObjectId},
    titulo : {type: String, required: true},
    editora: {type: String, required: true},
    pagina: {type: Number, required: true},
    //authorId : {type : mongoose.Types.ObjectId, ref: 'id'},
})

const Livros = mongoose.model('livros', livrosSchema)

module.exports = Livros