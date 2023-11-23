const calculate = require('./0-calcul.js');
const assert = require('assert');

describe('calculate numbers', function(){ 
	it('Should round the numbers', function() {
		const result = calculate(3.4, 4.6);
	assert.strictEqual(result, 8);
	});
});
