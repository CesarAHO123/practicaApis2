/*
Realizacion de una api por medio de express,nodejs y mongoDB
*/
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var PORT = process.env.PORT || 5000;
require('dotenv/config');
//Importamos los comandos de la api
const postsRoute = require('./routes');
app.use(express.json());
//Aqui llamamos a los que usaremos.
app.use('/', postsRoute);

//Conexion a la BD
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
    console.log('Conectado a la base!'));
//Como recibimos el server.
