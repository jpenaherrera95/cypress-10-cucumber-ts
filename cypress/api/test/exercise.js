const request = require('supertest');
const expect = require('chai').expect;
const response = require('../data/response.json');
const config = require('../data/config')
const payload = require('../data/payload.json')

describe('Exchange Convertion Test', () => {
    it('USD to EUR - Pass', (done) => {
        request(config.baseUrl)
            .post('/v2/conversion')
            .set('Accept', 'application/json')
            .set('Authorization', `token=${config.token}`)
            .send({payload})
            .end(function (err, res) {
                expect(res.statusCode).to.be.eql(200);
                expect(res.body).to.be.eql(response);
                if (err) {
                    throw err;
                }
                done();
            })
    })
})