const userSchema = require('../Model/userSchema')


exports.addUser = async(req,res)=>{
    let payload = req.body;
    userSchema.create(payload)
    res.status(201).json({success:true, message:"User Created", payload})
}

exports.userLogin = async(req,res)=>{
    let {Name, Password} = req.body;
    if(!Name || !Password) {
        res.status(401).json({success:false, message:"Username and password is missing "})
    }
    else{
        let user = await userSchema.findOne({Name:Name}).select("+Password")
        if(!user) {
        res.status(401).json({success:false,message:"Username not found"})
        }
        else{
            let isMatch = await user.comparePassword(Password)
            if(!isMatch)
            {
                res.status(401).json({success:false,message:"Invalid Password"})
            }
            else{
                let token = await user.generateToken()
                res.status(200).json({success:true,message:"Login Successfull",token})
            }
        }
    }
}