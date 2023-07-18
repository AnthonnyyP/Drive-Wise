// Reviews Function
const Reviews = (props) => {
  return (
    <div className="review-div">
      <div className="rating">
        <p>{props.review.rating}</p>
      </div>
      <div className="review">
        <p>{props.review.review}</p>
      </div>
    </div>
  )
}
// Export
export default Reviews
