var expect = require('chai').expect;

var { sortJson, missingRight } = require('./jsonutils');


describe('sortJson', function () {
    it('should sort by key', function () {
        const data = {
            "eins": 1,
            "zwei": 2,
            "drei": 3
        }
        const sortedData = sortJson(data);
        expect(Object.keys(sortedData)).to.have.ordered.members(['drei', 'eins', 'zwei']);
    });
});

describe('missingRight', function () {
    it('should extract missing elements', function () {
        const left = {
            "eins": 1,
            "zwei": 2,
            "drei": 3
        };
        const right = {
            "zwei": 2
        }
        expect(missingRight(left, right)).to.eql({
            "eins": 1, 
            "drei": 3
        });
    });
});
