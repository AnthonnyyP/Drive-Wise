const Review = require('../models/Review')
const Listing = require('../models/Listing')

const createReview = async (req, res) => {
  let { review, rating } = req.body;
  const newReview = {
    review: review,
    rating: rating,
    user: req.params.userid
  } 
  try {
    const userReview = await Review.create(newReview);
    const carReview = await Listing.findById(req.params.id);
    await carReview.reviews.push(userReview.id);
    await carReview.save();
    return res.status(201).json(userReview);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const updateReview = async (req, res) => {
  const { review, rating } = req.body;
  const reviewId = req.params.reviewid;
  try {
    const updatedReview = await Review.findByIdAndUpdate(reviewId, {
      review: review,
      rating: rating,
    });
    if (!updatedReview) {
      return res.status(404).json({ error: 'Review not found' });
    }
    return res.status(200).json(updatedReview);
  } catch (err) {
    return res.status(500).json(err);
  }
};

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
  create: createReview,
  delete: deleteReview,
  update: updateReview,
}
