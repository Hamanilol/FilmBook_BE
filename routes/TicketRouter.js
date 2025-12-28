const router = require("express").Router()
const controller = require("../controllers/TicketController")

router.get("/ticket", controller.GetTicket)
router.post("/ticket", controller.PostTicket)

module.exports = router
