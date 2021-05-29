const mongoose=require('mongoose');
//Describimos como se manejan los datos en nuestra BD de MongoDB
const PostSchema=mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    raza: String,
    edad: String,
    foto: String
});
module.exports=mongoose.model('Posts',PostSchema)