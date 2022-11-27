const express = require('express');
const api = express.Router();
const userController =require('../controllers/userController');

api.post('/createuser',userController.createUser);
api.get('/user/search',userController.getUser);
api.get('/user/search/specific',userController.GetSpecificUser);
api.put('/user/update/:id',userController.updateUser);
api.delete('/user/delete/:id',userController.deleteUser);

module.exports = api;