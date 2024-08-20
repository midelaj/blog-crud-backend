const express = require('express');
const { createBlog, getBlog }  = require('../controller/blog.controller');


const router = express.Router();

router.post('/blog', createBlog);
router.get('/blog', getBlog)

module.exports = router;