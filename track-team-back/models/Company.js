const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema ({
    name: {
        type: String,
        required: 'Escribe el nombre de tu compañía',
        unique: true
    },
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }

});

module.exports = mongoose.model("Company", companySchema);