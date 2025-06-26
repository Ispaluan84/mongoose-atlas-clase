require ('dotenv').config();
const express = require('express');
const app = express();
const PORT = 8080;

const { dbConnection } = require('./config/config');

const routes = require('./routes')

dbConnection();

app.use(express.json());

app.use('/', routes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

