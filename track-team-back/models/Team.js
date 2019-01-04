const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const teamSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    _company: {
        type: Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    }
});

module.exports = mongoose.model("Team", teamSchema);