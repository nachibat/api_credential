const bcrypt = require('bcrypt');
const { httpError } = require('../helpers/handleError');
const userModel = require('../models/user.model');

const getUser = (req, res) => {
    return res.json({ ok: true, msg: 'Get User' });
}

const createUser = async (req, res) => {
    try {
        const { usuario, legajo, tipo, dni, apelNom, especialidad, anioCursa } = req.body;
        const password = bcrypt.hashSync(req.body.password, 10);
        const respDetail = await userModel.create({ usuario, password, legajo, tipo, dni, apelNom, especialidad, anioCursa });
        return res.json({
            ok: true,
            userCreated: respDetail
        });
    } catch (e) {
        httpError(res, e);
    }
}

module.exports = { getUser, createUser }