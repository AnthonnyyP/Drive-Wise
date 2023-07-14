// Imports


// CarCard Function
const CarCard = (props) => {
  return(
    <div className="carcard-div">
      <div className="carcard-body-div">
        <div>
        <img className="car-card-img" src={props.listing.image}alt={props.listing.title}/>
        </div>
        <h2>{props.listing.category}</h2>
        <h4>{props.listing.title}</h4>
        <p>{props.listing.detail}</p>
        <p>{props.listing.description}</p>
        <p>{props.listing.price}</p>
      </div>
    </div>
  )
}

//Exports
export default CarCard