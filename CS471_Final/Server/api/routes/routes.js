module.exports = function (app) {
    var EventList = require('..controllers/controller');

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

    app.route('/events')
        .get(EventList.list_all_events)
        .post(EventList.create_an_event);

    app.route('/events/:id')
        .get(EventList.view_an_event)
        .put(EventList.update_an_event)
        .delete(EventList.delete_an_event);
};