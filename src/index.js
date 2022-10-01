const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const SortMiddleware = require('./app/middlewares/SortMiddleware');

const app = express();
const port = 3000;

const route = require('./routes'); //tự động chọc vào file index

const db = require('./config/db');
//Connect to DB
db.connect();

//use static file and css in path src/public
app.use(express.static(path.join(__dirname, 'public')));

//Middleware cấu trúc lại dữ liệu lưu vào object req.body khi submit
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json());

//Custom middleware
app.use(SortMiddleware);

// override with POST having ?_method=DELETE/PUT
app.use(methodOverride('_method'));

//HTTP logger
//app.use(morgan('combined'));

//Template engine (npm install express-handlebars)
app.engine('.hbs', exphbs.engine({
  extname: '.hbs',
  helpers:{
    sum: function(a,b){
      return a+b;
    },
    sortable: (field, sort)=>{
      const sortType = field === sort.column ? sort.type : 'default'
      const icons = {
        default: 'fa fa-sort',
        asc: 'fa fa-sort-amount-asc',
        desc: 'fa fa-sort-amount-desc',
      }
      const types = {
        default: 'desc',
        asc: 'desc',
        desc: 'asc',
      }
      const icon = icons[sortType];
      const type = types[sortType];
      //url tiếp theo cho thẻ a sau khi click
      return `<a href="?_sort&column=${field}&type=${type}">
                <i class="${icon}" aria-hidden="true"></i>
              </a>`;
    }
  } 
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));


//Route init
route(app);

// app.post('/search', (req, res) => {
// console.log(req.body)
// res.send('');//body
// })

//Start web server nhờ express
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});