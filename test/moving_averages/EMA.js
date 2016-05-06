/**
 * Created by AAravindan on 5/3/16.
 */
var EMA = require('../../lib/moving_averages/EMA');
var assert = require('assert');
var data   = require('../data');

var prices = data.close;
var period = 9;
var expectedOutput = [
  138.34,
  140.53,
  144.92,
  151.72,
  161.45,
  173.54,
  187.48,
  198.69,
  216.23,
  229.04
]


describe('EMA (Exponential Moving Average)', function() {
  it('should calculate EMA using the calculate method', function() {
    assert.deepEqual(EMA.calculate({period : period, values : prices}), expectedOutput, 'Wrong Results');
  });

  it('should be able to get EMA from the get results', function() {
    var emaProducer = new EMA({period : period, values : prices});
    assert.deepEqual(emaProducer.getResult(),  expectedOutput, 'Wrong Results while getting results');
  });

  it('should be able to get EMA for the next bar using nextValue', function() {
    var emaProducer = new EMA({period : period, values : []});
    var results = [];
    prices.forEach(price => {
      var result = emaProducer.nextValue(price);
      if(result)
        results.push(result)
    });
    assert.deepEqual(results,  expectedOutput, 'Wrong Results while getting results');
  })
})
