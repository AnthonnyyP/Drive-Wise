const Car = require('../models/car');

const createReview = async (req, res) => {
  let { review, rating, datePosted } = req.body;
  const newReview = {
    review: review,
    datePosted: datePosted,
    rating: rating,
    user: req.user._id,
  };
  const car = await Car.findById(req.params.id);
  car.reviews.push(newReview);
  try {
    await car.save();
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
  create: createReview,
  delete: deleteReview,
}