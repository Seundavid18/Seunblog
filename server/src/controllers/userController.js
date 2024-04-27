const User = require("../models/User")
const Post = require("../models/Post")
const bcrypt = require('bcrypt')

// Update Record
const update = async (req, res, next) => {
    // const id = req.params.id
    // const {username} = req.body
    // const {password} = req.body


    //     // Encrypting the password
    //     const hashedpassword = await bcrypt.hash(password, 10)
    //     // re-assinging the password
        
    //     try{
    //         const updatedUser = await User.findByIdAndUpdate(id, {$set: {username: username, password: hashedpassword}}, {new: true})

    //         res.status(200).json({
    //             success: true,
    //             message: 'successfully updated record',
    //             data: updatedUser
    //         })
            
    //     } catch(error) {
    //         res.status(500).json({
    //             success:false,
    //             message: 'You can only update your account'
    //         })
    //     }

    if (req.body.userId === req.params.id) {
        if (req.body.password) {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
          const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedUser);
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can update only your account!");
      }
}

// DELETE

const deleteUser = async (req, res) => {

    const id = req.params.id
    try{
        const user = await User.findById(id)
        
        try{
            await Post.deleteMany({username: user.username})
            await User.findByIdAndDelete(id)
    
            res.status(200).json({
                success: true,
                message: 'User has been deleted...',
            })
        } catch(error){
            res.status(500).json({
                success: false,
                message: 'You can  only delete your account'
            })
        }
    } catch(error){
        res.status(404).json({
            success: false,
            message: 'User not found...'
        })
    }
   
    
}

// GET USER
const getUser = async (req, res, next) => {
    const id = req.params.id
    try{
        const user = await User.findById(id)
        const {password, ...others} = user._doc

        res.status(200).json({
            success: true,
            message: 'Successfully retrieved user',
            data: others
        })
    } catch(error){
        res.status(500).json({
            success: false,
            message: 'User not found...'
        })
    }
}

module.exports = {
    update,
    deleteUser,
    getUser
}