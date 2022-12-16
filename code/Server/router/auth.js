const express = require('express')

const router = express.Router()

require('../DB/Connection')
const User = require('../model/UserSchma');


router.get('/' , (req,res) => { //this part will be in continues loading beacuse of middleware

    res.send('<a href="https://www.w3schools.com"> Visit W3Schools.com! </a> its from auth.js')

})
//Registration Route

router.post('/register', (req,res) => {
    
    const {name, email, phone, work, password} = req.body;
    //validations

    if(!name || !email || !phone || !work || !password ) {
        return res.status(422).json({ error: "Fill all the fieldz" });
    }

    User.findOne({ email: email })
    .then((userExist) => {
        if (userExist) {
            return res.status(422).json({ error : "Email already exists"});

        }

        const user = new User( {name, email, phone, work, password })
        user.save().then(() => {
            res.status(201).json({message : "user registered succesfully"});
        }).catch((err) => res.status(500).json({error : "FAILED TO REGISTERED"}));
    }).catch(err => {console.log(err); });

});
 
//Login Route

router.post('/signin', async (req,res) => {
    try{
        const {email, password} = req.body

        if(!email || !password) {
            return res.status(400).json({error:"Invalid credentials"})
        }
//Getting data from DB 

        const userLogin = await User.findOne({email:email})

        console.log(userLogin)

//It will only show successfull when data is present in DB

        if (!userLogin){
            res.status(400).json({error : "User Error"})
        } else {
            res.json({message : "Login Successfully"})
        }
       

    } catch(err) {
        console.log(err)
    }
});

module.exports = router