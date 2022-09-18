const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require("express-handlebars");

const app = express();
const port = 3000;

//use static file and css in path src/public 
app.use(express.static(path.join(__dirname,'public')))

//Middleware
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//HTTP logger
//app.use(morgan('combined'));

//Template engine (npm install express-handlebars)
const handlebars = exphbs.create({ extname: '.hbs',});//.handlebars->.hbs
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');
app.set('views',path.join(__dirname,'resources/views'))

// app.engine('handlebars', handlebars())
// app.set('view engine','handlebars');


app.get('/', (req, res) => {
  // res.send('alo');
  res.render("home");//body
})

app.get('/news', (req, res) => {
  res.render("news");//body
})

app.get('/search', (req, res) => {
  res.render("search");//body
})

app.post('/search', (req, res) => {
  console.log(req.body)
  res.send('');//body
})

app.listen(port, () => {
  console.log(`Example app listening http://localhost:${port}`)
})