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
                  Intercontinental LA <br /> Westlake Hotel
                </h2>
              </div>
              <p className="f-para">
                This is a leading online accommodation site. We’re passionate
                about travel. Every day, we inspire and reach millions of
                travelers across 90 local websites in 41 languages.
              </p>
              <p className="s-para">
                So when it comes to booking the perfect hotel, vacation rental,
                resort, apartment, guest house, or tree house, we’ve got you
                covered.
              </p>
              <a href="#" className="primary-btn about-btn">
                Read More
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-pic">
              <div className="row">
                <div className="col-sm-6">
                  <Image
                    src="/about-1.jpg"
                    alt="About 1"
                    width={300}
                    height={200}
                    className="img-fluid"
                  />
                </div>
                <div className="col-sm-6">
                  <Image
                    src="/about-2.jpg"
                    alt="About 2"
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
