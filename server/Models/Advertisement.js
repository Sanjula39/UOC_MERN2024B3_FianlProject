const mongoose = require('mongoose');

const AdvertisementSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Advertisement', AdvertisementSchema);
