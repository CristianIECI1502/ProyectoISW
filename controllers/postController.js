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
const getPosts =(req, res)=>{
    /*Post.find({},(err, posts) =>{
        if(err){
            return res.status(400).send({message:'no hay anuncios publicados'})
        }
        return res.status(200).send(posts)
    })*/
    Post.find({}).populate('user','name').exec((err, post)=>{
        if (err){
            return res.status(400).send({message:'no hay anuncios publicados'})
        }
        return res.status(200).send(post)
    })
}
const updatePost =(req, res)=>{
    const { id } = req.params;
    Post.findByIdAndUpdate(id, req.body,(err, posts)=>{
        if (err){
            return res.status(400).send({message:"Error al encontrar la publicacion"})
        }
        if(!posts){
            return res.status(404).send({message: "Post no disponible"})
        }
        return res.status(200).send(posts)
    })

}

const deletePost = (req, res)=>{
    const { id } = req.params;
    Post.findByIdAndDelete(id, req.body,(err, posts)=>{
        if (err){
            return res.status(400).send({message:"Error al encontrar la publicacion"})
        }
        if(!posts){
            return res.status(404).send({message: "Post no disponible"})
        }
        return res.status(200).send(posts)
    })
}

module.exports ={
    createPost,
    getPosts,
    updatePost,
    deletePost
}