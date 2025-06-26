const express = require('express');
const router = express.Router();
const controller = require('../controllers/filmesController');

router.get('/', controller.listar);
router.get('/:idfilmes', controller.obter);
router.post('/', controller.inserir);
router.put('/:idfilmes', controller.atualizar);
router.delete('/:idfilmes', controller.excluir);

module.exports = router;
