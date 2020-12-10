'use strict'
var mongoose = require('mongoose');

//example
exports.list_all_events = function (req, res) {
    Event.find({}, function (err, event) {
        if (err) {
            res.send(err);
        }
        res.json(event);
    });
};

exports.create_an_event = function (req, res) {
    var new_event = new Event(req.body);
    new_event.save(function (err, event) {
        if (err) {
            res.send(err);
        }
        res.json(event)
    });
};

exports.view_an_event = function (req, res) {
    Event.findById(req.params.id, function (err, event) {
        if (err) {
            res.send(err);
        }
        res.json(event)
    });
};

exports.update_an_event = function (req, res) {
    Event.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, tutor) {
        if (err) {
            res.send(err);
        }
        res.send(event);
    });
};

exports.delete_an_event = function(req, res) {
  Event.remove({
    _id: req.params.id
  }, function(err, event) {
    if (err){
      res.send(err);
    }
    res.json({ message: 'Event successfully deleted' });
  });
};
