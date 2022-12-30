const express = require('express');
const api = express.Router();
const postController =require('../controllers/postController');

api.post('/post',postController.createPost);
api.get('/posts',postController.getPosts);
api.get('/posts/:id',postController.postspc);
api.put('/post/update/:id',postController.updatePost);
api.delete('/post/delete/:id',postController.deletePost);

module.exports = api;