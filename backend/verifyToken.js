const jwt = require("jsonwebtoken")

const verifyToken = (req,res,next)=>{
    const accessToken = req.cookies.access_token
    if(!accessToken) return res.status(401).json("Something went wrong")

    jwt.verify(accessToken, process.env.JWT_SEC, (err,user)=>{
        if(err) return res.status(403).json("Token is not valid")
        req.user = user;
        next()
    })
}

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not allowed to do that!");
      }
    });
  };

  const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not allowed to do that!");
      }
    });
  };

  module.exports = {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin
  };