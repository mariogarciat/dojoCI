var CodeBreaker = require('../../CodeBreaker')

var codeBreaker = new CodeBreaker()
exports.createSecret = function(req, res) {  
  
  codeBreaker.createSecret(req.body.secret);
  res.send('Created secret.');
};

exports.guess = function(req, res) {
  res.send(codeBreaker.guessSecret(req.params.secret));
};
