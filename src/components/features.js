import React from 'react'
import Image from "next/image";

function Features() {
  return (
      <div style={{  paddingBottom:"2rem" , marginBottom:"2rem", marginTop:"2rem"}}>
        <div>
          <div>
            <p className="unwindservices">Our Rooms

            </p>
            <p className="hotelservices">Featured Rooms
            </p>
          </div>
          <div className=" container ">
            <div className="row gx-3">
           
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
        <a href="room-single.html" className="ptext-link">Suite Room</a>
      </p>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
      </p>
     <p className="mb-0 mt-2">
  <span className="me-3 price">$450 <small>/ night</small></span>
</p>

    </div>
  </div>
</div>



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
        <a href="room-single.html" className="ptext-link">Family Room</a>
      </p>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
      </p>
      <p className="mb-0 mt-2">
        <span className="me-3 price">$450 <small>/ night</small></span>
        <button className='btn-class'>Book Now</button>
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
      style={{ backgroundImage: 'url(/family.jpg)' }}
    >
      <div className="image-hover-overlay"></div>
    </a> 

    <div className="text p-5 text-center">
      <p className='ptext'>
        <a href="room-single.html" className="ptext-link">Deluxe Room</a>
      </p>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
      </p>
      <p className="mb-0 mt-2">
        <span className="me-3 price">$450 <small>/ night</small></span>
        <button className='btn-class'>Book Now</button>
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