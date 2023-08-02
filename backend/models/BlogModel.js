const mongoose = require('mongoose');
const schema = mongoose.Schema;

const model = new schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('BlogModel', model);