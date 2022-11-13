const express = require('express');
const api = express.Router();
const postController =require('../controllers/postController');

api.post('/post',postController.createPost);

module.exports = api;