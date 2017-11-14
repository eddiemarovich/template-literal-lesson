const chai = require('chai');
const expect = chai.expect;
const main = require('../main');
const today = '11/14/17';
const x = 5;

describe('printDate', function () {
  it('should return the correct date', function () {
    const expected = "Today's date is: 11/14/17";
    const actual = main.printDate(today);
    expect(actual).to.equal(expected);
  })
  it('should use a template literal rather than concatenating', function () {
    const matches = main.printDate.toString().match(/\+/g);
    expect(matches).to.equal(null);
  })
})

describe('squareNum', function () {
  it('should return the correct value', function () {
    const expected = "5 squared is 25 and not 125";
    const actual = main.squareNum(x);
    expect(actual).to.equal(expected);
  })
  it('should use a template literal rather than concatenating', function () {
    const matches = main.squareNum.toString().match(/\+/g);
    expect(matches).to.equal(null);
  })
})
