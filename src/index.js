const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');

const app = express();
const port = 3000;

const route = require('./routes'); //tự động chọc vào file index

const db = require('./config/db');
//Connect to DB
db.connect();

//use static file and css in path src/public
app.use(express.static(path.join(__dirname, 'public')));

//Middleware
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json());

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