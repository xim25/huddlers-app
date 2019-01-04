const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    body: {
        type: String,
        required: true
    },
    _task: {
        type: Schema.Types.ObjectId,
        ref: 'Task',
        required: true
    },
    _owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model("Comment", commentSchema);