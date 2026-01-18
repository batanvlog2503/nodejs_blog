const Course = require("../models/Courses")
const { multipleMongooseToObject } = require("../../config/util/mongoose")
// tương tác với model cơ sở dữ liệu
class SiteController {
  //[GET] /
  async index(req, res) {
    // res.render('home');
    // res.json({
    //   name: "test",
    // })

    try {
      const courses = await Course.find({})
      //   res.json(courses)
      res.render("home", {
        courses: multipleMongooseToObject(courses),
        title: "Trang chủ",
      })
    } catch (error) {
      next(error)
    }
  }

  //[GET] /search
  search(req, res) {
    res.render("search")
  }
}

module.exports = new SiteController()
