const express = require('express');
const api = express.Router();
const reportController =require('../controllers/reportController');

api.post('/comment',reportController.createReport);
api.get('/comments',reportController.getReport);
api.put('/comment/update/:id',reportController.updateReport);
api.delete('/comment/delete/:id',reportController.deleteReport);

module.exports = api;