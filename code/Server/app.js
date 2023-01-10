
const dotenv = require('dotenv')
//require Express
const express = require('express')
const app = express()
//in express we have multiple methods, funtions, modules we can assess them with app now
//requiring mongoose
const mongoose = require('mongoose')
dotenv.config({path: "./config.env"})// .config is a method inside its obj pass 
require('./DB/Connection')
//const DB = 'mongodb+srv://Ahsan:Taurus26@project.e5onb33.mongodb.net/mernstack?retryWrites=true&w=majority'
app.use(express.json());
const User = require('./model/UserSchma')


app.use(require('./router/auth'))







const cors = require("cors");
const router = require("./router/auth");


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json("server start")
})

app.use(router);

/*//using app.get method to send a res, whatever we type into it.

app.get('/' , middleware, (req,res) => { //this part will be in continues loading beacuse of middleware

    res.send('<a href="https://www.w3schools.com"> Visit W3Schools.com! </a>')

}) // we will put middleware function in .get(). because we want client to go to middleware funtion first then comeback to access furthre*/


/*app.get('/' , (req,res) => { //this part will be in continues loading beacuse of middleware

    res.send('<a href="https://www.w3schools.com"> Visit W3Schools.com! </a> its from app.js')

}) */


const PORT = 5000; //assining PORT to a variable

//server would listen on a perticular PORT that we provide
app.listen(PORT, () => {
    console.log(`Server is listening on a PORT ${PORT}`)
}) //now server is running on PORT and sending res which we use in .send() method



