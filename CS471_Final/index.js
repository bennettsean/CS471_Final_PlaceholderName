var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    x = require('./api/models/model'),
    bodyParser = require('body-parser');


const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");


mongoose.Promise = global.Promise;
// connecting to mongodb
// may need to change user/pass
mongoose.connect('mongodb+srv://mongouser:FIf8cpf9p4z8uRRG@cluster0.57mqy.mongodb.net/Tutors?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


var routes = require('./api/routes/routes');
routes(app);

app.listen(port);
console.log("listening on port: " + port);