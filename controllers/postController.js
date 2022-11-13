const Post = require('../models/post');

const createPost = (req, res) =>{
    const {description,createdAt} = req.body;
    const newPost = new Post({
        description,
        createdAt
    });
    newPost.save((err,post)=>{
        if(err){
            return res.status(400).send({message:'Error al crear el anuncio/aviso'})
        }
        return res.status(200).send(post)
    })
}

module.exports ={
    createPost
}