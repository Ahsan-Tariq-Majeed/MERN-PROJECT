//creating a collection
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator');

const UserSchema = new mongoose.Schema({

    name: {
        type : String,
        required: true
    },

    email: {

        type: String,
        required: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    phone: {
        type: Number,
        required: true
    },

    work: {
        type: String,
    },

    password: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})

//Password Hashing

UserSchema.pre('save', async function (next) {
    console.log('before hashing')
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password,12);
        
    }
    next();
}
)

//token generation

UserSchema.methods.generateAuthToken = async function() {
    try {
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
//add or store "let token" into my token array
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token; 
    } catch(err) {
        console.log(err)
    }
}

//model funtion takes collection name as singular, then 2nd argument would be structure to follow
const User = mongoose.model('user', UserSchema)

module.exports = User 