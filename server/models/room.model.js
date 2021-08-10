const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomName: {type: String, required: true, trim: true},
    type: {type: String, required: true, trim: true},
    space: {type: Number, required: true},
    guests: {type: Number, required: true},
    beds: {type: Number, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true, trim: true},
    facilities: {type: Array, required: true},
    images: {type: Array, default: []}
});
