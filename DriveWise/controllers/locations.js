const { Car } = require('../models/Booking')

const GetCar = async (req, res) => {
  try {
    const carDetails = await Car.findById()
    res.return(carDetails)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCar
}
