const express = require("express")
const router = express.Router()
const newsController = require("../app/controllers/NewController")

router.get("/:slug", newsController.show)

// Route	Ý nghĩa	Dùng khi
// /news/:slug	slug là biến	URL động
// /news/slug	slug là text cố định	URL cố định
router.get("/", newsController.index)

// 1. router.use() là gì?

// 👉 router.use() dùng để:

// Bắt TẤT CẢ HTTP methods

// (GET, POST, PUT, DELETE, …)

// Thường dùng cho middleware

// 2. router.get() là gì?

// 👉 router.get():

// Chỉ bắt GET request

// Dùng cho render trang / lấy dữ liệu
module.exports = router
