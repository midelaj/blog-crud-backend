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

const getBlogs = async (req, res) => {
    const blog = await Blog.find();
    console.log(blog);
    res.status(200).json(blog)

}

const getBlog = async (req, res) => {
    const id = req.query.id
    console.log(id);

    const blog = await Blog.findOne({ _id: id });
    console.log(blog);
    res.status(200).json(blog)

}


const updateBlog = async (req, res) => {
    const id = req.query.id;
    const updatedBlog = await Blog.findByIdAndUpdate(id, {
        title: req.body.title,
        blog: req.body.blog,
        author: req.body.author
    })

    console.log(updatedBlog);

    res.json({
        success: true,
        data: updatedBlog
    })
};



module.exports = { createBlog, getBlog, getBlogs, updateBlog };