"use client"
import { useState } from "react"

export default function FacilitiesInfo() {
  const [activeTab, setActiveTab] = useState("rooms")

  return (
    <div className="facilities-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Our Facilities</h2>
              <p>Discover comfort and luxury at our premium accommodations</p>
            </div>
          </div>
        </div>

        <div className="facilities-tabs">
          <div className="facilities-tab-nav">
            <button
              className={`tab-btn ${activeTab === "rooms" ? "active" : ""}`}
              onClick={() => setActiveTab("rooms")}
            >
              <i className="fa fa-bed"></i> Rooms & Halls
            </button>
            <button
              className={`tab-btn ${activeTab === "amenities" ? "active" : ""}`}
              onClick={() => setActiveTab("amenities")}
            >
              <i className="fa fa-swimming-pool"></i> Amenities
            </button>
            <button
              className={`tab-btn ${activeTab === "events" ? "active" : ""}`}
              onClick={() => setActiveTab("events")}
            >
              <i className="fa fa-glass-cheers"></i> Events
            </button>
            <button
              className={`tab-btn ${activeTab === "contact" ? "active" : ""}`}
              onClick={() => setActiveTab("contact")}
            >
              <i className="fa fa-phone"></i> Contact
            </button>
          </div>

          <div className="facilities-tab-content">
            {activeTab === "rooms" && (
              <div className="tab-pane">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="facility-item">
                      <div className="facility-icon">
                        <i className="fa fa-bed"></i>
                      </div>
                      <div className="facility-text">
                        <h5>AC Rooms</h5>
                        <p>8 AC rooms available</p>
                        <p className="price">
                          ₹2,000 <span>per night</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="facility-item">
                      <div className="facility-icon">
                        <i className="fa fa-users"></i>
                      </div>
                      <div className="facility-text">
                        <h5>AC Halls</h5>
                        <p>2 AC halls (6 person capacity per hall)</p>
                        <p className="price">
                          ₹3,000 <span>per hall</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="facility-item">
                      <div className="facility-icon">
                        <i className="fa fa-building"></i>
                      </div>
                      <div className="facility-text">
                        <h5>Standard Halls</h5>
                        <p>2 Halls (40-50 people capacity)</p>
                        <p className="price">
                          ₹5,000 <span>per hall</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="facility-item">
                      <div className="facility-icon">
                        <i className="fa fa-glass-cheers"></i>
                      </div>
                      <div className="facility-text">
                        <h5>Banquet Hall</h5>
                        <p>300 person capacity</p>
                        <p className="price">
                          ₹50,000 <span>for 200 persons</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "amenities" && (
              <div className="tab-pane">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="amenity-item">
                      <div className="amenity-icon">
                        <i className="fa fa-car"></i>
                      </div>
                      <div className="amenity-text">
                        <h5>Parking</h5>
                        <p>Spacious parking available for all guests</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="amenity-item">
                      <div className="amenity-icon">
                        <i className="fa fa-wifi"></i>
                      </div>
                      <div className="amenity-text">
                        <h5>Free WiFi</h5>
                        <p>High-speed internet throughout the property</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="amenity-item">
                      <div className="amenity-icon">
                        <i className="fa fa-swimming-pool"></i>
                      </div>
                      <div className="amenity-text">
                        <h5>Swimming Pool</h5>
                        <p>Refreshing pool for our guests</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="property-info">
                      <h4>Property Details</h4>
                      <p>
                        <i className="fa fa-square"></i> 75,000 sq/ft total area
                      </p>
                      <p>
                        <i className="fa fa-map-marker-alt"></i> Landmark: Mau road, near Dandraua
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "events" && (
              <div className="tab-pane">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="events-info">
                      <h4>We Host</h4>
                      <div className="events-list">
                        <div className="event-item">
                          <div className="event-icon">
                            <i className="fa fa-heart"></i>
                          </div>
                          <div className="event-text">
                            <h5>Weddings</h5>
                            <p>Make your special day memorable with our elegant venues</p>
                          </div>
                        </div>
                        <div className="event-item">
                          <div className="event-icon">
                            <i className="fa fa-glass-cheers"></i>
                          </div>
                          <div className="event-text">
                            <h5>Parties</h5>
                            <p>Perfect spaces for celebrations of all kinds</p>
                          </div>
                        </div>
                        <div className="event-item">
                          <div className="event-icon">
                            <i className="fa fa-birthday-cake"></i>
                          </div>
                          <div className="event-text">
                            <h5>Birthday Parties</h5>
                            <p>Create lasting memories with our birthday packages</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "contact" && (
              <div className="tab-pane">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="contact-info">
                      <h4>Contact Information</h4>
                      <ul>
                        <li>
                          <i className="fa fa-phone"></i> 777-208-7177
                        </li>
                        <li>
                          <i className="fa fa-phone"></i> 7974921544
                        </li>
                        <li>
                          <i className="fa fa-phone"></i> 7000900196
                        </li>
                        <li>
                          <i className="fa fa-map-marker-alt"></i> Mau Road, District Bhind
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact-persons">
                      <h4>Contact Persons</h4>
                      <div className="person-item">
                        <div className="person-icon">
                          <i className="fa fa-user"></i>
                        </div>
                        <div className="person-info">
                          <h5>Pawan Sharma</h5>
                          <p>Manager</p>
                        </div>
                      </div>
                      <div className="person-item">
                        <div className="person-icon">
                          <i className="fa fa-user"></i>
                        </div>
                        <div className="person-info">
                          <h5>Girraj Katare</h5>
                          <p>Manager</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
