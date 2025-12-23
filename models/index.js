const mongoose = require("mongoose")
const ticketSchema = require("./ticket")
const favoritedSchema = require("./favorited")

const Ticket = mongoose.model("Ticket", ticketSchema)
const Favotrited = mongoose.model("Favorited", favoritedSchema)

module.exports = {
  Ticket, Favotrited
}
