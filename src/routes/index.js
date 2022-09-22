const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');

function route(app){
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
    //tuyến đường ngắn hơn phải để dưới
}

module.exports = route;//(use to import) const route = require('./routes')