// Imports
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Search from '../components/Search'
import CarCard from '../components/CarCard'
import TypeCard from '../components/TypeCard'
import { GetListings } from '../services/ListingService'

// Home Function
const Home = ( {user} ) => {
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
