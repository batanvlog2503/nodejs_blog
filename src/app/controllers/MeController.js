const Course = require("../models/Courses")
const slugify = require("slugify")
const { multipleMongooseToObject } = require("../../config/util/mongoose")
const { mongooseToObject } = require("../../config/util/mongoose")

class MeController {
  //[GET] /me/stored/courses

  async storedCourses(req, res, next) {
    try {
      let courseQuery = Course.find({})
      if (req.query._sort) {
        courseQuery = courseQuery.sort({
          [req.query.column]: req.query.type,
        })
      }

      const course = await courseQuery

      const deletedCourse = await Course.countDocumentsDeleted()

      res.render("me/stored-courses", {
        course: multipleMongooseToObject(course),
        deletedCourse,
      })
      console.log(deletedCourse)
    } catch (error) {
      next(error)
    }
  }
  async trashedCourses(req, res, next) {
    try {
      const course = await Course.findDeleted({})

      res.render("me/trashed-courses", {
        course: multipleMongooseToObject(course),
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new MeController()
