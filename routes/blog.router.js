const express = require('express');
const { createBlog, getBlog, getBlogs,updateBlog }  = require('../controller/blog.controller');


const router = express.Router();

router.post('/blog', createBlog);
router.get('/blog/:id', getBlog)
router.get('/blog', getBlogs);
router.put('/blog', updateBlog);

module.exports = router;