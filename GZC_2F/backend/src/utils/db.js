const pg = require('pg'); // Importa o driver

const pool = new pg.Pool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'dw123',
    database: process.env.DB_NAME || 'login_jwt',
    waitForConnections: true,
    connectionLimit: 10,
});

module.exports = pool;