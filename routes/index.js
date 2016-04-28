var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();
var mongoose = require('mongoose');

//============= CHINESE ROUTES ============ //

router.get('/', function (req, res) {

    mongoose.model('Update').find(function (err, updates){
        res.render('index', {updates: updates, title: "新世纪学校", subtitle: "subtitle"});
        });
    
    // res.render('index', { user : req.user }, { updates : updates});
});

router.get('/enrol', function(req, res) {
    res.render('enrol', { title: "Enrolments - Chinese"});
});

router.get('/enrol/language', function(req, res) {
    res.render('enrol_language', { title: "Enrolments - Language Program - Chinese"});
});

router.get('/enrol/learning', function(req, res) {
    res.render('enrol_learning', { title: "Enrolments - Learning Centre - Chinese"});
});

router.get('/campuses', function(req, res) {
    res.render('campuses', { title: "Campuses - Chinese"});
});

router.get('/campuses/language', function(req, res) {
    res.render('campuses_language', { title: "Capuses - language program - Chinese"});
});

router.get('/campuses/learning', function(req, res) {
    res.render('campuses_learning', { title: "campuses - learning centre - Chinese"});
});

router.get('/news', function(req, res) {
    res.render('news', { article : req.article, title: "News - Chinese"});
});

router.get('/contact', function(req, res) {
    res.render('contact', { title: "Contact - Chinese"});
});

//============= ENGLISH ROUTES ============ //

router.get('/english', function (req, res) {
    mongoose.model('Update').find(function (err, updates){
        res.render('english_index', {updates: updates, title: "New Century School", subtitle: "Chinese language courses and learning centre"});
        });
    //res.render('english_index', { user : req.user });
});

router.get('/english/enrol', function(req, res) {
    res.render('english_enrol', { title: "Enrolments"});
});

router.get('/english/enrol/language', function(req, res) {
    res.render('english_enrol_language', { title: "Language Courses"});
});

router.get('/english/enrol/learning', function(req, res) {
    res.render('english_enrol_learning', { title: "Learning Centre"});
});

router.get('/english/campuses', function(req, res) {
    res.render('english_campuses', { title: "Campuses"});
});

router.get('/english/campuses/language', function(req, res) {
    res.render('english_campuses_language', { title: "Language Program Locations"});
});

router.get('/english/campuses/learning', function(req, res) {
    res.render('english_campuses_learning', { title: "Learning Centre Locations"});
});

router.get('/english/contact', function(req, res) {
    res.render('english_contact', { title: "Contact"});
});

//============= ADMINSTRATION ROUTES ============ //

router.get('/register', function(req, res) {
    res.render('register', { });
});

router.post('/register', function(req, res) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
            return res.render('register', { account : account });
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});

router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function(req, res){
  console.log('working');
  res.status(200).send("pong!");
});

module.exports = router;
