const bcrypt = require('bcrypt');

const { httpError, loginError } = require('../helpers/handleError');
const userModel = require('../models/user.model');

const login = async (req, res) => {
    try {
        const { usuario, password, legajo } = req.body;
        const user = await userModel.findOne({ usuario, legajo });
        if (!user) { return loginError(res); }
        if (!bcrypt.compareSync(password, user.password)) { return loginError(res); }
        return res.json({
            usuario: user.usuario,
            legajo: user.legajo,
            tipo: user.tipo,
            dni: user.dni,
            apelNom: user.apelNom,
            especialidad: user.especialidad,
            anioCursa: user.anioCursa
        });
    } catch (e) {
        httpError(res, e);
    }
}

module.exports = { login }