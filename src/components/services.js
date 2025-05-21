import Image from "next/image";
import React from "react";
import { Wifi, Calendar, Utensils, Waves, Scissors, ConciergeBell } from "lucide-react";


function Services() {
  return (
   <div style={{ background: "#f8f8f8", paddingBottom: "2rem", marginBottom: "2rem", marginTop: "2rem" }}>
      <div>
        <div>
          <p className="unwindservices"> Services</p>
          <p className="hotelservices">Amenities</p>
        </div>
        <div className=" container ">
          <div className="row gx-3 amentiesServices">
          
               <div
              className="col-md-3 col-xl-2 text-center d-flex align-items-stretch aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <a href="#" className="services">
                <div className="icon">
                  <Wifi size={60} strokeWidth={1.5} color="#333" />
                </div>
                <div className="text">
                    <p>Free Wifi</p>
                </div>
              </a>
            </div>
                  <div
              className="col-md-3 col-xl-2 text-center d-flex align-items-stretch aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <a href="#" className="services">
                <div className="icon">
                  <Calendar size={60} strokeWidth={1.5} color="#333" />
                </div>
                <div className="text">
                  <p>Easy Booking</p>
                </div>
              </a>
            </div>
            <div
              className="col-md-3 col-xl-2 text-center d-flex align-items-stretch aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <a href="#" className="services">
                <div className="icon">
                  <Utensils size={60} strokeWidth={1.5} color="#333" />
                </div>
                <div className="text">
                  <p>Restaurant</p>
                </div>
              </a>
            </div>

            <div
              className="col-md-3 col-xl-2 text-center d-flex align-items-stretch aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <a href="#" className="services">
                <div className="icon">
                  <Waves size={60} strokeWidth={1.5} color="#333" />
                </div>
                <div className="text">
                  <p>Swimming Pool</p>
                </div>
              </a>
            </div>

            <div
              className="col-md-3 col-xl-2 text-center d-flex align-items-stretch aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <a href="#" className="services">
                <div className="icon">
                  <Scissors size={60} strokeWidth={1.5} color="#333" />
                </div>
                <div className="text">
                  <p>Pure Veg</p>
                </div>
              </a>
            </div>
            <div
  className="col-md-3 col-xl-2 text-center d-flex align-items-stretch aos-init aos-animate"
  data-aos="fade-up"
  data-aos-delay="600"
  data-aos-duration="1000"
>
  <a href="#" className="services">
    <div className="icon">
      <ConciergeBell size={60} strokeWidth={1.5} color="#333" />
    </div>
    <div className="text">
      <p>24x7 Room Service</p>
    </div>
  </a>
</div>


       
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
