import axios from "axios";
const createComent = (coment) => {
    const res = axios.post(`${process.env.SERVIDOR}/comment`,coment)
    return res
}
const getComent = async() => {
    const res = await axios.get(`${process.env.SERVIDOR}/comments`)
    return res
}
module.exports = {
    createComent,
    getComent
}