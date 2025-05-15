"use client"

import { useState, useEffect } from "react"

export default function HeroSection() {
  const [checkInDate, setCheckInDate] = useState("")
  const [checkOutDate, setCheckOutDate] = useState("")
  const [guests, setGuests] = useState("2 Adults")
  const [rooms, setRooms] = useState("1")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle booking form submission
    console.log({ checkInDate, checkOutDate, guests, rooms })
  }

    useEffect(() => {

    document.querySelectorAll('.set-bg').forEach((el) => {
      const bg = el.getAttribute('data-setbg');
      if (bg) {
        el.style.backgroundImage = `url(${bg})`;
      }
    });
  }, []);

  return (
      <section className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-text">
              <h1>Shree RADHA Madhavam Resort</h1>
              <p>
                Here are the best hotel booking sites, including recommendations for international
                travel and for finding low-priced hotel rooms.
              </p>
              <a href="#" className="primary-btn">Discover Now</a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
            <div className="booking-form">
              <h3>Booking Your Hotel</h3>
              <form action="#">
                <div className="check-date">
                  <label htmlFor="date-in">Check In:</label>
                  <input type="text" className="date-input" id="date-in" />
                  <i className="icon_calendar"></i>
                </div>
                <div className="check-date">
                  <label htmlFor="date-out">Check Out:</label>
                  <input type="text" className="date-input" id="date-out" />
                  <i className="icon_calendar"></i>
                </div>
                <div className="select-option">
                  <label htmlFor="guest">Guests:</label>
                  <select id="guest">
                    <option value="">2 Adults</option>
                    <option value="">3 Adults</option>
                  </select>
                </div>
                <div className="select-option">
                  <label htmlFor="room">Room:</label>
                  <select id="room">
                    <option value="1">1 Room</option>
                    <option value="2">2 Room</option>
                    <option value="3">3 Room</option>
                    <option value="4">4 Room</option>
                    <option value="5">5 Room</option>
                  </select>
                </div>
                <button type="submit">Check Availability</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-slider owl-carousel">
        <div className="hs-item set-bg" data-setbg="/hero-1.jpg"></div>
        {/* <div className="hs-item set-bg" data-setbg="/hero-2.jpg"></div>
        <div className="hs-item set-bg" data-setbg="/hero-3.jpg"></div> */}
      </div>
    </section>
  
  )
}
