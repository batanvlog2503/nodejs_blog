const express = require("express")
const path = require("path")
const morgan = require("morgan")
const { engine } = require("express-handlebars") // ← import đúng
const db = require("./config/db") // cài đặt config
// connect db
db.connect()
const app = express()
const port = 3000
const route = require("./routes") // tu tim file index
const methodOverride = require("method-override")

// override with POST having ?_method=DELETE 
app.use(methodOverride("_method"))
const helpers = require("../src/helpers/helpers")
// HTTP logger
app.use(morgan("combined"))
app.use(express.static(path.join(__dirname, "public")))
// sử dụng được file scss file tĩnh
// Template engine setup

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

console.log("Static path:", path.join(__dirname, "public"))
app.engine("hbs", engine({ extname: ".hbs", helpers: helpers })) // ← đặt ext là .hbs
app.set("view engine", "hbs") // ← view engine là hbs tu tim den file hbs
app.set("views", path.join(__dirname, "resources", "views"))

// debug path
console.log("Views path:", path.join(__dirname, "resources\\views"))

// app.get("/", (req, res) => {
//   return res.send(`
//     <h1>Hello tat ca moi nguoi</h1>
//     `)
// })
// app.get("/tin-tuc", (req, res) => {
//   res.render("home") // render file home.hbs
// })

// app.get("/news", (req, res) => {
//   res.render("news") // render file home.hbs
//   console.log(req.query.q)
// })

// app.get("/search", (req, res) => {
//   console.log(req.query)
//   res.render("search")
// })
// app.post("/search", (req, res) => {
//   console.log(req.body) // sử dụng vói post là body
//   res.send("")
// })
route(app)
app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
