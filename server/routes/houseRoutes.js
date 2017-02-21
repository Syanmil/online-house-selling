var express = require('express');
var router = express.Router();
var houseController = require('../controllers/houseController.js');

/*
 * GET
 */
router.get('/', houseController.list);

/*
 * GET
 */
router.get('/:id', houseController.show);

/*
 * POST
 */
router.post('/', houseController.create);

/*
 * PUT
 */
router.put('/:id', houseController.update);

/*
 * DELETE
 */
router.delete('/:id', houseController.remove);

module.exports = router;
