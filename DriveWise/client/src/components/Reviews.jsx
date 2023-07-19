import { useState } from 'react'
import { UpdateReview, DeleteReview } from '../services/ReviewsServices'
import { useParams } from 'react-router-dom'

const Reviews = (props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [updatedReview, setUpdatedReview] = useState(props.review.review)

  let { listingId } = useParams()

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleUpdate = async () => {
    try {
      let review = await UpdateReview(props.review._id, {
        review: updatedReview,
        rating: props.review.rating
      })
      props.updateReviews('update', review, props.index)
      setIsEditing(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async () => {
    try {
      let review = await DeleteReview(props.review._id, listingId)
      props.updateReviews('delete', review, props.index)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setUpdatedReview(e.target.value)
  }

  return (
    <div className="review-div">
      <div className="top-items">
        <h4>User: {props.review.name}</h4>
        <h4>Rating: {props.review.rating}/5</h4>
      </div>
      {isEditing ? (
        <div className="review">
          <textarea
            rows="2"
            cols="50"
            value={updatedReview}
            onChange={handleChange}
          ></textarea>
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div className="review">
          <p>{props.review.review}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  )
}

export default Reviews
