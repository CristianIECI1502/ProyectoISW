const comment = require('../models/comment');
const Comment = require('../models/comment');

const createComment = (req, res)=>{
    const{comentario, createdAt, post, user}=req.body;
    //console.log(name)
    const newComment = new Comment({
        comentario,
        createdAt,
        post,
        user
    });
    newComment.save((err,comment)=>{
        if(err){
            return res.status(400).send({message:'Error al crear comentario'})
        }
        return res.status(200).send(comment)
    })
}
const getComments =(req, res)=>{
            Comment.find({}).populate('user','name').populate('post').exec((err, comment)=>{
            if (err){
                return res.status(400).send({message:'no hay anuncios publicados'})
            }
            return res.status(200).send(comment)
    })
}
//const cuser = user.id;
const updateComment=(req, res) =>{
    const { id } = req.params;
    Comment.findByIdAndUpdate(id, req.body,(err,comments)=>{
        if (err){
            return res.status(400).send({message:"Error al encontrar los comentarios"})
        }
        if(!comments){
            return res.status(404).send({message: "comentarios no disponibles"})
        }
        console.log(comments.user);
        /*if(comments.user!=cuser){
            return res.status(403).send({message: "Usuario no puede editar este post"})
        }*/
        return res.status(200).send(comments)
    })
}

const deleteComment=(req, res)=>{
    const { id }=req.params;
    Comment.findByIdAndDelete(id, req.body,(err,comments)=>{
        if(err){
            return res.status(400).send({message:"Error al encontrar el comentario"})
        }
        if(!comments){
            return res.status(404).send({message:"comentario no disponible"})
        }
        if(user.role=='admin'){
            return res.status(200).send(comments)
        }
        console.log(comments.user);
        /*if(posts.user!=cuser){
            return res.status(403).send({message: "Usuario no puede eliminar este comentario"})
        } */
        return res.status(200).send(comments)
    })
}

module.exports ={
    createComment,
    getComments,
    updateComment,
    deleteComment
}