const express = require('express');
const mongoose = require('./utils/db');
const Blog = require('./models/blog.model');
const router = require('./routes/blog.router');


const app = express();
const port = 3000;
app.use(express.json())


app.use('/', router);


app.listen(port, () => {
    console.log(`Server started on port : ${port}`);
});


