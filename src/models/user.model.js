const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    usuario: {
        type: String,
        required: [true, 'Usuario obligatorio']
    },
    password: {
        type: String,
        required: [true, 'Password obligatorio']
    },
    legajo: {
        type: Number,
        required: [true, 'Legajo obligatorio']
    },
    tipo: {
        type: String,
        required: [true, 'Tipo obligatorio']
    },
    dni: {
        type: Number,
        required: [true, 'Dni obligatorio']
    },
    apelNom: {
        type: String,
        required: [true, 'ApelNom obligatorio']
    },
    especialidad: {
        type: String,
        required: [true, 'Especialidad obligatorio']
    },
    anioCursa: {
        type: Number,
        required: [true, 'Año obligatorio']
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('usuarios', userSchema);