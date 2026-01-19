const express = require("express")

const router = express.Router()
const meController = require("../app/controllers/MeController")

const { model } = require("mongoose")

router.get("/stored/courses", meController.storedCourses) // hiểu đơn giản đât sẽ là đường link

module.exports = router
