const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

// const engine = require('pug');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const morgan = require('morgan');

const app = express();
require('./database');
require('./passport/local-auth');

app.set('views', path.join(__dirname, 'views'));

// app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));

module.exports = app;