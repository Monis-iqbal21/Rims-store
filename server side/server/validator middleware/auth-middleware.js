const jwt = require("jsonwebtoken");
const User = require("../models/user-models")

const authMiddleware = async (req, res, next) =>{

    const token = req.header("Authorization");

    if(!token){
        return res.status(401).json({message : "unauthorization HTTP, token not provided"})
    }

    const jwtToken = token.replace("Bearer" ,"").trim()
    console.log( "auth middleware token " + jwtToken)

    try {
        next();
        const isVerified = jwt.verify(jwtToken, process.env.jwt_key)
        
        const userData = await User.findOne({email: isVerified.email}).select({
            password: 0,
        });        
        console.log(userData);

        req.user = userData;
        req.token = token;
        req.userID = userData._id

    } catch (error) {
        return res.status(401).json({message : "unauthorization HTTP, token not provided" + error})
    }
}


module.exports = authMiddleware