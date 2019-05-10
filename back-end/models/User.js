const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true },
    password: {type: String, required: true},
    boards: [{type: mongoose.Schema.Types.ObjectId, ref: 'Board'}]
})

const user = mongoose.model('User', userSchema);

module.exports = User;