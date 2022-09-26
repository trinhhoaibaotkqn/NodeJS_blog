const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');

function route(app){
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/me',meRouter);
    app.use('/', siteRouter);
    //tuyến đường ngắn hơn phải để dưới
}

module.exports = route;//(use to import) const route = require('./routes')