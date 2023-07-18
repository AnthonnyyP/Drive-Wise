// Imports


// CarCard Function
const CarCard = (props) => {
  return(
      <div className="carcard-body-div">
        <div>
        <img className="car-card-img" src={props.listing.image}alt={props.listing.title}/>
        </div>
        <div className="car-card-body">
          <h1>{props.listing.title}</h1>
          <h4>{props.listing.category}</h4>
          <p>${props.listing.price}.00/day</p>
          <p><strong>{props.listing.detail}</strong></p>
          <p>{props.listing.shortdescription}</p>
        </div>
      </div>
  )
}

//Exports
export default CarCard