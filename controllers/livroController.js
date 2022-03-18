const Livros = require("../models/Livros")

class LivroController{
    
    static getAllLivros = async(req, res)=>{
        try {
            const livros = await Livros.find()
            return res.status(200).json(livros)
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }
    static getLivrosById = async(req, res) =>{
        const {id} = req.params

        try {
            const livro = await Livros.findOne({where: {id: id}})
            return res.status(200).json(livro)
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }
    static createLivro = async(req, res) =>{
        const newLivro = req.body

        try {
            const livroCreated = await Livros.create(newLivro)
            return res.status(201).json(livroCreated)
        } catch (error) {
            return res.status(404).json({error: error.message})
        }
    }

    static updateLivro = async(req, res) =>{

        try {
            const livroUpdated = await Livros.findByIdAndUpdate(req.params.id,{
                $set: req.body
            }, {next: true})
            return res.status(200).json(livroUpdated)
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }
    static deleteLivro = async(req, res) =>{
        const {id} = req.params
        try {
            await Livros.findByIdAndDelete(req.params.id)
            return res.status(200).json({message: `Livro id ${id} deleted`})
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }
}

module.exports = LivroController