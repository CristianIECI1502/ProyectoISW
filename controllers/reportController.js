const Report = require('../models/report');

const createReport = (req, res)=>{
    const{name,status}=req.body;
    //console.log(name)
    const newReport = new Report({
        name,
        status
    });
    newReport.save((err,report)=>{
        if(err){
            return res.status(400).send({message:'Error al crear el reporte'})
        }
        return res.status(200).send(report)
    })
}
const getReport =(req, res)=>{
    Report.find({},(err, reports) =>{
        if(err){
            return res.status(400).send({message:'no hay reportes'})
        }
        return res.status(200).send(reports)
    })
}

const updateReport=(req, res) =>{
    const { id } = req.params;
    Report.findByIdAndUpdate(id, req.body,(err,reports)=>{
        if (err){
            return res.status(400).send({message:"Error al encontrar los reportes"})
        }
        if(!reports){
            return res.status(404).send({message: "reportes no disponibles"})
        }
        return res.status(200).send(reports)
    })
}

const deleteReport=(req, res)=>{
    const { id }=req.params;
    Report.findByIdAndDelete(id, req.body,(err,reports)=>{
        if(err){
            return res.status(400).send({message:"Error al encontrar el reporte"})
        }
        if(!reports){
            return res.status(404).send({message:"reporte no disponible"})
        }
        return res.status(200).send(reports)
    })
}

module.exports ={
    createReport,
    getReport,
    updateReport,
    deleteReport
}