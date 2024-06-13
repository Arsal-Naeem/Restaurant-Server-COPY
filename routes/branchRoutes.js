const express = require('express');
const router = express.Router();
const branchController = require('../controllers/branchController');

router.get('/isOpen/:area', branchController.isOpenArea);
router.get('/isOpen', branchController.isOpen);
router.post('/create', branchController.create);
router.put('/edit/:id', branchController.update);
router.delete('/delete/:id', branchController.delete);

module.exports = router;