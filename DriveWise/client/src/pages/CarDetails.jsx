// Imports
import { GetListing } from "../services/DetailService"
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

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

  return(
    <div className="cardetails-div">
      <div className="cardetails-body-div">
        <img src={details.image}/>
        <h1>{details.title}</h1>
        <h2>{details.category}</h2>
        <h3>{details.price}</h3>
        <p>{details.detail}</p>
        <p>{details.description}</p>
      </div>
      <div className="reviews-section">

      </div>
    </div>
  )
}

//Exports
export default CarDetails