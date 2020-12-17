const Blog = require('../models/Blog');
const {
    multipleMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');
class SiteController {
    //* [GET] -> /
    index(req, res, next) {
        Blog.find({})
            .then((blogs) => {
                res.render('home', {
                    blogs: multipleMongooseToObject(blogs),
                });
            })
            .catch(next);
    }
    //* [GET] -> /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
