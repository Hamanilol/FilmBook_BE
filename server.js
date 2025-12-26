const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const FavoritedRouter = require("./routes/FavoritedRouter")

const PORT = process.env.PORT || 3000

const db = require("./db")
const { Ticket } = require("./models")
const { Favorited } = require("./models/favorited")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan("dev"))



app.use('/favorite', FavoritedRouter)

app.get("/tickets", async (req, res) => {
  try {
    let tickets = await Ticket.find({})
    res.status(200).send(tickets)
  } catch (error) {
    res.status(500).send({ msg: "Error getting all tickets!", error })
  }
})

app.post("/tickets", async (req, res) => {
  try {
    let newTicket = await Ticket.create(req.body)
    res.status(200).send(newTicket)
  } catch (error) {
    res.status(500).send({ msg: "Error creating a new ticket!", error })
  }
})

app.listen(PORT, () => {
  console.log(`Express Server Running on Port`, PORT, `. . .`)
})
