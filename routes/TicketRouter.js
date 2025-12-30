const router = require("express").Router()
const controller = require("../controllers/TicketController")
const middleware = require("../middleware")

router.get(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetTicket
)
router.post(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  controller.PostTicket
)

module.exports = router
