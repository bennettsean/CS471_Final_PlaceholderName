'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Tutor Schema matched to mongodb collection for simplicity - all values are required when making a tutor
var xschema = new Schema({
    a: {
      type: String,
      required: 'Please enter ...'
    },
    b: {
      type: String,
      required: 'Please enter ...'
    },
    c: {
      type: String,
      required: 'Please enter ...'
    },
    d: {
      type: String,
      required: 'Please enter ...'
    },
    e: {
      type: String,
      required: 'Please enter ...'
    },
    f: {
      type: String,
      required: 'Please enter ...'
    }
  });
  
  module.exports = mongoose.model('xschema', xschema);