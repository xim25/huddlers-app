const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    _creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description: {
        type: String,
    },
    done: {
        type: Boolean,
        default: false
    },
},
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    });

module.exports = mongoose.model("Project", projectSchema);