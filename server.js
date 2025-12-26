const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const PORT = process.env.PORT || 3000

const AuthRouter = require("./routes/AuthRouter")
const db = require("./db")
const { Ticket } = require("./models")
const { Favorited } = require("./models/favorited")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan("dev"))

app.get("/favorited", async (req, res) => {
  try {
    let favorited = await Favorited.find({})
    res.status(200).send(favorited)
  } catch (error) {
    res
      .status(500)
      .send({ msg: "Error getting all of your favorited movies!", error })
  }
})

app.post("/favorited", async (req, res) => {
  try {
    let favorited = await Favorited.create(req.body)
    res.status(200).send(favorited)
  } catch {
    throw error
  }
})

app.update("/favorited/:id", async (req, res) => {
  try {
    let favorited = await Favorited.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).send(favorited)
  } catch {
    throw error
  }
})
app.delete("/favorited/:id", async (req, res) => {
  try {
    let favorited = await Favorited.deleteOne({ _id: req.params.id })
    res.status(200).send({ msg: "Removed from favorited", id: req.params.id })
  } catch (error) {
    throw error
  }
})

app.use("/auth", AuthRouter)

app.use("/favorite", FavoritedRouter)

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
