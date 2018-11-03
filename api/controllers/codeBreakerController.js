var codeBreaker = require('../../CodeBreaker.js')

exports.createSecret = function(req, res) {  
  codeBreaker.createSecret(req.body.secret);
  res.send('Created secret.');
};

exports.guess = function(req, res) {
  res.send(codeBreaker.guessSecret(req.params.secret));
};
