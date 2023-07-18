// About Function
const About = () => {
  return (
    <div className="about-div">
      <div className="about-intro">
        <h1>DriveWise</h1>
        <p className="intro-p1">
          Welcome to DriveWise, your premier destination for reliable and
          convenient car rentals. Since our establishment in 2007, we have been
          dedicated to providing exceptional service and top-quality vehicles to
          customers like you. At DriveWise, we understand the importance of a
          seamless and enjoyable car rental experience. Whether you're planning
          a road trip, a business journey, or simply need a vehicle for everyday
          transportation, we've got you covered. Our extensive fleet offers a
          wide selection of well-maintained cars that cater to your specific
          needs and preferences.
        </p>
        <p className="intro-p2">
          Safety and reliability are paramount at DriveWise. We meticulously
          maintain our vehicles to ensure their optimal performance and your
          peace of mind. Additionally, our transparent pricing and competitive
          rates ensure that you receive excellent value for your money.
          DriveWise is more than just a car rental company; we're a trusted
          partner on your journey. Experience the freedom and convenience of
          driving with DriveWise, and let us be a part of your memorable
          adventures and successful travels.
        </p>
      </div>
      <div className="icon-container">
        <div className="icon-div div-1">
          <img
            className="connect"
            src="https://www.svgrepo.com/show/509193/people.svg"
          />
          <h3 className="icon-div-header">Connect</h3>
          <p className="icon-div-body">
            DriveWise enables you to stay connected with your loved ones and
            embark on exciting adventures together.
          </p>
        </div>
        <div className="icon-div div-2">
          <img
            className="reliability"
            src="https://www.svgrepo.com/show/503007/car.svg"
          />
          <h3 className="icon-div-header">Reliability</h3>
          <p className="icon-div-body">
            Drive with confidence and peace of mind, knowing that DriveWise is
            your reliable partner for all your car rental needs.
          </p>
        </div>
        <div className="icon-div div-3">
          <img
            className="value"
            src="https://www.svgrepo.com/show/308954/money-dollar-cash-funds.svg"
          />
          <h3 className="icon-div-header">Value</h3>
          <p className="icon-div-body">
            Experience the true value of car rental with DriveWise. No
            compromising on quality or breaking the bank.
          </p>
        </div>
      </div>
    </div>
  )
}

// Exports
export default About
