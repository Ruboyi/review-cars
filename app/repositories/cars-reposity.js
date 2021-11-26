'use strict';

const getPool = require('../insfrastructure/database');



async function findAllCars() {
    const pool = await getPool();
    const sql ='SELECT * FROM cars';
    const [cars] = await pool.query(sql);
    return cars;
}

async function findCarsById(id) {
    const pool = await getPool();
    const sql = 'SELECT * FROM cars WHERE id = ?'
    const [cars] = await pool.query(sql, id);
    return cars;
}

module.exports = {
    findAllCars,
    findCarsById,
}