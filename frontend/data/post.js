import axios from "axios";

const getPosts = async () =>{
    const respuesta= await axios.get(`${process.env.SERVIDOR}/posts`)
    return respuesta
  }
const createPost=(post)=>{
    const respuesta =  axios.post(`${process.env.SERVIDOR}/post`,post)
    return respuesta
}
const deletePost=async(id,post)=>{
    const respuesta = await axios.get(`${process.env.SERVIDOR}/post/delete/${id}`,post)
    return respuesta
}

module.exports = {
    getPosts,
    createPost,
    deletePost
}