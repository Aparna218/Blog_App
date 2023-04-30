const express = require('express');
const router = express.Router();

const {login, signup} = require("../controller/userController")
const {createPost, getPost, updatePost, deletePost} = require("../controller/blogController")


router.post('/signup',signup);
router.get('/login', login);

router.post('/createPost', createPost);
router.get('/getPost', getPost);
router.put('updatePost', updatePost);
router.delete('deletePost', deletePost)


module.exports = router;