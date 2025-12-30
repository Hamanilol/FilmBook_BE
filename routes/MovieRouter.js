const router = require("express").Router()
const axios = require("axios")

router.get("/", async (req, res) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}`
  )
  res.send(response.data.results)
})

module.exports = router
