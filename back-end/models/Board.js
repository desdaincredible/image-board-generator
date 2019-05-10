const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    images: []
})

const board = mongoose.model('Board', boardSchema);

module.exports = Board;