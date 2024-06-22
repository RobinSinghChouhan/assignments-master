const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course} = require("../db")
const jwt = require("jsonwebtoken");
const jwtPassword = "secret";

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;
    await Admin.create({
        username: username,
        password: password
    });
    res.send({
        message: "Admin created successfully!"
    });
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;
    const admin = await Admin.findOne({
        username: username,
        password: password
    });

    if (admin)
        {
            const authToken = jwt.sign({username: username},jwtPassword);
            res.send({
                message: "Logged in successfully!",
                authToken: authToken 
            });
        }
    else{
            res.send({
                message: "Invalid credentials"
            });
        }
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;
  const course = new Course({
    title: title,
    description: description,
    price: price,
    imageLink: imageLink, 
  });
  course.save();

    res.status(200).send({
        message: 'Course created successfully',
        courseId: course._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find();
    res.status(200).send({courses});
});

module.exports = router;