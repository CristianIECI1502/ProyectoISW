const Post = require('../models/post');
const user = require('../models/user');

const createPost = (req, res) =>{
    const {description,createdAt,user} = req.body;
    const newPost = new Post({
        description,
        createdAt,
        user
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
    Post.find({}).populate('user','name').populate('comment').exec((err, post)=>{
        if (err){
            return res.status(400).send({message:'no hay anuncios publicados'})
        }
        return res.status(200).send(post)
    })
}
var cuser = user.id;
console.log("id de usuario ",cuser);
const updatePost =(req, res)=>{
    const { id } = req.params;
    Post.findByIdAndUpdate(id, req.body,(err, posts)=>{
        if (err){
            return res.status(400).send({message:"Error al encontrar la publicacion"})
        }
        if(!posts){
            return res.status(404).send({message: "Post no disponible"})
        }
        if(user.role=='admin'){
            return res.status(200).send(posts)
        }
        console.log(posts.user);
        if(posts.user!=cuser){
            return res.status(403).send({message: "Usuario no puede editar este post"})
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
        if(user.role=='admin'){
            return res.status(200).send(posts)
        }
        console.log(posts.user);
        if(posts.user!=cuser){
            return res.status(403).send({message: "Usuario no puede editar este post"})
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