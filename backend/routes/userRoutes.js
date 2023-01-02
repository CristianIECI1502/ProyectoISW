const express = require('express');
const api = express.Router();
const userController =require('../controllers/userController');
const checkRut =require('../middlewares/checkRut')

api.post('/createuser',userController.createUser);
api.get('/users/search',userController.getUsers);
api.get('/users/search/specific/:id',userController.GetSpecificUser);
api.put('/user/update/:id',userController.updateUser);
api.delete('/user/delete/:id',userController.deleteUser);
api.post('/login',checkRut)

module.exports = api;