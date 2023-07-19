// Home Function
const Contact = () => {
  return (
    <div className="contact-div">
      <div className="banner"></div>
      <div className="icon-container">
        <div className="icon-div div-1">
          <img
            className="contact-icon"
            src="https://www.svgrepo.com/show/522430/phone.svg"
          />
          <h3 className="icon-div-header">Customer Support</h3>
        </div>
        <div className="icon-div div-2">
          <img
            className="contact-icon"
            src="https://www.svgrepo.com/show/311600/email-unread.svg"
          />
          <h3 className="icon-div-header">Email</h3>
        </div>
        <div className="icon-div div-3">
          <img
            className="contact-icon"
            src="https://www.svgrepo.com/show/486434/location-filled.svg"
          />
          <h3 className="icon-div-header">Locations</h3>
        </div>
      </div>
      <div className="FAQ">
        <h2>What documents do I need to rent a car?</h2>
          <p>Generally, you'll need a valid driver's license, a credit card in the renter's name for the deposit, and sometimes an additional form of identification like a passport or ID card.</p>
        <h2>What is the minimum age to rent a car?</h2>
          <p>The minimum age requirement varies by country and rental company. In most cases, the minimum age is 21 or 25. However, some companies may allow renters as young as 18 with additional fees or restrictions.</p>
        <h2>What happens if I return the car late?</h2>
          <p>Late returns may result in additional charges. Rental companies typically have a grace period, but if you exceed that time, you'll likely be charged for an extra day or at an hourly rate. It's advisable to inform the rental company if you anticipate being late.</p>
        <h2>Can someone else drive the rental car?</h2>
          <p>Additional drivers can usually be added to the rental agreement for an extra fee. The additional drivers must meet the age and license requirements of the rental company.</p>   
      </div>
    </div>
  )
}
//Export
export default Contact
