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
    </div>
  )
}
//Export
export default Contact
