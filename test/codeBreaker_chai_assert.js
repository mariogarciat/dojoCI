var assert    = require("chai").assert;
var CodeBreaker = require("../CodeBreaker");

var codeBreaker = new CodeBreaker();

describe("Tests de CodeBreaker ", function() {
	describe("Check guessSecret Function: ", function() {
		it("Check the returned value using: assert.equal(value,'value'): ", function() {
			result   = codeBreaker.guessSecret("1234");
			assert.equal(result, "xxxx");
		});
	});		
	
	
	
	
});
