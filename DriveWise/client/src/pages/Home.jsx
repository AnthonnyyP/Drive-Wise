// Imports
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GetListings } from '../services/ListingService'
import CarCard from '../components/CarCard'


// Home Function
const Home = () => {
  const [listings, setListing] = useState([])

  useEffect(() => {
    const handleListing = async () => {
      const data = await GetListings()
      setListing(data)
    }
    handleListing()
  }, [])

  return(
    <div className="home-div">
      <h1 className='tagline-header'>REMEMBER TO DRIVE WISE!</h1>
      <div className="all-listings-div">
      {listings.map((listing) => (
        <Link
          to={`listings/${listing._id}`}
          key={listing.id}
        >
          <CarCard 
            listing={listing}
          />
        </Link>
          ))}
      </div>
    </div>
  )
}

//Exports
export default Home
