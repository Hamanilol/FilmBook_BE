const router = require('express').Router()
const controller = require('../controllers/FavoritedController')


router.get('/favorited', controller.GetFavorite)
router.post('/favorited',controller.AddFavorite)
router.put('/favorited/:id',controller.UpdateFavorited)
router.delete('/favorited/:id',controller.DeleteFavorited)

module.exports = router
