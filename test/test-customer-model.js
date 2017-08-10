const expect = require('chai').expect;
const Customer = require('../customer');

describe('Customers', () => {
    it('should be able to save to the database',
    (done) => {

        let myCustomer = new Customer('me', 'me@me.com', '123 me street', 'm3m3m3');
        // if you pass these into the constructor,
        // the constructor should be ready to RECEIVE THEM

        // in any of your models,
        // you should be able to
        // Create
        // Retrieve -- using SQL, this would be select -- a surefire way to identify is
                                    // whatever you used as its primary key
                                    // so now we need to find out,
                                    // when we write it to the database, do we find out?
        // Update
        // Delete

        myCustomer
            .save()
            .then((result) => {
                
                done();
            });
        });
        it('should be able to get a customer from the database', (done) => {
            let myCustomer = new Customer();
            myCustomer
                .get(1)
                .then((result) => {
                    // console.log('hey you got meee ;)', result);
                    console.log(myCustomer.name);
                    done();
                });
        });
    });