const Autores = require("../models/Autores")

class LivroController{
    
    static getAllAutores = async(req, res)=>{
        try {
            const autores = await Autores.find()
            return res.status(200).json(autores)
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }
    static getLivrosById = async(req, res) =>{
        const {id} = req.params

        try {
            const autores = await Autores.findOne({where: {id: id}})
            return res.status(200).json(autores)
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }
    static CreateAutor = async(req, res) =>{
        const newAutor = req.body

        try {
            const autorCreated = await Autores.create(newAutor)
            return res.status(201).json(autorCreated)
        } catch (error) {
            return res.status(404).json({error: error.message})
        }
    }

    static updatedAutor = async(req, res) =>{

        try {
            const livroUpdated = await Autores.findByIdAndUpdate(req.params.id,{
                $set: req.body
            }, {next: true})
            return res.status(200).json(livroUpdated)
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }
    static deleteAutor = async(req, res) =>{
        const {id} = req.params
        try {
            await Livros.findByIdAndDelete(req.params.id)
            return res.status(200).json({message: `Autores id ${id} deleted`})
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }
}

module.exports = LivroController