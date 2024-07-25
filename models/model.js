const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true // Enable timestamps for createdAt and updatedAt fields
});

module.exports = mongoose.model('Schema', toDoSchema);