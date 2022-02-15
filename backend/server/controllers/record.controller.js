const Record = require("../models/record.model");
 
module.exports.testResponse = (req, res) => {
    res.json({message: "Test Message Successful"});
}

module.exports.findAllRecords = (req, res) => {
    Record.find({})
        .then(results=>res.json({results:results}))
        .catch(err=>res.status(400).json({message:"Error", err}))
}

module.exports.createRecord = (req,res) => {
    //req.body.score = 0;
    Record.create(req.body)
        .then(newRecord=>res.json({results:newRecord}))
        .catch(err=>res.status(400).json({message:"Error", err}))
}

module.exports.findOneRecord = (req, res) => {
    Record.findOne({_id: req.params._id})
        .then(results=>res.json({results:results}))
        .catch(err=>res.status(400).json({message:"Error", err}))
}

module.exports.deleteRecord = (req, res) => {
    Record.deleteOne({_id: req.params._id})
        .then(results=>res.json({results: results}))
        .catch(err=>res.status(400).json({message:"Error", err}))
}

module.exports.updateOneRecord = (req, res) => {
    Record.updateOne({_id:req.params._id}, req.body, {runValidators: true})
        .then(results=>res.json({results:results}))
        .catch(err=>res.status(400).json({message:"Error", err}))
}

// module.exports.upvoteRecord = (req, res) => {
//     Record.findOneAndUpdate({_id:req.params._id}, {$inc: {score:1}}, {new:true})
//         .then(results=>res.json({results:results}))
//         .catch(err=>res.status(400).json({message:"Error ", err}))
//}