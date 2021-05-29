/*
Realizacion de una api por medio de express,nodejs y mongoDB basandose en el siguiente video de youtube: 
https://www.youtube.com/watch?v=vjf774RKrLc
*/
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var PORT = process.env.PORT || 5000;
//Ocultamos los datos de login a la BD
require('dotenv/config');
//Importamos los comandos de la api
const postsRoute = require('./routes');
const Post = require('./models/Post');
app.use(express.json());
//Aqui llamamos a los que usaremos.
app.use('/', postsRoute);
//Mostramos todos los datos que hay en la base para ayudar a ver mejor lo que estamos manejaando: 
app.get('/', async(req,res) =>{
    try{
        const posts=await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({message:err});
    }
})
//Conexion a la BD
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
    console.log('Conectado a la base!'));
//Como recibimos el server.
