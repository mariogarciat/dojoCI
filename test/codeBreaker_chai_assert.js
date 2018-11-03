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
