const expect = require('chai').expect;
const Customer = require('../customer');

describe('Customers', () => {
    it('should be able to save to the database', () => {

        let myCustomer = new Customer('me', 'me@me.com', '123 me street', 'm3m3m3');
        // if you pass these into the constructor,
        // the constructor should be ready to RECEIVE THEM
        myCustomer
            .save()
            .then(done);
        expect(1 + 1).to.equal(2);
    });
});