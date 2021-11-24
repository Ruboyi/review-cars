'use strict';

const cars = [{
    id: 1,
    brand: 'Seat',
    model: 'Ibiza',
    year: 2019,
    engine: 'Diesel',
    cv: 60,
}, {
    id: 2,
    brand: 'Seat',
    model: 'Toledo',
    year: 1999,
    engine: 'Diesel',
    cv: 120,
}];

function findAllCars() {

    return cars;
}

module.exports = {
    findAllCars,
}