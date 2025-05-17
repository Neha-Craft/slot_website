import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="aboutus-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-text">
              <div className="section-title">
                <span>About Us</span>
                <h2>
                 Shree RADHA Madhavam Resort
                </h2>
              </div>
              <p className="f-para">
                Nestled along the pristine coastline, Serenity Bay Beach Resort offers the ultimate escape for those seeking luxury, comfort, and nature’s beauty all in one place. 
              </p>
              <p className="s-para">
                Whether you're looking to relax by the beach, indulge in world-class cuisine, or explore nearby natural wonders, our resort is your perfect getaway. Enjoy unforgettable experiences tailored for couples, families, and solo travelers alike.
              </p>
           
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-pic">
              <div className="row">
                <div className="col-sm-6">
                  <Image
                    src="/about-1.jpg"
                    alt="Resort View"
                    width={300}
                    height={200}
                    className="img-fluid"
                  />
                </div>
                <div className="col-sm-6">
                  <Image
                    src="/about-2.jpg"
                    alt="Beach Lounge"
                    width={300}
                    height={200}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
