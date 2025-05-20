import React from 'react'
import Image from "next/image";

function Features() {
  return (
    <div style={{ paddingBottom: "2rem", marginBottom: "2rem", marginTop: "2rem" }}>
      <div>
        <div>
          <p className="unwindservices">Our Rooms</p>
          <p className="hotelservices">Featured Rooms</p>
        </div>
        <div className="container">
          <div className="row gx-3">

            {/* 8 AC Rooms */}
            <div
              className="col-md-6 flex-column col-lg-4 d-flex align-items-stretch aos-init aos-animate service-card"
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div className="room-wrap d-md-flex flex-md-column-reverse">
                <a
                  href="room-single.html"
                  className="img img-room image-hover-wrapper"
                  style={{ backgroundImage: 'url(/suiteroom.jpg)' }}
                >
                  <div className="image-hover-overlay"></div>
                </a>

                <div className="text p-5 text-center">
                  <p className='ptext'>
                    <a href="room-single.html" className="ptext-link"> AC Rooms</a>
                  </p>
                  <p>
                    Well-furnished air-conditioned rooms equipped with modern amenities, perfect for couples, families, or solo travelers seeking comfort and privacy.
                  </p>
                  <p className="mb-0 mt-2">
                    <span className="me-3 price">₹2000 <small>/ night</small></span>
                  
                  </p>
                </div>
              </div>
            </div>

            {/* 2 AC Halls (6 Person/Hall) */}
            <div
              className="col-md-6 col-lg-4 d-flex flex-column align-items-stretch aos-init aos-animate service-card"
              data-aos="flip-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="room-wrap">
                <a
                  href="room-single.html"
                  className="img img-room image-hover-wrapper"
                  style={{ backgroundImage: 'url(/delux.jpg)' }}
                >
                  <div className="image-hover-overlay"></div>
                </a>

                <div className="text p-5 text-center">
                  <p className='ptext'>
                    <a href="room-single.html" className="ptext-link">2 AC Halls </a>
                  </p>
                  <p>
                    Cozy air-conditioned halls designed for small meetings or private gatherings, accommodating up to 6 guests comfortably.
                  </p>
                  <p className="mb-0 mt-2">
                    <span className="me-3 price">₹3000 <small>/ hall</small></span>
               
                  </p>
                </div>
              </div>
            </div>

 
            <div
              className="col-md-6 flex-column col-lg-4 d-flex align-items-stretch aos-init aos-animate service-card"
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div className="room-wrap d-md-flex flex-md-column-reverse">
                <a
                  href="room-single.html"
                  className="img img-room image-hover-wrapper"
                  style={{ backgroundImage: 'url(/achalls.avif)' }}
                >
                  <div className="image-hover-overlay"></div>
                </a>

                <div className="text p-5 text-center">
                  <p className='ptext'>
                    <a href="room-single.html" className="ptext-link">2 Large Halls </a>
                  </p>
                  <p>
                    Spacious and fully equipped halls ideal for events, conferences, parties, or social gatherings with a seating capacity of up to 50 guests.
                  </p>
                  <p className="mb-0 mt-2" style={{
                    whiteSpace:"nowrap"
                  }}>
                    <span className="me-3 price">₹50000 <small>/ hall</small></span>
                  
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Features

