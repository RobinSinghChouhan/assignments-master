const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.params.username;
    const password = req.params.password;
    await User.create({
        username: username,
        password: password
    });
    res.send({
        message: "User created successfully!"
    });
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;
    const existingUser = await User.find({
        username: username,
        password: password
    });

    if(existingUser)
        {
            const jwtToken = jwt.sign({username: username},jwtPassword);
            res.send({
                message: "Logged in successfully!",
                authToken: jwtToken
            });
        }
        else
        {
            res.send({
                message: "Incorrect login"
            });
        }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    res.send({
        courses
    });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.headers.username;
    const courseId = req.params.courseId;
    await User.updateOne({
        username: username
    },{
        "$push": {
            purchasedCourses: courseId
        }
    })
    console.log(username);
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router