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
                <h2>Shree RADHA Madhavam Resort</h2>
              </div>
              <p className="f-para">
                Located in the historic city of Gwalior, Shree RADHA Madhavam Resort is a luxurious and serene destination designed for those seeking an escape from the ordinary. Surrounded by natural beauty and cultural richness, our resort offers a perfect blend of modern amenities and traditional hospitality.
              </p>
              <p className="s-para">
                Whether you are celebrating lifes special moments or simply looking for a peaceful retreat, our property is the ideal backdrop for weddings, corporate events, and weekend getaways. Experience spacious accommodations, stunning landscapes, and warm service — all in the heart of Madhya Pradesh.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-pic">
              <div className="row sectionabout">
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
                    alt="Event Space"
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
