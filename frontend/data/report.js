import axios from "axios";
import report from "../../backend/models/report";

const getReports = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/report`);
    return response
}

const createReport = (reportar) => {
    const response = axios.post(`${process.env.SERVIDOR}/report`, reportar);
    return response
}

const updateReport = async (id) => {
    const response = await axios.get(`${process.env.SERVIDOR}/report/update/${id}`, report);
    return response
}

const deleteReport = async (id) => {
    const response = await axios.get(`${process.env.SERVIDOR}/report/delete/${id}`, report);
    return response
}


module.exports = {
    createReport,
    getReports,
    updateReport,
    deleteReport
}