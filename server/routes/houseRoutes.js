var express = require('express');
var router = express.Router();
var houseController = require('../controllers/houseController.js');


router.get('/', houseController.list);
router.get('/:id', houseController.show);
router.post('/', houseController.create);
router.put('/:id', houseController.update);
router.delete('/:id', houseController.remove);

module.exports = router;
