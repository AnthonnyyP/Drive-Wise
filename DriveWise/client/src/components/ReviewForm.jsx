import { useState } from 'react'
import { MakeReview } from '../services/ReviewsServices'

const ReviewForm = () => {
  const initialState = {
    rating: '1',
    review: '',
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (e) => {
    setFormState({...formState, [e.target.id]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await MakeReview('http://localhost:3001/listings/:id/reviews', formState)
    setFormState(initialState)
  }

  return(
    <div className="review-form">
      <form id="add-review-form" onSubmit={handleSubmit}>
        <label htmlFor="rating">Rating:</label>
            <select 
            id="rating" 
            name="select" 
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
          rows="2" 
          cols="50" 
          value={formState.review}
          onChange={handleChange}>
          </textarea>
          <button type="submit" name="submit">Post</button>
      </form>
      
    </div>
  )
}

export default ReviewForm