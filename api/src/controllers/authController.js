const User = require("../models/User")
const validateUser = require("../validation/validateUser")
const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')

// Register
const register = async (req, res, next) => {
    let {fullName, username, email, password} = req.body;

    try{

        const {error} = validateUser(req.body)
        if(error) return res.status(200).json({success: false, message: error.details[0].message})
        
        const userExist = await User.findOne({username})
        if(userExist){
            return res.status(200).json({
                success: false, 
                message: "Username is taken"
            });
        }
        const exist = await User.findOne({email})
        if(exist){
            return res.status(200).json({
                success: false, 
                message: "Email already exist"
            });
        }

        //hashing the password
        let hashedpassword = await bcrypt.hash(password, 12)
        //re-assigning the passowrd
        password = hashedpassword
        
        const newUser = await User.create({fullName, username, email, password});
        await newUser.save();

        res.status(201).json({
            success: true,
            message: "User created",
            data: newUser
        });

    } catch(error){
        res.status(500).json({
            success: false,
            message: "Unable to create user"
        });
    }
}

//Login
const login = async (req, res, next) => {
    const {username, password} = req.body

    const user = await User.findOne({username: username})

    if(!user){
        return res.status(200).json({
            success: false,
            message:"Incorrect username or password"
        })
    }

    const validPassowrd = await bcrypt.compare(password, user.password)

    if(!validPassowrd){
        return res.status(200).json({
            success: false,
            message: "Incorrect username or password"
        })
    }

    res.status(200).json({
            success: true,
            message: "Login successful",
            data: user
        })

    // const token = jwt.sign({id: user._id, name: user.fullName, email: user.email,}, process.env.JWT_SECRET)
    // res.status(200).json({
    //     success: true,
    //     message: "Login successful",
    //     data: user,
    //     token: token
    // })
}


module.exports = {
    register,
    login
}