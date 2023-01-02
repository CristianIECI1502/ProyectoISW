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
    console.log(res);
    Post.find({}).populate({path:'user',select:'name'}).populate('comment').exec((err, post)=>{
        if (err){
            return res.status(400).send({message:'no hay anuncios publicados'})
        }
        return res.status(200).send(post)
    })
}
const postspc = (req, res) => {
    const { id } = req.params;
    Post.findById(id).populate({ path: 'user',select:'name' }).exec((err, post) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el post" })
        }
        if (!post) {
            return res.status(404).send({ message: "posto no encontrado" })
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
    console.log(id)
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
    postspc,
    deletePost
}