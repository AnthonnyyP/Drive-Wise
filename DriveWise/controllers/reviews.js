const Review = require('../models/Review')
const Listing = require('../models/Listing')

const createReview = async (req, res) => {
  let { review, rating } = req.body
  const newReview = {
    review: review,
    rating: rating,
    user: req.params.userid
  } 
  try {
    const userReview = await Review.create(newReview)
    const carReview = await Listing.findById(req.params.id)
    await carReview.reviews.push(userReview.id)
    await carReview.save()
    return res.status(201).json(userReview)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const deleteReview = (req, res, next) => {
  Car.findOne({
    'reviews._id': req.params.id,
    'reviews.user': req.user._id
  }).then((car) => {
    if (!car) return res.redirect('/listings')
    car.reviews.remove(req.params.id)
    car
      .save()
      .then(() => {
        res.redirect(`/car/${car._id}`)
      })
      .catch((error) => {
        return next(error)
      })
  })
}

module.exports = {
  createReview,
  delete: deleteReview
}
