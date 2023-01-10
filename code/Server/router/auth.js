const JWT = require('jsonwebtoken')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

require('../DB/Connection')
const User = require('../model/UserSchma');
const Insi = require("../model/instituteSchema")




//const authenticate = require("../middleware/authenticate");



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

        }else{
            const user = new User( {name, email, phone, work, password })
            user.save().then(() => {
                res.status(201).json({message : "user registered succesfully"});
            })
        }

      
    }).catch(err => {console.log(err); });

});
 

// institute

router.post('/institute', (req,res) => {
    
    const {name, refnum, phone, fees, work, } = req.body;
    //validations

    if(!name || !refnum || !phone || !fees ||!work ) {
        return res.status(422).json({ error: "Fill all the fieldz" });
    }

        else{
            const inssi = new Insi ( {name, refnum, phone, fees, work })
            inssi.save().then(() => {
                res.status(201).json({message : "succesfully"});
            })
        }

});


//Login Route

router.post('/signin', async (req,res) => {
    try{
        let token;
        const {email, password} = req.body
//check if any 1 is empty
        if(!email || !password) {
            return res.status(400).json({error:"Fill all the data"})
        }
//Getting data from DB 

        const userLogin = await User.findOne({email:email})

       // console.log(userLogin)

//It will only show successfull when data is present in DB

        if (userLogin){
            //comparing user enter password with database encrpted password
            const isMatch = await bcrypt.compare(password, userLogin.password)

            token = await userLogin.generateAuthToken();
            console.log(token);
            //storing token in cookies

            res.cookie("JWTTOKEN", token, {
                //expires token after 30 days
                expires:new Date(Date.now() + 25892000000),
                //should run not only on secure
                httpOnly:true 
            });



            if(!isMatch){
                //invalid credientials for password
                res.status(400).json({error : "Invalid Credientials"})
            }else {
                res.json({message : "Login Successfully"})
            }
            
        } else {
             //invalid credientials for email
            res.json({error : "Invalid Credientials"})
        }
       

    } catch(err) {
        console.log(err)
    }
});


// get userdata

router.get("/getdata", async (req, res) => {
    try {
        const userdata = await Insi.find();
        res.status(201).json(userdata)
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
})

// get individual user

router.get("/getuser/:id", async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;

        const userindividual = await Insi.findById({ _id: id });
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})


// update user data

router.patch("/updateuser/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const updateduser = await Insi.findByIdAndUpdate(id, req.body, {
            new: true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
})


// delete user
router.delete("/deleteuser/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const deletuser = await Insi.findByIdAndDelete({ _id: id })
        console.log(deletuser);
        res.status(201).json(deletuser);

    } catch (error) {
        res.status(422).json(error);
    }
})



module.exports = router