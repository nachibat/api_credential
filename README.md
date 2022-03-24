# API Rest - Credencial facultad

Basic backend for Credentials

## Variables

Variables to configure: NODE_ENV, PORT, SECURE_PORT, DB_URI, DB_NAME, TOKEN_EXPIRATION and SEED

## SSL configuration

Copy the certificate files (server.crt, server.key) to the root of the project.

## Development

Install node repositories with `npm install`

Run the project with `npm run dev`

## Production

Install node repositories with `npm install --production`

Run the project with `npm start`

To declare the variables run `set NODE_ENV=prod& node src/server.js`