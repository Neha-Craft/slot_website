"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState("2 Adults");
  const [rooms, setRooms] = useState("1");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking form submission
    console.log({ checkInDate, checkOutDate, guests, rooms });
  };

  useEffect(() => {
    document.querySelectorAll(".set-bg").forEach((el) => {
      const bg = el.getAttribute("data-setbg");
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
            Welcome to Shree RADHA Madhavam Resort — a serene getaway nestled in the heart of Gwalior. Experience luxury, tradition, and tranquility all in one enchanting destination.
              </p>
              <a href="#" className="primary-btn">
                Discover Now
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
            <div className="booking-form">
           <h3>Reserve Your Stay</h3>

              <form action="#">
                <div>
                <div className="select-option">
                  <label htmlFor="event">Select Event</label>
                  <select id="event">
                    <option value="wedding">Wedding Ceremony</option>
                    <option value="reception">Reception Party</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Celebration</option>
                    <option value="anniversary">Anniversary Party</option>
                    <option value="retreat">Wellness Retreat</option>
                    <option value="team-building">
                      Team Building Activity
                    </option>
                    <option value="conference">Business Conference</option>
                    <option value="festival">Cultural Festival</option>
                    <option value="private-dinner">Private Dinner</option>
                  </select>
                </div>

                <div className="check-date">
                  <label htmlFor="date-in">Contact Person</label>
                  <input type="text" className="date-input" id="date-in" />
             
                </div>
                <div className="check-date">
  <label htmlFor="phone">Phone Number:</label>
  <input type="text" id="phone" className="date-input" placeholder="e.g., +1 234 567 8901" />
</div>
<div className="check-date">
  <label htmlFor="event-date">Event Date:</label>
  <input type="text" className="date-input" id="event-date" placeholder="MM/DD/YYYY" />
  <i className="icon_calendar"></i>
</div>

</div>

              
           
                
         
                <div className="select-option">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Your message here..."
                    className="select-textarea"
                  ></textarea>
                </div>
                <button type="submit">Send Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-slider owl-carousel">
        <div className="hs-item set-bg" data-setbg="/hero-1.jpg"></div>
 
      </div>
    </section>
  );
}
