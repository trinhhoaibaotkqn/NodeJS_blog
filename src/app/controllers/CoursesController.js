const Course = require("../models/Course");
const { mongooseToObject } = require('../../util/mongoose')

class CoursesController{
    // [GET] /courses/:slug
    show(req, res, next){
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show',{course: mongooseToObject(course)});
            })
            .catch(next);
    }
    // [GET] /courses/create
    create(req, res){
        res.render('courses/create')
    }

    // [POST] /courses/create
    store(req, res){
        // res.json(req.body)
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/'))
            .catch(err => {

        })
    }
}

module.exports = new CoursesController;