var mongoose = require('mongoose');

var Stuff = mongoose.model('Stuff', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true

    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {Stuff};