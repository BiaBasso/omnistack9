const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({

    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId, // O que irei usar para comparar (o id)
        ref: 'User' // Referindo qual o model
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId, // O que irei usar para comparar (o id)
        ref: 'Spot' // Referindo qual o model
    }
});

module.exports = mongoose.model('Booking', BookingSchema);