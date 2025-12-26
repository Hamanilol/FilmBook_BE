const { Schema } = require("mongoose")

const favoritedSchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    movie: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = favoritedSchema
