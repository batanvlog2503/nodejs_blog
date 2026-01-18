const newsRouter = require("./news")
const siteRouter = require("./site")
const coursesRouter = require("./courses")
function route(app) {
  app.use("/news", newsRouter) // hiểu đơn giản đây là root của 1 đường dẫn nào đó
  // còn các file js khác liên quan đến newsRouter sẽ đi các đường tiếp theo với gốc là /news

  app.use("/", siteRouter)

  app.use("/courses", coursesRouter)
  //   app.get("/", (req, res) => {
  //     return res.send(`
  //     <h1>Hello tat ca moi nguoi</h1>
  //     `)
  //   })
  //   app.get("/tin-tuc", (req, res) => {
  //     res.render("home") // render file home.hbs
  //   })

  //   app.get("/news", (req, res) => {
  //     res.render("news") // render file home.hbs
  //     console.log(req.query.q)
  //   })

  //   app.get("/search", (req, res) => {
  //     console.log(req.query)
  //     res.render("search")
  //   })
  //   app.post("/search", (req, res) => {
  //     console.log(req.body) // sử dụng vói post là body
  //     res.send("")
  //   })
}

module.exports = route
