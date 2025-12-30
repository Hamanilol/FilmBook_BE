const router = require("express").Router()
const controller = require("../controllers/FavoritedController")

router.get("/", controller.GetFavorite)
router.post("/", controller.AddFavorite)
router.put("/:id", controller.UpdateFavorited)
router.delete("/:id", controller.DeleteFavorited)

module.exports = router
