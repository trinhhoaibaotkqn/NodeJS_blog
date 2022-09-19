const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

const route = require('./routes'); //tự động chọc vào file index

//use static file and css in path src/public
app.use(express.static(path.join(__dirname, 'public')));

//Middleware
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

//HTTP logger
//app.use(morgan('combined'));

//Template engine (npm install express-handlebars)
const handlebars = exphbs.create({ extname: '.hbs' }); //.handlebars->.hbs
      app.engine('.hbs', handlebars.engine);
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
  console.log(`Example app listening http://localhost:${port}`);
});
