import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './Navbar';

function Contact() {
  const [addressData, setAddressData] = useState([]);

  useEffect(() => {
    try {
      axios.get('http://localhost:8000/contact')
        .then((response) => {
          setAddressData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching address data:', error);
        });
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }, []);
  

  return (
    <>
      <NavBar />

      <div className="chm3">
        <div className="ctxt">
          <div className="text-sky-600 text-4xl">Contact Us</div>
          <center><img src="./src/loc.png" className="cimg" alt="Location" /></center>
          <h2 className='ctitle'>Our Office Address</h2>
          <div className="ctxt">
            {addressData.map((item, index) => (
              <div key={index}>{item.address}</div>
            ))}
          </div>

          <h2 className='ctitle'>General Enquiries</h2>
          <div className="ctxt">
          {addressData.map((item, index) => (
              <div key={index}>{item.enquiry}</div>
            ))}
          </div>

          <h2 className='ctitle'>Make Appointment</h2>
          <div className="ctxt">
          {addressData.map((item, index) => (
              <div key={index}>{item.appointment}</div>
            ))}
          </div>

          <h2 className='ctitle'>Call Us</h2>
          <div className="ctxt">
          {addressData.map((item, index) => (
              <div key={index}>{item.phone}</div>
            ))}
          </div>

          <h2 className='ctitle'>Our Timings</h2>
          <div className="ctxt">
            Mon-Fri: 9.00 AM - 7.00 PM <br />
            Sat-Sun: 10.00 AM - 3.00 PM
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
