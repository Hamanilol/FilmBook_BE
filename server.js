const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const PORT = process.env.PORT || 3000

const AuthRouter = require("./routes/AuthRouter")
const FavoritedRouter = require("./routes/FavoritedRouter")
const TicketRouter = require("./routes/TicketRouter")
const PostRouter = require("./routes/PostRouter")

const db = require("./db")
const { Ticket } = require("./models/ticket")
const { Favorited } = require("./models/favorited")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan("dev"))

app.use("/auth", AuthRouter)
app.use("/ticket", TicketRouter)
app.use("/posts", PostRouter)
app.use("/favorite", FavoritedRouter)

app.listen(PORT, () => {
  console.log(`Express Server Running on Port`, PORT, `. . .`)
})
