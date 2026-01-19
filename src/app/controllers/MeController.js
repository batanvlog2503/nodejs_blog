const Course = require("../models/Courses")
const slugify = require("slugify")
const { multipleMongooseToObject } = require("../../config/util/mongoose")
const { mongooseToObject } = require("../../config/util/mongoose")

class MeController {
  //[GET] /me/stored/courses
  async storedCourses(req, res, next) {
    try {
      const course = await Course.find({})

      res.render("me/stored-courses", {
        course: multipleMongooseToObject(course),
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new MeController()
