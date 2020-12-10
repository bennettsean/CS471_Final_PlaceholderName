'use strict';
var mongoose = require('mongoose');
const { MessagingConfigurationPage } = require('twilio/lib/rest/verify/v2/service/messagingConfiguration');
var Schema = mongoose.Schema;


// Tutor Schema matched to mongodb collection for simplicity - all values are required when making a tutor
var eventSchema = new Schema({
    Date: {
        type: String,
        required: 'Please enter ...'
    },
    Label: {
        type: String,
        required: 'Please enter ...'
    },
    Time: {
        type: String,
        required: 'Please enter a ...'
    },
    Notes: {
        type: String,
        required: 'Please enter ...'
    },
    Reminder: {
        type: String,
        required: '12/5/20,Meeting,9AM-10AM,Meeting with Dr.Mongan,30 minutes'
    }
});

module.exports = mongoose.model('EventSchema', eventSchema);