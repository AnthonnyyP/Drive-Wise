const Review = require('../models/Review');

const createReview = async (req, res) => {
  let { review, rating, datePosted } = req.body;
  const newReview = {
    review: review,
    datePosted: datePosted,
    rating: rating,
    user: req.user._id,
  };
  
  const carReview = await Review.findById(req.params.id);
  carReview.review.push(newReview);
  try {
    await carReview.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/car/${car._id}`);
};

const deleteReview = (req, res, next) => {
  Car.findOne({
    'reviews._id': req.params.id, 
    'reviews.user': req.user._id, 
  }).then((car) => {
    if (!car) return res.redirect('/listings');
    car.reviews.remove(req.params.id);
    car.save().then(() => {
      res.redirect(`/car/${car._id}`)
    })
    .catch((error)=> {
      return next(error)
    })
  })
}

module.exports = {
  createReview,
  delete: deleteReview,
}