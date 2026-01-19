const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Course = new Schema(
  {
    name: { type: String, maxLength: 255, required: true },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },

    videoId: { type: String, maxLength: 255 },
    level: { type: String, maxLength: 255 },
    slug: { type: String, unique: true },
  },
  {
    timestamps: true, //tự tọa createdAt, updateAt
  },
)
// code: Schema.plugin(mongooseDelete)
// add plugin
const mongooseDelete = require("mongoose-delete")
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" }) // sử dụng moongoseDelte

module.exports = mongoose.model("Course", Course)
