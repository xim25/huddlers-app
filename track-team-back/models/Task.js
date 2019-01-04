const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Resolved", "Doing"],
        default: "Doing"
    },
    finalDate: {
        type: String,
        required: true
    },
    inTime: {
        type: Boolean,
        default: false
    },
    _project: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    _owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    _creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    });

module.exports = mongoose.model("Task", taskSchema);