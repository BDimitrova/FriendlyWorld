const mongoose = require('mongoose');

let animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
    },
    years: {
        type: Number,
        required: true,
        minValue: 0,
    },
    kind: {
        type: String,
        required: true,
        minLength: 2,
    },
    image: {
        type: String,
        required: true,
        validate: /^https?:\/\//i
    },
    need: {
        type: String,
        required: true,
        minLength: 2,
    },
    location: {
        type: String,
        required: true,
        minLength: 2,
    },
    description: {
        type: String,
        required: true,
        minLength: 10,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    donation: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    ],

}, { timestamps: true });

animalSchema.method('getDonation', function () {
    return this.buyer.map(x => x._id);
})

let Animals = mongoose.model('Animals', animalSchema);

module.exports = Animals;