const { Favorited } = require("../models")

const GetFavorite = async (req, res) => {
  try {
    const favorites = await Favorited.find({})
    res.status(200).send(favorites)
  } catch (error) {
    throw error
  }
}

const AddFavorite = async (req, res) => {
  try {
    const favorite = await Favorited.create(req.body)
    res.status(200).send(favorite)
  } catch (error) {
    throw error
  }
}

const UpdateFavorited = async (req, res) => {
  try {
    const favorite = await Favorited.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.status(200).send(favorite)
  } catch (error) {
    throw error
  }
}

const DeleteFavorited = async (req, res) => {
  try {
    await Favorited.deleteOne({ _id: req.params.id })
    res.status(200).send({ msg: "Removed from Favorites", id: req.params.id })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetFavorite,
  AddFavorite,
  UpdateFavorited,
  DeleteFavorited,
}
