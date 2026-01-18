const Course = require("../models/Courses")
const slugify = require("slugify")
const { multipleMongooseToObject } = require("../../config/util/mongoose")
const { mongooseToObject } = require("../../config/util/mongoose")
class CourseController {
  // [Get] /search
  //   show(req, res) {
  //     res.send("Course Detail >>>>" + req.params.slug) // khi truy vấn sẽ dùng req.params.slug
  //   }

  async show(req, res, next) {
    try {
      const course = await Course.findOne({ slug: req.params.slug })

      //res.json(course) // lấy course json
      if (!course) {
        return res.status(404).render("errors/404") // ← đường dẫn tương đối
      }
      res.render("courses/show", {
        course: mongooseToObject(course),
      })
    } catch (error) {
      next(error)
    }
  }
  index(req, res) {
    res.send("index of Courses")
  }
  // [Get] // courses/create
  create(req, res) {
    // tại UI để hiện ra form thôi
    res.render("courses/create")
  }

  //[POST] // courses/store

  async store(req, res, next) {
    // res.json(req.body)
    try {
      const formData = req.body
      // có thể new Course(formData) nếu có update thêm gì đó

      formData.slug = slugify(req.body.name, { lower: true, strict: true }) // chuyển đỏi slug
      const course = new Course(formData)
      await course.save()

      // Sau khi lưu xong → chuyển trang
      res.redirect("/")

      // hoặc: res.redirect(`/courses/${course.slug}`)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new CourseController()
