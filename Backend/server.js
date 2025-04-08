const express = require('express')
const mongoose = require('mongoose')
const app = express()
const {PORT,URL} = require("./config")
const SeedsRouter = require("./Router/SeedsRouter")
const userSchema = require('./Model/userSchema')
const userRouter = require("./Router/userRouter")
const seeds = require('./Model/Seeds')

//! Middleware--------------------------------------->>>>>>>.

app.use(express.json())
app.use('/seedsapi', SeedsRouter)
app.use("/usersapi",userRouter)
//! Database connection ----------------------------->>>>>>>>>>>>>>>>>>>>>>>>

const connectDb = async() =>{
    await mongoose.connect(URL)
}
connectDb();

//! Routing ------------------------------------->>>>>>>>>>>>>>>>>>>

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.listen(PORT,(err)=>{
    if(err) throw err
    console.log("Server is running")
})