const userSchema = require("../Model/userSchema")
const jwt = require("jsonwebtoken")
const {JWT_KEY} = require("../config")
exports.Protect = async(req,res,next)=>{
let token;
if(
    req.headers.authorization && req.headers.authorization.startsWith("Bearer")
)
{
    token = req.headers.authorization.split(" ")[1];
    try{
        let decode = jwt.verify(token,JWT_KEY);
        req.user = userSchema.findOne({_id: decode.id})
        if(!req.user){
            res.status(401).json({success: false, message:"User Not found"})
        }
        else{
            next()
        }
    }catch(err){
        console.log(err);
    }
}else{
    res.status(401).json({success:false, message:"Unauthorized"});
}
}