//'use strict';
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
const controller = require('../controller/controller');

const sql = require('../connect.js');
const bcrypt = require('bcrypt');



router.get('/form', controller.renderForm);
// router.post('/form', async (req, res) => {
//     console.log(req.body);
//     res.render('form', controller.postForm(req))
// });  
router.get('/announ', controller.getAnnoun);
router.get('/games', controller.getAnnoun);
router.get('/', controller.renderHome);
router.get('/home', controller.renderHome);
router.get('/login', controller.renderLogin);
// router.post('/login',async (req, res) => {
//     console.log(req.body);
//     res.render('login', controller.postLogin(req))
// });    
router.get('/nikitis', controller.getGames);
router.get('/contact', controller.getContact);
router.get('/signup', controller.renderSignup);
// router.post('/signup', async (req, res) => {
//     console.log(req.body);
//     res.render('signup', controller.postSignup(req))
// });    
router.get('/article', controller.renderArticle);













function checkUserName(username, callback){
    const query1 = {
        text: "SELECT password FROM public.users WHERE username = $1 LIMIT 1",
        values: [username]
    }

    sql.query( query1, (err, res) => {
        if (err){
            console.log(err.stack)
            console.log("edo")
            //return 0;
            callback(null,'0')
        }
        else{
            console.log("ekei")
            //console.log(res.rows[0]['password'])
            //return res.rows[0]['password'];
            if (res.rows[0] === undefined){
                callback(null, '0')
            }
            else{
                callback(null, res.rows[0]['password'])
            }
        }
            // for (let row of res.rows) {
            //     console.log(JSON.stringify(row));
            //     console.log("uparxei");
            // }
        //sql.end();
    });
}

async function passHass(password){
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword
}


async function signUpUser(params, callback){
    checkUserName(params['username'], async(error1,x) => {
        console.log(x);

        if (x !== '0' ){
            console.log('Αυτό το username χρησιμοποιείται')
            //return {message: 'Αυτό το username χρησιμοποιείται'}
            callback(null, {message: 'Αυτό το username χρησιμοποιείται'})
        }

        if (params['password'] !== params['password2']){
            console.log('Ο κωδικός επιβεβαίωσης δεν είναι σωστός')
            //return {message: 'Ο κωδικός επιβεβαίωσης δεν είναι σωστός'}
            callback(null, {message: 'Ο κωδικός επιβεβαίωσης δεν είναι σωστός'})
        }
        else{
            let hashedPassword = await passHass(params['password'])
            var data = [params['username'], hashedPassword];
        // for (var i in params){
        //     console.log(i)
        //     data.push(params[i])
        // }
        //data.push(params);
            console.log(data)
            const query1 = {
                text: "INSERT INTO public.users(username,password) VALUES ($1 , $2)",
                values: data
            }
    
            sql.query( query1, (err, res) => {
                if (err) throw err;
                else{
                    console.log("Επιτυχής Εγγραφή")
                    //return {message: "Επιτυχής Εγγραφή"}
                    callback(null, {message: "Επιτυχής Εγγραφή"})
                }
            });
        }
    })

    // if (params['password'] !== params['password2']){
    //     console.log('Ο κωδικός επιβεβαίωσης δεν είναι σωστός')
    //     return {message: 'Ο κωδικός επιβεβαίωσης δεν είναι σωστός'}
    // }
    // else{
    // let hashedPassword = await passHass(params['password'])
    // var data = [params['username'], hashedPassword];
    // // for (var i in params){
    // //     console.log(i)
    // //     data.push(params[i])
    // // }
    // //data.push(params);
    // console.log(data)
    // const query1 = {
    //     text: "INSERT INTO public.users(username,password) VALUES ($1 , $2)",
    //     values: data
    // }

    // sql.query( query1, (err, res) => {
    //     if (err) throw err;
    //     else{
    //         console.log("Επιτυχής Εγγραφή")
    //         return {message: "Επιτυχής Εγγραφή"}
    //     }
        //sql.end();
    // });
    // }
 }

function signUpParticipant(params, callback){
    var data = [];
    for (var i in params){
        data.push(params[i])
    }
    //data.push(params);
    console.log(data)
    const query1 = {
        text: "INSERT INTO public.participants2(firstname, lastname, phone, mail, status, gender, prevexp, abilitylevel, mera, etosspoudon, am) VALUES ($1 , $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
        values: data
    }

    sql.query( query1, (err, res) => {
        if (err) throw err;
        else{
            //return {message: "Επιτυχής Εγγραφή"}
            callback(null, {message: "Επιτυχής Εγγραφή"})
        }
        //sql.end();
    });
}

function LoginUser(params, callback){
    //var data = [params['username']];
    checkUserName(params['username'], async(err,x) => {
        console.log(x);
        console.log("tora")

        if (x !== '0' ){
            bcrypt.compare(params['password'], x, (err, res) => {
                // res == true or res == false
                console.log('Compared result', res)

                if (res === true){
                    console.log('Επιτυχής σύνδεση')
                    //return {message: 'Επιτυχής σύνδεση'}
                    callback(null, {message: 'Επιτυχής σύνδεση'})
                }
                else{
                    console.log('Λάθος κωδικός')
                    //return {message: 'Λάθος κωδικός'}
                    callback(null, {message: 'Λάθος κωδικός'})
                }
            })


            // let hashedPassword = await passHass(params['password'])
            // console.log(hashedPassword)
            // if (x === hashedPassword){
            //     console.log('Επιτυχής σύνδεση')
            //     return {message: 'Επιτυχής σύνδεση'}
            // }
            // else{
            //     console.log('Λάθος κωδικός')
            //     return {message: 'Λάθος κωδικός'}
            // }
        }
        else{
            console.log('Δεν υπάρχει τέτοιος χρήστης')
            //return {message: 'Δεν υπάρχει τέτοιος χρήστης'}
            callback(null, {message: 'Δεν υπάρχει τέτοιος χρήστης'})
        }

    })
}










router.post('/signup', async (req, res) => {
    //console.log(req.body);
    signUpUser(req.body, (err, message) =>{
        console.log(message)
        res.render('signup', message)
    })
    //res.render('signup', signUpUser(req.body))
});


router.post('/login',async (req, res) => {
    //console.log(req.body);
    //res.render('login', controller.postLogin(req))
    LoginUser(req.body, (err, message) =>{
        console.log(message)
        res.render('login', message)
    })
});


router.post('/form', async (req, res) => {
    //console.log(req.body);
    //res.render('form', controller.postForm(req))
    signUpParticipant(req.body, (err, message) =>{
        console.log(message)
        res.render('form', message)
    })
    //console.log(message)
    //res.render('home', {mesage: message})
});  






// POST /api/users gets JSON bodies
app.post('/api/users', jsonParser, function (req, res) {
    // create user in req.body
})

module.exports = router;