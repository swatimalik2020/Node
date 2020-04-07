const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const productRoutes = require('./routes/productRoute');
//const mysqlConnection = require('./configuration/db');
//const productQueries = require('./configuration/scripts');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/freight',productRoutes);

//mysqlConnection.query(productQueries.productTable);

app.listen(8888);