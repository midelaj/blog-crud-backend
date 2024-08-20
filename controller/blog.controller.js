const Blog = require('../models/blog.model');

const createBlog = async (req, res) => {

    const blog = new Blog({
        title: req.body.name,
        blog: req.body.blog,
        author: req.body.author
    })

    await blog.save();

    res.status(200).json(blog);
};

const getBlog = async (req, res) => {
    const blog = await Blog.find();
    console.log(blog);
    
}
module.exports = {createBlog,getBlog};