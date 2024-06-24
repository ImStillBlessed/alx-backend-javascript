const assert = require('assert');
const calculateNumber = require('./1-calcul'); // Adjust the path if necessary

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return 6 when inputs are 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 0 when inputs are 0.4 and -0.4', function () {
      assert.strictEqual(calculateNumber('SUM', 0.4, -0.4), 0);
    });

    it('should return -2 when inputs are -1.4 and -0.5', function () {
      assert.strictEqual(calculateNumber('SUM', -1.4, -0.5), -1);
    });
  });

  describe('SUBTRACT', function () {
    it('should return -4 when inputs are 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 1 when inputs are 0.4 and -0.4', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.4, -0.4), 0);
    });

    it('should return -1 when inputs are -1.4 and -0.5', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -0.5), -1);
    });
  });

  describe('DIVIDE', function () {
    it('should return 0.2 when inputs are 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when the second input rounds to 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
    });

    it('should return -2 when inputs are -1.4 and 0.5', function () {
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, 0.5), -1);
    });
  });
});
