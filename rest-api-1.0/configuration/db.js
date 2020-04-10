const mssql = require('mssql');

let dbConfig= {
    user: 'sa',
    password: 'Winter2019',
    server: 'localhost',
    database: 'malik'
};

let dbConnection = new mssql.ConnectionPool(dbConfig);
dbConnection.connect((error)=>{
    if(error) {
        console.error('Error occurred during connecting database: ' + error.stack);
        return;
    }
    console.log('Database connection is successful');
});

module.exports = dbConnection;