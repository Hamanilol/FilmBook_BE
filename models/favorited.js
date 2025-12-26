const { Schema } = require("mongoose")

const favoritedSchema = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    movie: {type: String, required: true }
  },
  { timestamps: true }
)

module.exports = favoritedSchema
