import Image from 'next/image';
import React from 'react';

export default function Specialoccassions() {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <div className='d-flex justify-content-center' style={{ paddingTop: "2rem" }}>
        <p style={{ fontSize: "44px", color: "#19191a", paddingBottom: "2rem", textDecoration: "underline" }}>
          Exclusive New Offers
        </p>
      </div>

      <div className='container'>
        <div className="d-flex text-center align-items-center" style={{ gap: "65px" }}>
          <div style={{ paddingTop: "36px" }}>
            <p style={{ fontSize: "24px", fontWeight: 500, color: "#19191a" }}>
              Plan your special occasion with us
            </p>
            <p style={{
              fontSize: "16px",
              maxWidth: "639px",
              textAlign: "center",
              color: "#19191a"
            }}>
              We bring you spaces designed especially for modern India. We offer - Contemporary Banquet Hall Designs, Complimentary High-Speed Internet, Unique Culinary Experiences, and Service Delivery Assurance.
            </p>
            <button className="btn custom-button1">Plan an Event</button>
          </div>
          <div
  id="carouselExample"
  className="carousel slide mt-4"
  data-bs-ride="carousel"
  style={{ width: "700px", position: "relative" }} // Ensure outer div matches inner
>
  <div className="carousel-inner custom-carousel-inner">
    <div
      className="carousel-item active"
      style={{ position: "relative", width: "100%", height: "500px"
        
       }}
    >
      <Image
        src="/rak.jpg"
        alt="Rak Image"
        fill
        className="d-block w-100"
        style={{ objectFit: "cover" }}
      />
    </div>

    <div
      className="carousel-item"
      style={{ position: "relative", width: "100%", height: "500px"

       }}
    >
      <Image
        src="/fire.jpg"
        alt="Fire Image"
        fill
        className="d-block w-100"
        style={{ objectFit: "cover" }}
      />
    </div>
  </div>

  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


          {/* <div
            id="carouselExample"
            className="carousel slide mt-4"
            data-bs-ride="carousel"
            style={{ width: "400px" }}
          >
            <div className="carousel-inner">

              <div className="carousel-item active" style={{ position: "relative", width: "100%", height: "300px" }}>
                <Image
                  src="/rak.jpg"
                  alt="Rak Image"
                  fill
                  className="d-block w-100"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="carousel-item" style={{ position: "relative", width: "100%", height: "300px" }}>
                <Image
                  src="/fire.jpg"
                  alt="Fire Image"
                  fill
                  className="d-block w-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button> 
          </div> */}
        </div>
      </div>
    </div>
  );
}





// import Image from 'next/image';
// import React from 'react';

// export default function Specialoccassions() {
//   return (
//     <div style={{
//         marginBottom:"2rem"
//     }}>
//       <div className='d-flex justify-content-center' style={{
//         paddingTop:"2rem",
      
//       }}>
//         <p style={{ fontSize: "44px", color: "#19191a", paddingBottom: "2rem", textDecoration:"underline" }}>
//           Exclusive New Offers
//         </p>
//       </div>
//       <div className='container'>

//       <div className="d-flex  text-center" style={{
//         gap:"65px"
//       }}>
//         <div style={{paddingTop:"36px"}}>
//           <p style={{ fontSize: "24px", fontWeight: 500, color: "#19191a" }}>
//             Plan your special occasion with us
//           </p>
//           <p style={{
//             fontSize: "16px",
//             maxWidth: "639px",
//             textAlign: "center",
//             color: "#19191a"
//           }}>
//             We bring you spaces designed especially for modern India. We offer - Contemporary Banquet Hall Designs, Complimentary High-Speed Internet, Unique Culinary Experiences, and Service Delivery Assurance.
//           </p>
//           <button className="btn custom-button1" >Plan an Event</button>
//         </div>

//         <div
//           id="carouselExample"
//           className="carousel slide mt-4"
//           data-bs-ride="carousel"
//           style={{ width: "400px" }}  
//         >
//           <div className="carousel-inner">
//             {/* <div className="carousel-item active">
//                 <Image
//   src="/rak.jpg"
//   alt="Rak Image"
//   fill
//   className="d-block w-100"
//   style={{ objectFit: "cover", height: "300px", width: "100%" }} */}
// {/* /> */}
//               {/* <Image
//                 src="/rak.jpg"
//                 alt="Rak Image"
//                 width={400}
//                 height={300}  
//                 className="d-block w-100"
//                 style={{ objectFit: "cover" }}
//               /> */}
//             </div>
//             <div className="carousel-item">
//               {/* <Image
//                 src="/fire.jpg"
//                 alt="Fire Image"
//                 width={400}
//                 height={300}  
//                 className="d-block w-100"
//                 style={{ objectFit: "cover" }}
//               /> */}
//               <Image
//   src="/fire.jpg"
//   alt="Rak Image"
//   fill
//   className="d-block w-100"
//   style={{ objectFit: "cover", height: "300px", width: "100%" }}
// />
//             </div>
//           </div>

//           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true" />
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true" />
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// }
