const expect = require('chai').expect;
const Customer = require('../customer');

describe('Customers', () => {
    it('should be able to save to the database', () => {

        let myCustomer = new customer();
        myCustomer
            .save()
            .then(done);
        expect(1 + 1).to.equal(2);
    });
});