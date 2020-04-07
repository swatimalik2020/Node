const mysql = require('mysql2');

let mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Malik',
    database: 'mysql'
});

mysqlConnection.connect((error)=>{
    if(error) {
        console.error('Error occurred during connecting database: ' + error.stack);
        return;
    }
    console.log('Database connection is successful');
});

module.exports = mysqlConnection;