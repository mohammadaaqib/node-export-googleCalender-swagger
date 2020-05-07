'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    clientId: Schema.Types.String,
    userId: Schema.Types.String,
    agencyId: Schema.Types.String,
    name: Schema.Types.String,
    gender: Schema.Types.String,
    age: Schema.Types.Number,
    dob: Schema.Types.Date,
    firstName: Schema.Types.String,
    lastName: Schema.Types.String,
    active: Schema.Types.Boolean,
    crnId: Schema.Types.String,
    ethnicity: Schema.Types.String,
    zipCode: Schema.Types.Number,
    insuranceStatus: Schema.Types.String,
    housingStatus: Schema.Types.String,
    employmentStatus: Schema.Types.String,
    educationLevel: Schema.Types.String
}, {
    timestamps: true
});

module.exports = mongoose.model('Client', ClientSchema);