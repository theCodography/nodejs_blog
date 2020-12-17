const Blog = require('../models/Blog');
const {
    multipleMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');
class BlogController {
    //* [GET] -> /blogs
    index(req, res, next) {
        res.render('blogs/overview');
    }
    //* [GET] -> /blogs/:slug
    show(req, res, next) {
        Blog.findOne({ slug: req.params.slug })
            .then((blog) => {
                res.render('blogs/show', { blog: mongooseToObject(blog) });
            })
            .catch(next);
    }
}

module.exports = new BlogController();
