const Review = require('../models/Review')
const Listing = require('../models/Listing');


const createReview = async (req, res) => {
  let { review, rating } = req.body;
  console.log(req.params.id)
  const newReview = {
    review: review,
    rating: rating,
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

const deleteReview = async (req, res) => {
  await Review.findByIdAndDelete(req.params.reviewid)
  let listing = await Listing.findById(req.params.listingid)
  let review = listing.reviews.find((review) => {
    return review._id.toString() === req.params.reviewid
  })
  let index = listing.reviews.indexOf(review)
  listing.reviews.splice(index, 1)
  listing.save()
  return res.send(`Review with ${req.params.listingid} deleted.`)
}

module.exports = {
  create: createReview,
  delete: deleteReview,
  update: updateReview,
}
