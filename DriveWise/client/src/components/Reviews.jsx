// Reviews Function
const Reviews = (props) => {
  return (
    <div className="review-div">
      <div className="top-items">
        <h4>User: {props.review.name}</h4>

        <h4>Rating: {props.review.rating}/5</h4>
      </div>
      <div className="review">
        <p>{props.review.review}</p>
      </div>
    </div>
  )
}
// Export
export default Reviews
