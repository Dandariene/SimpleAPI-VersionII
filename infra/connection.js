const mysql = require('mysql');

//criando conexão com o banco 
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'cadastroclientes'
});

module.exports = connection;
