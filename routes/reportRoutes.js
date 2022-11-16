const express = require('express');
const api = express.Router();
const reportController =require('../controllers/reportController');

api.post('/report',reportController.createReport);
api.get('/reports',reportController.getReport);
api.put('/report/update/:id',reportController.updateReport);
api.delete('/report/delete/:id',reportController.deleteReport);

module.exports = api;