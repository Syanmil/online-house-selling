var houseModel = require('../models/houseModel.js');

module.exports = {
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
  create: function (req, res) {
    var house = new houseModel({
		title : req.body.title,		price : req.body.price,		detail : req.body.detail,		createdAt : new Date(),		image : req.body.image,		latitude: req.body.latitude,
    longitude: req.body.longitude
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
      house.title = req.body.title ? req.body.title : house.title;  		house.price = req.body.price ? req.body.price : house.price;  		house.detail = req.body.detail ? req.body.detail : house.detail;  		house.image = req.body.image ? req.body.image : house.image;      house.latitude = req.body.latitude ? req.body.latitude : house.latitude;      house.longitude = req.body.longitude ? req.body.longitude : house.longitude;      house.save(function (err, house) {        if (err) {
          return res.status(500).json({
            message: 'Error when updating house.',
            error: err
          });
        }
        return res.json(house);
      });
    });
  },
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
