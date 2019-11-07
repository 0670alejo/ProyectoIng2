const express = require('express');
const router = require('express').Router();
var request = require('request');
const passport = require('passport');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    res.render('views/index.html');
});