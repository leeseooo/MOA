const mongoose = require('mongoose');

const boothSchema = mongoose.Schema({
    owner: {
        type: String,
    },
    title: {
        type: String,
    },
    image: {
        type: Schema.Types.ObjectId,
        ref: 'Image'
    },
    boothStart: {
        type: Date,
    },
    boothEnd: {
        type: Date,
    }
})

const Booth = mongoose.model('Booth', boothSchema)

module.exports = { Booth }