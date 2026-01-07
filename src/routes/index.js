const newsRouter = require('./news');
const siteRouter = require('./site');
function route(app) {
    app.use('/news', newsRouter);

    app.use('/', siteRouter);
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

module.exports = route;
