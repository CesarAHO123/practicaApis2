const { json } = require('body-parser');
const express=require('express');
const router = express.Router();
const Post=require('./models/Post');

//Agregar a las mascotas
router.post('/add',(req,res) => {
   const post=new Post({
       id:req.body.id,
       nombre:req.body.nombre,
       raza:req.body.raza,
       edad:req.body.edad,
       foto:req.body.foto
   });
post.save()
.then(data => {
    res.json(data);
}).catch(err => {
    res.json({message: err});
})
});
//Eliminar a las mascotas en base a su id
router.delete('/:postId',async (req,res) =>
{
    try{
    const removedPost= await Post.remove({id:req.params.postId});
    res.json(removedPost);
    }catch(err){
        res.json({message: err});
    }
})
module.exports=router;
