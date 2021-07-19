const express = require('express');
const cors = require('cors');

const app = express();

//Conexión a router

//Conexión a DB

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = app;