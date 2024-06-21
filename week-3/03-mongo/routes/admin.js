const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  const admin = new Admin({
    username: username,
    password: password,
  });
  admin.save();
  res.status(201).send({
    message: "Admin created successfully",
  });
});

router.post("/courses", adminMiddleware, (req, res) => {
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

  //     - POST /admin/courses
  //   Description: Creates a new course.
  //   Input: Headers: { 'username': 'username', 'password': 'password' }, 
  //Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' }
  //   Output: { message: 'Course created successfully', courseId: "new course id" }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find();
  res.status(200).send({courses});
}); 

module.exports = router;
