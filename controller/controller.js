'use strict';
const express = require('express');
const router = express.Router();
const app = express();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const exphbs = require('express-handlebars');
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
const model = require('../model/model.js');


exports.getContact = function (req, res) {
    model.getContact(function (err){
        if (err) {
            res.send(err);
        }
        else {
            res.render('tasks');
        }
    });
}
exports.renderArticle = function (req, res) {
    model.renderArticle(function (err){
        if (err) {
            res.send(err);
        }
        else {
            res.render('article');
        }
    });
}

exports.renderSignup = function (req, res) {
    model.renderArticle(function (err){
        if (err) {
            res.send(err);
        }
        else {
            res.render('signup');
        }
    });
}
exports.getGames = function (req, res) {
    model.getGames(function (err){
        if (err) {
            res.send(err);
        }
        else {
            res.render('nikitis');
        }
    });
}
exports.renderLogin = function (req, res) {
    model.renderLogin(function (err){
        if (err) {
            res.send(err);
        }
        else {
            res.render('login');
        }
    });
}
exports.renderHome = function (req, res) {
    model.renderHome(function (err){
        if (err) {
            res.send(err);
        }
        else {
            res.render('home');
        }
    });
}
exports.getAllGames = function (req, res) {
    model.getAllGames(function (err){
        if (err) {
            res.send(err);
        }
        else {
            res.render('games');
        }
    });
}
exports.getAnnoun = function (req, res) {
    model.getAnnoun(function (err){
        if (err) {
            res.send(err);
        }
        else {
            res.render('announ');
        }
    });
}
exports.renderForm = function (req, res) {
    model.renderForm(function (err){
        if (err) {
            res.send(err);
        }
        else {
            res.render('form');
        }
    });
}
exports.postForm =async function (req, res) {
    console.log(req.body);
    model.postForm(req.body); 
}
exports.postLogin =async function (req, res) {
    console.log(req.body);
    model.postLogin(req.body);    
}
exports.postSignup =async function (req, res) {
    console.log(req.body);
    model.postSignup(req.body);
}