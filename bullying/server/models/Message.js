const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const messageSchema = new mongoose.Schema({
    refToOlderBrother:Schema.Types.ObjectId,
    refToYoungerBrother:Schema.Types.ObjectId,
    message:String,
    date: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
