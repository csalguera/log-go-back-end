const { Profile } = require('../models')
const cloudinary = require('cloudinary').v2

const index = async (req, res) => {
  try {
    const profiles = await Profile.findAll()
    res.json(profiles)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

const addPhoto = async (req, res) => {
  try {
    const imageFile = req.files.photo.path
    const profile = await Profile.findByPk(req.params.id)
    const image = await cloudinary.uploader.upload(
      imageFile, 
      { tags: `${req.user.email}` }
    )
    profile.photo = image.url
    await profile.save()
    res.status(201).json(profile.photo)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

const show = async (req, res) => {
  try {
    const profile = await Profile.findByPk(req.params.id, {
      include: { all: true }
    })
    res.status(200).json(profile)
  } catch (error) {
    res.status(500).json(error)
  }
}

const myProfile = async (req, res) => {
  try {
    const profile = await Profile.findByPk(req.user.profile.id)
    res.status(200).json(profile)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  index,
  addPhoto,
  show,
  myProfile,
}
