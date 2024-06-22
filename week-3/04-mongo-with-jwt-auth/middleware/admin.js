const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const userAuth = req.headers.authorization;
    const jwtToken = userAuth.split(" ")[1];
    try
    {
        const decoded = jwt.verify(jwtToken,jwtPassword);
        if(decoded.username)
            {
                next();
            }
            else{
                res.send({
                    message: "You are not authenticated"
                })
            }
    }
    catch(e)
    {
        res.send({
            message: "User not found"
        })
    }
}

module.exports = adminMiddleware;