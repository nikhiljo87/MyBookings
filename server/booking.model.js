const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookingData = new Schema({
    booking_name: {
        type: String
    },
    booking_id: {
        type: String
    },
    booking_date: {
        type: String
    },
    booking_status: {
        type: String
    }
});
module.exports = mongoose.model('bookinglist', bookingData);