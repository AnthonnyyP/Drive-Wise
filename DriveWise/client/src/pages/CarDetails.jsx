// Imports
import { GetListing } from '../services/DetailService'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Reviews from '../components/Reviews'
import ReviewForm from '../components/ReviewForm'

// CarDetails Function
const CarDetails = () => {
  const [details, setDetails] = useState([])

  let { listingId } = useParams()
  console.log(listingId)
  useEffect(() => {
    const handleListing = async () => {
      const data = await GetListing(listingId)
      setDetails(data)
    }
    handleListing()
  }, [listingId])

  return (
    <div className="page-div">
      <div className="cardetails-div">
        <h1>Listing Details</h1>
        <div className="cardetails-body-div">
          <div className="details-img">
            <img className="car-card-img" src={details.image} />
          </div>
          <div className="details-body">
            <h1>{details.title}</h1>
            <h2>{details.category}</h2>
            <h3>{details.price}</h3>
            <p>{details.detail}</p>
            <p>{details.description}</p>
          </div>
        </div>
      </div>
      <div className="reviews-section">
        <h1>Leave a Review</h1>
        <ReviewForm/>
        <h1>Reviews</h1>
        <Reviews/>
      </div>
    </div>
  )
}

//Exports
export default CarDetails
