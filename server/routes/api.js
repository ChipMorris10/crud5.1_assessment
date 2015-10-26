var express = require('express');
var router = require.Router();
var Car = require('../models/car.js');


// POST ONE Car
router.post('/cars', function (req, res, next) {
  new Car( {
    make: req.body.make,
    model: req.body.model,
    color: req.body.color,
    year: req.body.year,
    two_door: req.body.two_door
  })
  .saveQ()
    .then(function(result){res.json(result)})
    .catch(function(err){res.send(err)})
    .done();
});

// GET ONE Car
router.get('/car/:id', function(req, res, next) {
  Car.findByIdQ(req.params.id)
    .then(function(result){res.json(result)})
    .catch(function(err){res.send(err)})
    .done();
});

// GET ALL Cars
router.get('/cars', function(req, res, next) {
  Cars.findQ()
    .then(function(result))
})

// PUT ONE Car


// DELETE ONE Car













module.exports = router;
