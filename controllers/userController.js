const User = require('../models/user');

const createUser = (req, res)=>{
    const{name,password,rut}=req.body;
    const newUser = new User({
        name,
        password,
        rut,
        role
    });
    newUser.save((err,user)=>{
        if(err){
            return res.status(400).send({message:'Error al crear Usuario'})
        }
        return res.status(200).send(user)
    })
}
const getUser =(req, res)=>{
    User.find({},(err, user) =>{
        if(err){
            return res.status(400).send({message:'Error al obtener a los usuario'})
        }
        if (!user) {
            return res.status(404).send({ message: "No hay usuarios disponibles."})
        }
        return res.status(200).send(user)
    })
}

const GetSpecificUser = (req, res) => {
    const { id } = req.params;
    User.findById(id, (err, user) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el usuario"})
        }
        if (!user) {
            return res.status(404).send({ message: "Usuario no encontrado"})
        }
        return res.status(200).send(User)
    })
}

const updateUser=(req, res) =>{
    const { id } = req.params;
    User.findByIdAndUpdate(id, req.body,(err,user)=>{
        if (err){
            return res.status(400).send({message:"Error al encontrar los Usuario"})
        }
        if(!user){
            return res.status(404).send({message: "Usuario no existe"})
        }
        return res.status(200).send(user)
    })
}

const deleteUser=(req, res)=>{
    const { id }=req.params;
    User.findByIdAndDelete(id, req.body,(err,user)=>{
        if(err){
            return res.status(400).send({message:"Error al encontrar el Usuario"})
        }
        if(!user){
            return res.status(404).send({message:"Usuario no Existe"})
        }
        return res.status(200).send(user)
    })
}

module.exports ={
    createUser,
    getUser,
    GetSpecificUser,
    updateUser,
    deleteUser
}