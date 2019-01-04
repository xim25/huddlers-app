const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");


const userSchema = new Schema ({
    username: {
        type: String,
        required: 'Necesitas un nombre de usuario',
        unique: true
    },
    email: {
        type: String,
        unique: 'Ya existe una cuenta con esta dirección',
        required: true
    },
    name: String,
    lastname: String,
    password: String,
    _company: {type: Schema.Types.ObjectId, ref: 'Company'},
    _team: {type: Schema.Types.ObjectId, ref: 'Team'},
    role: {
        type: String,
        enum: ['Administrador', 'Líder de equipo', 'Miembro de equipo'],
        default: 'Miembro de equipo'
    },
    active: {
        type: Number,
        default: 1
    },
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});


userSchema.plugin(passportLocalMongoose, {usernameField: "email"});

module.exports = mongoose.model("User", userSchema);