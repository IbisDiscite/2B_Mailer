const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    subject: String,
    text: String
});

module.exports = mongoose.model('Message', messageSchema);
