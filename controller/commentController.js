const CommentModel = require('../model/commentModel')
const jwt = require("jsonwebtoken")

const createComment = async (req, res)=>{
    try{
        if(req.user.email === req.body.email){
            await CommentModel.updateOne(
                {email: req.body.email},
                {$push: {comments: req.body.comments}},
                { upsert: true }
            ).exec();
            res.status(200).json("Comment and rating successfully added")
        }else{
            res.status(403).json("You are not allow to post comment")
        }
    }catch(err){
        res.status(500).json(err)
    }
}

const getSingleUserComment = async (req, res)=>{
    try{
        if(req.user.email === req.body.email){
            const data = await CommentModel.findOne({email: req.body.email})
            res.status(200).json(data)
        }else{
            res.status(403).json("Access Denied")
        }
    }catch(err){
        res.status(500).json(err)
    }
}

const getAllUserComment = async (req, res)=>{
    if(req.body.email === 'admin@gmail.com'){
        try{
            if(req.user.email === req.body.email){
                const data = await CommentModel.find()
                res.status(200).json(data)
            }else{
                res.status(403).json("Access Denied")
            }
        }catch(err){
            res.status(500).json(err)
        }
    }
    else{
        res.status(400).json("You are not admin")
    }

}

const getToken = async (req, res)=>{
    const email = req.body.email
    try{
        const token = jwt.sign({ email }, process.env.ACCESS_TOKEN)
        res.json(token)
    }catch(err){
        res.status(500).json(err)
    }
}

module.exports = { createComment, getSingleUserComment, getAllUserComment, getToken}