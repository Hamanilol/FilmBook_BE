const mongoose = require("mongoose")
const ticketSchema = require("./ticket")

const Ticket = mongoose.model("Ticket", ticketSchema)

module.exports = {
  Ticket,
}
