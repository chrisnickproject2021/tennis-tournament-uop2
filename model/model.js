'use strict';
const fs = require('fs');
const lockFile = require('lockfile');
const { stringify } = require('querystring');
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


const lock = './model/lock-file'


// exports.authenticateUser =  function (callback) {
//     callback(null,true);
// }

exports.renderArticle =  function (callback) {
    callback();
}

exports.getAllTasks =  function (callback) {
    callback();
}
exports.renderSignup =  function (callback) {
    callback();
}
exports.getGames =  function (callback) {
    callback();
}
exports.renderLogin =  function (callback) {
    callback();
}
exports.renderHome =  function (callback) {
    callback();
}
exports.getAllGames =  function (callback) {
    callback();
}
exports.getAnnoun =  function (callback) {
    callback();
}
exports.renderForm =  function (callback) {
    callback();
}
exports.getContact =  function (callback) {
    callback();
}
exports.postForm = function (req) {
    console.log(req);
}
exports.postLogin = function (req) {
    console.log(req);

}
exports.postSignup = function (req) {
    console.log(req);
} 


// function checkUserName(username, callback){
//     const query1 = {
//         text: "SELECT password FROM public.users WHERE username = $1 LIMIT 1",
//         values: [username]
//     }

//     sql.query( query1, (err, res) => {
//         if (err){
//             console.log(err.stack)
//             console.log("edo")
//             //return 0;
//             callback('0')
//         }
//         else{
//             console.log("ekei")
//             console.log(res.rows[0]['password'])
//             //return res.rows[0]['password'];
//             callback(null, res.rows[0]['password'])
//         }
//             // for (let row of res.rows) {
//             //     console.log(JSON.stringify(row));
//             //     console.log("uparxei");
//             // }
//         //sql.end();
//     });
// }

// async function passHass(password){
//     const hashedPassword = await bcrypt.hash(password, 10);
//     return hashedPassword
// }


//  async function signUpUser(params){
//     if (params['password'] !== params['password2']){
//         return {message: 'Ο κωδικός επιβεβαίωσης δεν είναι σωστός'}
//     }
//     else{
//     let hashedPassword = await passHass(params['password'])
//     var data = [params['username'], hashedPassword];
//     // for (var i in params){
//     //     console.log(i)
//     //     data.push(params[i])
//     // }
//     //data.push(params);
//     console.log(data)
//     const query1 = {
//         text: "INSERT INTO public.users(username,password) VALUES ($1 , $2)",
//         values: data
//     }

//     sql.query( query1, (err, res) => {
//         if (err) throw err;
//         else{
//             return {message: "Επιτυχής Εγγραφή"}
//         }
//         //sql.end();
//     });
//     }
// }

// function signUpParticipant(params){
//     var data = [];
//     for (var i in params){
//         data.push(params[i])
//     }
//     //data.push(params);
//     console.log(data)
//     const query1 = {
//         text: "INSERT INTO public.participants(firstname, lastname, phone, mail, status, gender, prevexp, abilitylevel, mera, etosspoudon, am) VALUES ($1 , $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
//         values: data
//     }

//     sql.query( query1, (err, res) => {
//         if (err) throw err;
//         else{
//             return {message: "Επιτυχής Εγγραφή"}
//         }
//         //sql.end();
//     });
// }

// function LoginUser(params){
//     //var data = [params['username']];
//     checkUserName(params['username'], async(err,x) => {
//         console.log(x);
//         console.log("tora")

//         if (x !== '0' ){

//             bcrypt.compare(params['password'], x, (err, res) => {
//                 // res == true or res == false
//                 console.log('Compared result', res)

//                 if (res === true){
//                     console.log('Επιτυχής σύνδεση')
//                     return {message: 'Επιτυχής σύνδεση'}
//                 }
//                 else{
//                     console.log('Λάθος κωδικός')
//                     return {message: 'Λάθος κωδικός'}
//                 }
//             })


//             // let hashedPassword = await passHass(params['password'])
//             // console.log(hashedPassword)
//             // if (x === hashedPassword){
//             //     console.log('Επιτυχής σύνδεση')
//             //     return {message: 'Επιτυχής σύνδεση'}
//             // }
//             // else{
//             //     console.log('Λάθος κωδικός')
//             //     return {message: 'Λάθος κωδικός'}
//             // }
//         }
//         else{
//             console.log('Δεν υπάρχει τέτοιος χρήστης')
//             return {message: 'Δεν υπάρχει τέτοιος χρήστης'}
//         }

//     })
// }