module.exports = function(app) {
    var codeBreakerController = require('../controllers/codeBreakerController.js');
  
    // todoList Routes
    app.route('/guess/:secret')
      .get(codeBreakerController.guess)
  
    app.route('/guess')
        .post(codeBreakerController.createSecret);
};
  