const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController{
    // [GET] /home
    home(req,res,next){//next - middleware
        //Use callback
        // Course.find({},function(err,courses){
        //     if(!err){
        //         res.json(courses);
        //     }else{
        //         next(err);
        //         // res.status(400).json({ error: 'ERROR!!!'})
        //     }
        // });
        //Use promise
        Course.find({})
            .then(courses => {
                courses = mutipleMongooseToObject(courses);
                //handlebars đưa về object nằm trong proto cần toObject trong until
                res.render('home',{ courses })//courses: courses
            })
            .catch(next)//.catch(err => next(err))
        // res.render('home');
    }

    // [GET] /search
    search(req, res){
        res.render('search');
    }
}

module.exports = new SiteController;