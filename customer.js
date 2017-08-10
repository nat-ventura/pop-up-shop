require('dotenv').config();
const pg = require('pg-promise')();
const dbConfig = {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    database: process.env.DB_NAME
};
const db = pg();

class Customer {
    constructor() {

    }
    save() {

    }
}

module.exports = Customer;