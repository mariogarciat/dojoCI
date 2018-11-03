var assert    = require("chai").assert;
var CodeBreaker = require("../CodeBreaker");

var codeBreaker = new CodeBreaker();

describe("Tests de CodeBreaker ", function() {
	describe("Check guessSecret Function: ", function() {
		it("Check the returned value using: assert.equal(value,'value'): ", function() {
			result   = codeBreaker.guessSecret("1234");
			assert.equal(result, "xxxx");
		});
		it("Check the returned value using: assert.equal('1283','1234'): ", function() {
			result   = codeBreaker.guessSecret("1283");
			assert.equal(result, "xx_");
		});
		it("Check the returned value using: assert.equal('0000','1234'): ", function() {
			result   = codeBreaker.guessSecret("0000");
			assert.equal(result, "");
		});
		it("Check the returned value using: assert.equal('5634','1234'): ", function() {
			result   = codeBreaker.guessSecret("5634");
			assert.equal(result, "xx");
		});
		it("Check the returned value using: assert.equal('4312','1234'): ", function() {
			result   = codeBreaker.guessSecret("4312");
			assert.equal(result, "____");
		});
		it("Check the returned value using: assert.equal('4189','1234'): ", function() {
			result   = codeBreaker.guessSecret("4189");
			assert.equal(result, "__");
		});
		it("Check the returned value using: assert.equal('5674','1234'): ", function() {
			result   = codeBreaker.guessSecret("5674");
			assert.equal(result, "x");
		});
	});		
	
	
	
	
	
});	
