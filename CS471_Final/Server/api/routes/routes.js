module.exports = function (app) {
    var xList = require('../controllers/controller');

  // cors addition to allow replit access - uncomment if using replit
  /*
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next(); 
  });
  */

  // routes for after localhost:3000
  // used in conjunction with Postman Desktop - all routes are working


    app.route('/x')
    .get(x.list_all_x)
    .post(y.create_a_y);

  app.route('/x/:id')
    .get(x.view_a_x)
    .put(y.update_a_y)
    .delete(z.delete_a_z);
};