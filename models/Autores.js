const mongoose = require('mongoose');

const autorSchema = new mongoose.Schema({
    id : {type : mongoose.Types.ObjectId},
    name : {type: String, required: true}
    //authorId : {type : mongoose.Types.ObjectId, ref: 'id'},
})

const Autores = mongoose.model('autores', autorSchema)

module.exports = Autores