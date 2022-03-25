const mongoose = require('mongoose');

let URI;

if (process.env.NODE_ENV === 'dev') {
    URI = `${process.env.DB_URI}/${process.env.DB_NAME}`;
} else {
    URI = `${process.env.DB_URI}/${process.env.DB_NAME}?authSource=admin`;
}

const dbConnect = () => {
    mongoose.connect(URI, {
        autoIndex: true
    }, (err, res) => {
        if (!err) {
            console.log('**** MongoDB Server READY ****');
        } else {
            console.log(err);
        }
    });
}

module.exports = { dbConnect }