const router = require("express").Router()
const User = require("../models/User")
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("../verifyToken")

//get user
router.get("/find/:id", verifyTokenAndAdmin, async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
      } catch (err) {
        res.status(500).json(err);
      }
})

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //GET ALL USER
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new;
    try {
      const users = query
        ? await User.find().sort({ _id: -1 }).limit(5)
        : await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  });


   


module.exports = router;