module.exports = function SortMiddleware(req, res, next){
    //res.locals-- thuộc tính này có thể đặt các biến có thể truy cập vào template renderd(view)
    res.locals._sort = {
        enabled: false,
        type: 'default',
    };

    if(req.query.hasOwnProperty('_sort')){
        Object.assign(res.locals._sort,{
            enabled: true,
            type: req.query.type,//asc or desc
            column: req.query.column,//fiel
        })
    }

    next();
}