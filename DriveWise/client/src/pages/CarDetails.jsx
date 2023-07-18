// Imports
import { GetListing } from '../services/DetailService'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Reviews from '../components/Reviews'
import ReviewForm from '../components/ReviewForm'
import Maintenance from '../components/MaintenanceLog'

// CarDetails Function
const CarDetails = () => {
  const [details, setDetails] = useState({})

  let { listingId } = useParams()

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
            <h3>${details.price}.00/day</h3>
            <p>{details.detail}</p>
            <p>{details.longdescription}</p>
          </div>
        </div>
      </div>
      <div>
        {details.maintenance?.map((log) => (
          <Maintenance log={log} />
        ))}
      </div>
      <div>
        <div>
          <ReviewForm />
        </div>
        <div className="reviews-section">
          <h1>Reviews</h1>
          {details.reviews?.map((review) => (
            <Reviews review={review} />
          ))}
        </div>
      </div>
    </div>
  )
}

//Exports
export default CarDetails
