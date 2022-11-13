const express = require('express');
const api = express.Router();
const postController =require('../controllers/postController');

api.post('/post',postController.createPost);
api.get('/posts',postController.getPosts);

module.exports = api;