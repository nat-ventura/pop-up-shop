require('dotenv').config();
const pg = require('pg-promise')();
const dbConfig = {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    database: process.env.DB_NAME
};

class Customer {
    constructor(name, email, addr, password) {
        this.db = pg(dbConfig);
        this.name = name;
        this.email = email;
        this.address = addr;
        this.password = password;
    }
    save() {
        // the safe way is to go into postgres,
        // type out a query, see if it works,
        // then copy and paste
        // OR.....
        return this.db.query(`
        insert into customers
        (name, email, address, password)
        values
        ('${this.name}','${this.email}','${this.address}','${this.password}');
        `);
        // line 26 allows you to inject javascript -- it's string interpolation
    }
    get(id) {
        return this.db.one(`
        select * from customers
            where customer_id=${id};
        `).then((result) => {
            this.name = result.name;
            this.email = result.email;
            this.address = result.address;
            // here we are mutating!
            // feels icky to manipulate customer instance
            // also we're using the keyword THIS
            // will it be the THIS that we expect with these nested callbacks?
            // instead of console logging the result, let's console log myCustomer.name in test-customer
            return result;
            // "whoever is coming after me, you must pass the data on to them!"
            // that is what we're doing with this return
        })
    }
}

module.exports = Customer;