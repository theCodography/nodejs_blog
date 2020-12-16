const Blog = require('../models/Blog');
const { multipleMongooseToObject } = require('../../util/mongoose');
class NewsController {
    //* [GET] -> /news
    index(req, res, next) {
        Blog.find({})
            .then((blogs) => {
                res.render('news', {
                    blogs: multipleMongooseToObject(blogs),
                });
            })
            .catch(next);
    }
    //* [GET] -> /news/:slug
    show(req, res) {
        res.send('NEWS DETAILS!');
    }
}

module.exports = new NewsController();
