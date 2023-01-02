import axios from "axios";
const createComent = (coment) => {
    const res = axios.post(`${process.env.SERVIDOR}/comment`,coment)
    return res
}
const getComent = async() => {
    const res = await axios.get(`${process.env.SERVIDOR}/comments`)
    return res
}
const getIdComent = async (id)=>{
    const respuesta =await axios.get(`${process.env.SERVIDOR}/comments/${id}`)
    return respuesta
}
const updateComent= async (id,coment)=>{
    const respuesta= await axios.put(`${process.env.SERVIDOR}/comment/update/${id}`,coment)
    return respuesta
}
const deleteComent=async(id,coment)=>{
    const respuesta = await axios.delete(`${process.env.SERVIDOR}/comment/delete/${id}`,coment)
    return respuesta
}

module.exports = {
    createComent,
    getComent,
    getIdComent,
    updateComent,
    deleteComent
}