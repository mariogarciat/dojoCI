var assert    = require("chai").assert;
var CodeBreaker = require("../CodeBreaker");

var codeBreaker = new CodeBreaker();

describe("Tests de CodeBreaker ", function() {
	describe("Check guessSecret Function: ", function() {
		it("Check the returned value using: assert.equal('1234','1234'): ", function() {
			result   = codeBreaker.guessSecret("1234");
			assert.equal(result, "xxxx");
        });
        
        it("Check the returned value using: assert.equal(,'1234'): ", function() {
			result   = codeBreaker.guessSecret();
			assert.equal(result, "");
        });

        it("Check the returned value using: assert.equal('1263','1234'): ", function() {
			result   = codeBreaker.guessSecret('1263');
			assert.equal(result, "xx_");
        });

        it("Check the returned value using: assert.equal('1563','1234'): ", function() {
			result   = codeBreaker.guessSecret('1563');
			assert.equal(result, "x_");
        });

        it("Check the returned value using: assert.equal('2341','1234'): ", function() {
			result   = codeBreaker.guessSecret('2341');
			assert.equal(result, "____");
        });

        it("Check the returned value using: assert.equal('2391','1234'): ", function() {
			result   = codeBreaker.guessSecret('2391');
			assert.equal(result, "___");
        });
    });		
    
	
	
	
	
});
