const express = require('express');
const api = express.Router();
const commentController =require('../controllers/commentController');

api.post('/comment',commentController.createComment);
api.get('/comments',commentController.getComments);
api.put('/comment/update/:id',commentController.updateComment);
api.delete('/comment/delete/:id',commentController.deleteComment);
api.get('/comments/:id',commentController.comentario);

module.exports = api;