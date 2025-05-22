import React from 'react'
import Image from "next/image";

function AttractionSection() {
  return (
   <section className="nearby-section spad">
      <div className="container">
        <div className="section-title text-center mb-5">
          <span>Nearby Attractions</span>
          <p className='attractionsectionptag'>Explore Places Around Us</p>
        </div>
        <div className="row">
          {/* Attraction 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="attraction-item text-center">
       <Image
  src="/hanumanji.webp"
  alt="Sun Temple Gwalior"
  width={400}       
 height={250}      
style={{
    width:"400px",
    height:"250px",
     objectFit:"cover"
}}
  className="img-fluid rounded mb-3"
/>
              <a href="https://maps.app.goo.gl/1vvMF6pkyQEkUdMc9"   target="_blank"
                    rel="noopener noreferrer" >
              <p style={{textDecoration:"underline", fontSize:"22px",fontWeight:"600",color:"#000",paddingBottom:"10px"}}>Dandraua Sarkar Temple</p></a>
              <p className='places-p'>One of the most visited spiritual places, known for its serene environment and religious significance. Just 10 km from the resort.</p>
            </div>
          </div>

          {/* Attraction 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="attraction-item text-center">
                    <Image
  src="/Gwalior.jpg"
  alt="Sun Temple Gwalior"
  width={400}       
 height={250}      
style={{
    width:"400px",
    height:"250px",
    objectFit:"cover"
}}
  className="img-fluid rounded mb-3"
/>

           
                  <a href="https://maps.app.goo.gl/VsoGa3nXvvVJaYFt6"   target="_blank"
                    rel="noopener noreferrer" >
              <p style={{textDecoration:"underline", fontSize:"22px",fontWeight:"600",color:"#000",paddingBottom:"10px"}}>Gwalior Fort</p></a>
                 <p className='places-p'>A grand hilltop fort about 45 km away, offering stunning views and a deep dive into Indian history and architecture.</p>
            </div>
          </div>

          {/* Attraction 3 */}
          <div className="col-lg-4 col-md-6">
            <div className="attraction-item text-center">
           <Image
  src="/sun temple.jpg"
  alt="Sun Temple Gwalior"
  width={400}       
 height={250}      
style={{
    width:"400px",
    height:"250px",
     objectFit:"cover"
}}
  className="img-fluid rounded mb-3"
/>
     <a href="https://maps.app.goo.gl/iQUb7LXycZY2JSVg6"   target="_blank"
                    rel="noopener noreferrer" >
              <p style={{textDecoration:"underline", fontSize:"22px",fontWeight:"600",color:"#000",paddingBottom:"10px"}}>Sun Temple</p></a>
                 <p className='places-p'>Inspired by the Konark Sun Temple, this beautiful shrine is located in Gwalior, around 50 km from our resort.</p>
              {/* <h4>Sun Temple</h4>
              <p>Inspired by the Konark Sun Temple, this beautiful shrine is located in Gwalior, around 50 km from our resort.</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AttractionSection