const mongoose = require("mongoose")
const userSchema = require("./User")
const ticketSchema = require("./ticket")
const favoritedSchema = require("./favorited")

const User = mongoose.model("User", userSchema)
const Ticket = mongoose.model("Ticket", ticketSchema)
const Favorited = mongoose.model("Favorited", favoritedSchema)

module.exports = {
  Ticket,
  Favorited,
  User,
}
