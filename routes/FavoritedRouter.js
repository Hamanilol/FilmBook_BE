const router = require("express").Router()
const controller = require("../controllers/FavoritedController")
const middleware = require("../middleware")

router.get("/", middleware.stripToken, middleware.verifyToken, controller.GetFavorite)
router.post("/", middleware.stripToken, middleware.verifyToken, controller.AddFavorite)
router.put("/:id", middleware.stripToken, middleware.verifyToken, controller.UpdateFavorited)
router.delete("/:id", middleware.stripToken, middleware.verifyToken, controller.DeleteFavorited)

module.exports = router
