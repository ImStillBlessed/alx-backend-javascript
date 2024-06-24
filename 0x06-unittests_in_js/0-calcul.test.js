const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return 4 when inputs are 1.4 and 2.5', function () {
    assert.strictEqual(calculateNumber(1.4, 2.5), 4);
  });

  it('should return 0 when inputs are 0.4 and -0.4', function () {
    assert.strictEqual(calculateNumber(0.4, -0.4), 0);
  });

  it('should return -2 when inputs are -1.4 and -0.5', function () {
    assert.strictEqual(calculateNumber(-1.4, -0.5), -1);
  });

  it('should return 3 when inputs are 1.6 and 1.2', function () {
    assert.strictEqual(calculateNumber(1.6, 1.2), 3);
  });

  it('should return 6 when inputs are 2.5 and 3.5', function () {
    assert.strictEqual(calculateNumber(2.5, 3.5), 7);
  });

  it('should return 1 when inputs are 0.6 and 0.4', function () {
    assert.strictEqual(calculateNumber(0.6, 0.4), 1);
  });

  it('should return -1 when inputs are -0.6 and -0.4', function () {
    assert.strictEqual(calculateNumber(-0.6, -0.4), -1);
  });

  it('should return 0 when inputs are 0 and 0', function () {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
});
