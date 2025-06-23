const express = require('express');
const router = express.Router();
const controller = require('../controllers/filmesController');

router.get('/', controller.listar);
router.get('/:id', controller.obter);
router.post('/', controller.inserir);
router.put('/:id', controller.atualizar);
router.delete('/:id', controller.excluir);

module.exports = router;
