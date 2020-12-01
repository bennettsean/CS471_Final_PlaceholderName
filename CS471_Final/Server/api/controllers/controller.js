'use strict'
var mongoose = require('mongoose');

//example
exports.list_all_x = function (req, res) {
    a.x({}, function (err, y) {
        if (err) {
            res.send(err);
        }
        res.json(a);
    });
};