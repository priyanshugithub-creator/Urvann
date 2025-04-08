const { kMaxLength } = require('buffer');
const seedsSchema = require('../Model/Seeds')


exports.addSeeds = async(req,res)=>{
    let payload = {
        Image : req.body.Image,
        Title : req.body.Title,
        Price : req.body.Price,
        Ratings : req.body.Ratings,
        Reviews : req.body.Reviews,
    };
    await seedsSchema.create(payload)
    res.status(201).json({
        success : true,
        message : "Seeds added", payload
    })
}

exports.showSeeds = async(req,res)=>{
    let payload = await seedsSchema.find({});
    res.status(201).json({success:true, message:"All seeds", payload})
}

exports.oneSeed = async(req,res)=>{
    const payload = await seedsSchema.find({_id:req.params.id});
    res.status(201).json({success:true, message:"One seed", payload})
}