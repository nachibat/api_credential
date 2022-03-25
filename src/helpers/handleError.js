const httpError = (res, err, status = 400, msg = 'something_wrong') => {
    return res.status(status).json({
        ok: false,
        error: msg,
        detail: err
    });
}

const loginError = (res) => {
    return res.status(401).json({
        Error: "Autenticacion fallida."
    });
}

module.exports = { httpError, loginError }