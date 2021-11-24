'use strict';

const{ findAllCars} = require('../../repositories/cars-reposity');

function getCars(req, res){
    const cars = findAllCars();

    res.status(200);
    res.send({data: cars});
}

module.exports = getCars;
