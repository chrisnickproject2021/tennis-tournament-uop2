const express = require('express')
const app = express()
const exphbs = require('express-handlebars');
const routes = require('./routes/routes');
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'))
const hbs=require('express-handlebars');
const passport=require('passport');
const session = require("express-session");
var bodyParser=require('body-parser');
const cookieParser = require('cookie-parser');
const Handlebars = require('handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')



app.engine('hbs', exphbs({
    // defaultLayout: 'layout',
    extname: '.hbs',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.set('view engine', 'hbs');

app.use('/', routes);
module.exports = app;
