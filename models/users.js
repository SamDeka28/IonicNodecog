var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var user = new Schema({
    name : String,
    email : String,
    password : String,
    phone : String
})

module.exports =  mongoose.model("user",user)