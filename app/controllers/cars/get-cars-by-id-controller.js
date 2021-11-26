"use strict";

const createJsonError = require("../../errors/create-json-error");
const { findCarsById } = require("../../repositories/cars-reposity");

async function getCarsById(req, res) {
  try {
    const { id } = req.params;
    const car = await findCarsById(id);
    if (car.length === 0) {
      throw new Error('ERROR')
    }
    res.status(200);
    res.send(car);
  } catch (error) {
    createJsonError(error, res);
  }
}


module.exports = getCarsById;
