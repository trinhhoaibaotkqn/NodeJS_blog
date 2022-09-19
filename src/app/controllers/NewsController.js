
class NewsController{
    //hàm xuất views

    // [GET] /news
    index(req,res){
        res.render('news')
    }

    // [GET] /news/:slug
    show(req, res){
        res.send('News detail');
    }
}

module.exports = new NewsController;