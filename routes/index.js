const express = require('express');
const router = express.Router();
var request = require('request');
const passport = require('passport');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    res.render('index.html');
});

router.get('/login', (req, res, next) => {
    res.render('login.ejs');
});

router.get('/loginGoogle', (req, res, next) => {
    res.render('loginGoogle.ejs');
});

module.exports = router;