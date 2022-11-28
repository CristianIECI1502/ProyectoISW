const user = require('../models/user');
const User = require('../models/user');

const createUser = (req, res)=>{
    const{identificador_casa,name,password,rut,admin}=req.body;
    const newUser = new User({
        identificador_casa,
        name,
        password,
        rut,
        admin
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
        if(user.admin==false){
            return res.status(403).send({ message: "No tienes permiso suficiente."})
        }
        if(err){
            return res.status(400).send({message:'Error al obtener a los usuario'})
        }
        if (!user) {
            return res.status(404).send({ message: "No hay usuarios disponibles."})
        }
        return res.status(200).send(users)
    })
}

const GetSpecificUser = (req, res) => {
    const { id } = req.params;
    User.findById(id, (err, users) => {
        if(user.admin==false){
            return res.status(403).send({ message: "No tienes permiso suficiente."})
        }
        if (err) {
            return res.status(400).send({ message: "Error al obtener el usuario"})
        }
        if (!users) {
            return res.status(404).send({ message: "Usuario no encontrado"})
        }
        return res.status(200).send(users)
    })
}

const updateUser=(req, res) =>{
    const { id } = req.params;
    User.findByIdAndUpdate(id, req.body,(err,users)=>{
        if(user.admin==false){
            return res.status(403).send({ message: "No tienes permiso suficiente."})
        }
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
        if(user.admin==false){
            return res.status(403).send({ message: "No tienes permiso suficiente."})
        }
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
    GetSpecificUser,
    updateUser,
    deleteUser
}