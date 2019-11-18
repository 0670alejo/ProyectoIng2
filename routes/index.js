const express = require('express');
const router = express.Router();
var request = require('request');
const passport = require('passport');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    res.render('index.ejs');
});

router.get('/login', (req, res, next) => {
    res.render('login.ejs');
});

router.get('/loginGoogle', (req, res, next) => {
    res.render('loginGoogle.ejs');
});

router.get('/loginFacebook', (req, res, next) => {
    res.render('loginFacebook.ejs');
});

router.get('/indexLogeado', (req, res, next) => {
    res.render('indexLogeado.ejs');
});

router.get('/perfil', (req, res, next) => {
    res.render('perfil.ejs');
});

router.get('/indexLogeado#carousel', (req, res, next) => {
    res.render('indexLogeado#carousel.ejs');
});

router.get('/votar', (req, res, next) => {
    res.render('votar.ejs');
});

router.get('/selectCiudad', (req, res, next) => {
    res.render('selectCiudad.ejs');
});

router.get('/accionVotar', (req, res, next) => {
    res.render('accionVotar.ejs');
});

router.get('/accionVOTADA', (req, res, next) => {
    res.render('accionVOTADA.ejs');
});

router.get('/publicarFoto', (req, res, next) => {
    res.render('publicarFoto.ejs');
});

module.exports = router;