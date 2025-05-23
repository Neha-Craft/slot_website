"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const [event, setEvent] = useState("wedding");
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const formData = {
      name: contactPerson,
      email,
      message,
      event,
      contactPerson,
      phone,
      eventDate,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        setSuccess(true);
        // Clear the form
        setContactPerson("");
        setEmail("");
        setPhone("");
        setEventDate("");
        setMessage("");
        setEvent("wedding");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(false), 3000); // Remove tick after 3 seconds
    }
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
              <h3>Celebrate With Us</h3>
              <form onSubmit={handleSubmit}>
                <div className="select-option">
                  <label htmlFor="event">Select Event</label>
                  <select
                    id="event"
                    value={event}
                    onChange={(e) => setEvent(e.target.value)}
                  >
                    <option value="wedding">Wedding Ceremony</option>
                    <option value="reception">Reception Party</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Celebration</option>
                    <option value="anniversary">Anniversary Party</option>
                    <option value="retreat">Wellness Retreat</option>
                    <option value="team-building">Team Building Activity</option>
                    <option value="conference">Business Conference</option>
                    <option value="festival">Cultural Festival</option>
                    <option value="private-dinner">Private Dinner</option>
                  </select>
                </div>

                <div className="check-date">
                  <label htmlFor="contact-person">Contact Person</label>
                  <input
                    type="text"
                    className="date-input"
                    id="contact-person"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    required
                  />
                </div>

                <div className="check-date">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="check-date">
                  <label htmlFor="phone">Phone Number:</label>
                  <input
                    type="text"
                    id="phone"
                    className="date-input"
               
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="select-option">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Your message here..."
                    className="select-textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <button type="submit" disabled={loading} className="submit-btn">
                  {loading ? (
                    <span>Sending...</span>
                  ) : success ? (
                    <span>✔ Sent</span>
                  ) : (
                    "Send Now"
                  )}
                </button>
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





