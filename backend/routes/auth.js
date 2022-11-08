const router = require("express").Router();
const User = require("../models/User")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")


//Registration
router.post("/register", async (req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    })

    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})


//login
router.post("/login", async(req,res)=>{
   try {
    const user = await User.findOne({username:req.body.username})
    !user && res.status(401).json("Wrong password and username")
    const correctPassword = bcrypt.compareSync(req.body.password, user.password )

    if(!correctPassword) return res.status(400).json("Wrong username and password");

    const accessToken = jwt.sign({
        id: user._id,
        isAdmin: user.isAdmin
    },process.env.JWT_SEC,
    {expiresIn:"13d"})

    const {password, ...others} = user._doc


    res.cookie("access_token", accessToken, {
      httpOnly: true,
    })
    .status(200).json({...others, accessToken})
    }catch (error) {
    res.status(500).json(error)
   }


})


//google


//logout
router.post("/logout", (req,res)=>{
    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true,
    }).status(200).json("User has been logged out")
})



module.exports = router;