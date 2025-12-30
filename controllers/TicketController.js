const { Ticket } = require("../models")

const GetTicket = async (req, res) => {
  try {
    let tickets = await Ticket.find({ user: res.locals.payload.id })
    res.status(200).send(tickets)
  } catch (error) {
    res.status(500).send({ msg: "Error getting all tickets!", error })
  }
}

const PostTicket = async (req, res) => {
  try {
    let newTicket = await Ticket.create({
      ticketType: req.body.ticketType,
      subject: req.body.subject,
      message: req.body.message,
      user: res.locals.payload.id,
    })
    res.status(200).send(newTicket)
  } catch (error) {
    res.status(500).send({ msg: "Error creating a new ticket!", error })
  }
}

module.exports = {
  GetTicket,
  PostTicket,
}
