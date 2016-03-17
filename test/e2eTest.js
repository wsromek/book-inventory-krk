var request = require('supertest');
var testStockRepo = require('../repositories/inMemoryStockRepository')();
var app = require('../app')(testStockRepo);
var mocha = require('mocha');

describe('Book inventory', function(){
    it('allows adding books to inventory', function(done){
        request(app)
            .post('/stock')
            .set('Content-Type', 'application/json')
            .send({"isbn": "1234567890", "count" : 10})
            .expect('Content-Type', /json/)
            .expect(200, {
                "isbn" : "1234567890",
                "count": 10
            }, done);
    });
});
