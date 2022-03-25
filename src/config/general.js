// Enviroment
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Port
process.env.PORT = process.env.PORT || 3000;
process.env.SECURE_PORT = process.env.SECURE_PORT || 4000;

process.env.DB_URI = process.env.DB_URI || 'mongodb://localhost:27017';
process.env.DB_NAME = process.env.DB_NAME || 'credencial';