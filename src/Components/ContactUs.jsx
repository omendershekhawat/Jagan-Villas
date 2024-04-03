import React from 'react'
import './ContactUs.css'
import office from '../assets/office1.jpg'
import call from '../assets/icons/Call.png'
import location from '../assets/icons/location.png'
import gmail from '../assets/icons/gmail.png'
import whatsapp from '../assets/icons/whatsapp.png'
import onour from '../assets/icons/onour.png'

// import onour from '../assets/onour.jpg'




const ContactUs = () => {


  return (
    <div className="contact">
      <div className="top-part">
        <img src={office} alt="NOt AvailAble" />
        <h1>Contact Us</h1>
        {/* <span></span> */}
      </div>
      <div className="bottom-part">
        <div className="container">
          <form>
            <input type="text" placeholder='Please enter your name' />
            <input type="email" placeholder='Please enter your Email' />
            <textarea placeholder='Please drop a Message'></textarea>
            <input type="submit" value="Submit" id='submitBtn' />
            {/* <input type="submit" value="Submit"/>
            <a href="mailto:omendershekhawat1@gmail.com?subject=Form Submission" id="submitBtn"><input type="Submit" value="Submit"/></a> */}
            {/* <div className="image">
              <img src={onour} alt="image not found" />
              <h4>Balbadhra Singh Shekhawat</h4>
              
            </div> */}


          </form>
         
          <div className="support">
            <div className="item-box">
              <img src={call} alt="Not Available" />
              <div>
                <h3>+91 9460066518</h3>
                <h3>+91 7597607102</h3>
              </div>
            </div>


            <div className="item-box">
              <img src={location} alt="Not Available" />
              <a href="" id='location'>C-23,Berwa Colony, Bajaj Nagar, Jaipur - 302015</a>
            </div> 

              

              



            
            <div className="item-box">
              <img src={gmail} alt="Not Available" />
              <a href="jaganvillas07@gmail.com">jaganvillas07@gmail.com</a>

            </div>
            <div className="item-box">
              <img src={whatsapp} alt="Not Available" />
              <a href={`https://wa.me/+917597607102?text=${encodeURIComponent("Hello i want to have a seat in you PG.")}`}>Jagan Villas</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;

