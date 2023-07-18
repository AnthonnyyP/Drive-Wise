// Imports
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { MakeReview } from '../services/ReviewsServices'
// Review Form Function
const ReviewForm = (props) => {
  const initialState = {
    rating: '1',
    review: ''
  }
  const [formState, setFormState] = useState(initialState)

  const { listingId } = useParams()

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await MakeReview(listingId, {
      rating: parseInt(formState.rating),
      review: formState.review
    })
    props.handleListing()
    setFormState(initialState)
  }

  return (
    <div className="review-form">
      <h1>Leave a Review</h1>
      <form id="add-review-form" onSubmit={handleSubmit}>
        <label htmlFor="rating">Rating:</label>
        <select
          id="rating"
          name="rating"
          onChange={handleChange}
          value={formState.rating}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label htmlFor="review">Review:</label>
        <textarea
          id="review"
          name="review"
          rows="2"
          cols="50"
          value={formState.review}
          onChange={handleChange}
        ></textarea>
        <button type="submit" name="submit">
          Post
        </button>
      </form>
    </div>
  )
}
//Export
export default ReviewForm
