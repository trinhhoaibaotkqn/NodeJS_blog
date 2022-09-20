const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

const route = require('./routes'); //tự động chọc vào file index
<<<<<<< HEAD
const db = require('./config/db');

//Connect to DB
db.connect();
=======

>>>>>>> cf81768ddf88a71d1fe4db1499f277ef26a6a0af
//use static file and css in path src/public
app.use(express.static(path.join(__dirname, 'public')));

//Middleware
app.use(
<<<<<<< HEAD
    express.urlencoded({
        extended: true,
    }),
=======
  express.urlencoded({
    extended: true,
  }),
>>>>>>> cf81768ddf88a71d1fe4db1499f277ef26a6a0af
);
app.use(express.json());

//HTTP logger
//app.use(morgan('combined'));

//Template engine (npm install express-handlebars)
const handlebars = exphbs.create({ extname: '.hbs' }); //.handlebars->.hbs
<<<<<<< HEAD
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
=======
      app.engine('.hbs', handlebars.engine);
      app.set('view engine', '.hbs');
      app.set('views', path.join(__dirname, 'resources/views'));
>>>>>>> cf81768ddf88a71d1fe4db1499f277ef26a6a0af

//Route init
route(app);

// app.post('/search', (req, res) => {
// console.log(req.body)
// res.send('');//body
// })

//Start web server nhờ express
app.listen(port, () => {
<<<<<<< HEAD
    console.log(`App listening at http://localhost:${port}`);
=======
  console.log(`Example app listening http://localhost:${port}`);
>>>>>>> cf81768ddf88a71d1fe4db1499f277ef26a6a0af
});
