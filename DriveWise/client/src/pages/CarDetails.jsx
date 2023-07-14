// Imports
import { GetListing } from "../services/DetailService"
import { useState, useEffect} from 'react-router-dom'
import { useParams } from "react-router-dom"

// CarDetails Function
const CarDetails = () => {
  const [details, setDetails] = useState([])

  let { listingId } = useParams()

  useEffect(() => {
    const handleListing = async () => {
      const data = await GetListing()
      console.log(data)
      setDetails(data)
    }
    handleListing()
  }, [listingId])

  return(
    <div className="cardetails-div">
      <div className="cardetails-body-div">

      </div>
    </div>
  )
}

//Exports
export default CarDetails