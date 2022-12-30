import { useAccordionStyles } from "@chakra-ui/react";
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
    const respuesta = await axios.delete(`${process.env.SERVIDOR}/post/delete/${id}`,post)
    return respuesta
}
const getIdPost = async (id)=>{
    const respuesta =await axios.get(`${process.env.SERVIDOR}/posts/${id}`)
    return respuesta
}
const updatePost= async (id,post)=>{
    const respuesta= await axios.put(`${process.env.SERVIDOR}/post/update/${id}`,post)
    return respuesta
}

module.exports = {
    getPosts,
    createPost,
    updatePost,
    getIdPost,
    deletePost
}