const newsRouter = require('./news');
const blogsRouter = require('./blogs');
const siteRouter = require('./site');
function route(app) {
    app.use('/blogs', blogsRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
