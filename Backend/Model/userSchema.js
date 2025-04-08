const {Schema, model} = require("mongoose")
const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken')
const {JWT_KEY} = require("../config")

const userSchema = new Schema({
    Name :{
        type: String,
    },
    Email :{
        type :String
    },
    Phone : {
        type : Number
    },
    Referral : {
        type : String
    },
    Password :{
        type : String 
    }
})

userSchema.pre("save", async function(){
    const salt = await bcrypt.genSalt(10)
    this.Password = await bcrypt.hash(this.Password, salt)
})

userSchema.methods.comparePassword = async function(pass){
    return bcrypt.compare(pass,this.Password)
}
userSchema.methods.generateToken = async function(){
    return jwt.sign({id:this._id},JWT_KEY,{expiresIn: "1h"})
}


module.exports = model("Users", userSchema, "Users");