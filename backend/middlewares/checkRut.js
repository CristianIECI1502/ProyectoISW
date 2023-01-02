const User=require('../models/user')

const checkRut =(req,res,next)=>{
    User.findOne({rut: req.body.rut}, (err,user) => {
        if(err) {
            return res.status(400).send({message:"Error al encontrar usuario"})
        }
        if (!user){
            return res.status(404).send({message:"Usuario no encontrado"})
        }
        return res.status(200).send({message:"Usuario logeado"})
    })
}


module.exports=checkRut