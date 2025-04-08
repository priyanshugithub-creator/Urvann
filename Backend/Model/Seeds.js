const {Schema, model} = require("mongoose")

const Seeds = new Schema({
    Image :{
        type: String,
    },
    Title :{
        type :String
    },
    Price : {
        type : Number
    },
    Ratings : {
        type : Number
    },
    Reviews :{
        type : String 
    }
})

module.exports = model("Seeds", Seeds, "Seeds")