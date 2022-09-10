const Post = require("../models/Post")

const posts = async (req, res, next) => {
        const newPost = new Post(req.body)
    try{
        const savedPost = await newPost.save(req.body)
        res.status(200).json({
            success: true,
            message: "successfully created post",
            data: savedPost
        })
    } catch(error){
        res.status(500).json({
            success: false,
            message: 'Unable to create Post',
            data: error
        })
    }
}

// UPDATE

const updatePost = async (req, res, next)=> {
    const id = req.params.id
    const {title, desc, username} = req.body

    try{
        const post = await Post.findById(id)
        if(post.username === username){
            try{
                const updatedPost = await Post.findByIdAndUpdate(id, {$set: {title: title, desc: desc}}, {new: true})
                res.status(200).json({
                    success: true,
                    message: 'Post Updated Successfully',
                    data: updatedPost
                })
            } catch(error){
                res.status(500).json(error)
            }
        } else {
            res.status(401).json({
                success: false,
                message: 'You can only update your post'
            })
        }

    } catch (error){
        res.status(500).json({
            success: false,
            data: error
        })
    }
}

// DELETE
const deletePost = async (req, res, next)=> {
    const id = req.params.id
    const username = req.body.username
   

    try{
        const post = await Post.findById(id)
        if(post.username === username){
            try{
                await Post.findByIdAndDelete(id)
                res.status(200).json({
                    success: true,
                    message: 'Post has been deleted'
                })
            } catch(error){
                res.status(500).json(error)
            }
        } else {
            res.status(401).json({
                success: false,
                message: 'You can only delete your post'
            })
        }

    } catch (error){
        res.status(500).json({
            success: false,
            data: error
        })
    }
}

// GET POST
const getPost = async (req, res, next) => {
    const id = req.params.id

    try{
        const post = await Post.findById(id)
        res.status(200).json({
            success: true,
            message: 'Successfully retrieved post from database',
            data: post
        })
    } catch(error){
        res.status(500).json({
            success: false,
            message: 'Unable to retrieve post'
        })
    }
}

// GET ALL USER
const getAllPost = async (req, res, next) =>{
    const username = req.query.user
    const catName = req.query.cat

    try{
        let posts
        if(username){
            posts = await Post.find({username})
        } else if(catName){
            posts = await Post.find({categories:{
                $in:[catName]
            }})
        } else {
            posts = await Post.find()
        }
        res.status(200).json({
            success: true,
            message: 'Successfully retrieved category',
            data: posts
        })
    } catch(error){
        res.status(500).json({
            success: false,
            message: 'Unable to retrieve posts'
        })
    }
}

module.exports = {
    posts,
    updatePost,
    deletePost,
    getPost,
    getAllPost
}