const mongoose = require('mongoose')

const DB = process.env.DATABASE; //we cant use direct DATABASE rather we have to use process.envoirment then DATABASE

mongoose.connect(DB).then(() => {
    console.log(`Connection successfully`) //.connect will return promise and we will get that by using .then() and .catch()
}).catch((err) => {
    console.log(err) //if connection is not successfull it will return an error
})