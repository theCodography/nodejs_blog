const Blog = require('../models/Blog');
const {
    multipleMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');
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
    show(req, res, next) {
        Blog.find({})
            .then((blogs) => {
                // res.json('news', {
                //     blogs: mongooseToObject(blogs),
                // });
                res.json(mongooseToObject(blogs));
            })
            .catch(next);
    }
}

module.exports = new NewsController();
