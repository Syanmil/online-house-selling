var houseModel = require('../models/houseModel.js');

/**
 * houseController.js
 *
 * @description :: Server-side logic for managing houses.
 */
module.exports = {

    /**
     * houseController.list()
     */
    list: function (req, res) {
        houseModel.find(function (err, houses) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting house.',
                    error: err
                });
            }
            return res.json(houses);
        });
    },

    /**
     * houseController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        houseModel.findOne({_id: id}, function (err, house) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting house.',
                    error: err
                });
            }
            if (!house) {
                return res.status(404).json({
                    message: 'No such house'
                });
            }
            return res.json(house);
        });
    },

    /**
     * houseController.create()
     */
    create: function (req, res) {
        var house = new houseModel({
        });

        house.save(function (err, house) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating house',
                    error: err
                });
            }
            return res.status(201).json(house);
        });
    },

    /**
     * houseController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        houseModel.findOne({_id: id}, function (err, house) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting house',
                    error: err
                });
            }
            if (!house) {
                return res.status(404).json({
                    message: 'No such house'
                });
            }

            house.title = req.body.title ? req.body.title : house.title;
            house.save(function (err, house) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating house.',
                        error: err
                    });
                }

                return res.json(house);
            });
        });
    },

    /**
     * houseController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        houseModel.findByIdAndRemove(id, function (err, house) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the house.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};