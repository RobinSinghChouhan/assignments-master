const jwt = require("jsonwebtoken");
const jwtPassword = "secret";

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const userAuth = req.headers.authorization;
    const jwtToken = userAuth.split(" ")[1]; 
    try{
        const decoded = jwt.verify(jwtToken,jwtPassword);
        if(decoded.username)
            {
                next();
            }else{
                res.send({
                  message: "You are not authenticated"  
                })
            }
    }catch(e)
    {
        res.send({
            message: "Invalid jwt"
        })
    }
}

module.exports = userMiddleware;