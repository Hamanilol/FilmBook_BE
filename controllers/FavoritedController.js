const { Favotrited } = require("../models")

const { favorited } = require
const GetFavorite = async (req, res) => {
  try {
    const posts = await Favotrited.find({})
    res.status(200).send(favorited)
  } catch (error) {
    throw error
  }
}

const AddFavorite = async (req, res) => {
  try {
    const post = await Favotrited.create(req.body)
    res.status(200).send(post)
  } catch (error) {
    throw error
  }
}

const UpdateFavorited = async (req, res) => {
  try {
    const post = await Favotrited.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.status(200).send(post)
  } catch (error) {
    throw error
  }
}

const DeleteFavorited = async (req, res) => {
  try {
    await Post.deleteOne({ _id: req.params.id })
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
