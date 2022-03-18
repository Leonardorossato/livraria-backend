const express = require('express');
const LivroController = require('../controllers/livroController');
const router = express.Router()

router.get('/', LivroController.getAllLivros)
router.get('/livro/:id', LivroController.getLivrosById)
router.post('/livro', LivroController.createLivro)
router.put('/livro/:id', LivroController.updateLivro)
router.delete('/livro/:id', LivroController.deleteLivro)

module.exports = router