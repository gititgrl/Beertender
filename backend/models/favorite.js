const mongoose = require('mongoose')

const favoriteSchema = new mongoose.Schema({
    name: String,
    ratings: {
        type: mongoose.Mixed,
        1: Number,
        2: Number,
        3: Number,
        4: Number,
        5: Number
    }
})

const Favorite = mongoose.model('Favorite', favoriteSchema)

module.exports = Favorite