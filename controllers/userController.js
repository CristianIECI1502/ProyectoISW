const User = require('../models/user');

const createUser = (req, res)=>{
    const{name,password}=req.body;
    //console.log(name)
    const newUser = new User({
        name,
        password
    });
    newUser.save((err,user)=>{
        if(err){
            return res.status(400).send({message:'Error al crear Usuario'})
        }
        return res.status(200).send(user)
    })
}
const getUsers =(req, res)=>{
    User.find({},(err, users) =>{
        if(err){
            return res.status(400).send({message:'no hay Usuarios'})
        }
        return res.status(200).send(users)
    })
}

const updateUser=(req, res) =>{
    const { id } = req.params;
    User.findByIdAndUpdate(id, req.body,(err,users)=>{
        if (err){
            return res.status(400).send({message:"Error al encontrar los Usuario"})
        }
        if(!users){
            return res.status(404).send({message: "Usuario no existe"})
        }
        return res.status(200).send(users)
    })
}

const deleteUser=(req, res)=>{
    const { id }=req.params;
    User.findByIdAndDelete(id, req.body,(err,users)=>{
        if(err){
            return res.status(400).send({message:"Error al encontrar el Usuario"})
        }
        if(!users){
            return res.status(404).send({message:"Usuario no Existe"})
        }
        return res.status(200).send(users)
    })
}

module.exports ={
    createUser,
    getUsers,
    updateUser,
    deleteUser
}