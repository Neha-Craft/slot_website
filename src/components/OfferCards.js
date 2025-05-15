'use client'; // Required for client-side interactions

import Link from 'next/link';


const OfferCards = () => {
  return (
    <div className="container py-5">
      <div className="row">
        {/* Card 1 - Summer Family Getaway */}
        {/* <div className="col-md-4 mb-4">
          <div className="card h-100 shadow card-hover">
            <div className="card-body">
              <h5 className="card-title text-primary">Summer Family Getaway</h5>
              <div className="mb-3">
                <span className="text-muted">Starting From</span>
                <h4 className="text-danger">₹12,000</h4>
                <div className="price-highlight bg-light p-2 rounded">
                  <del className="text-muted">₹29,999</del>
                  <span className="text-success ms-2">+ TAXES</span>
                </div>
              </div>
              <p className="card-text">
                Make this summer unforgettable at Della Resorts, featuring luxury stays, 
                complimentary breakfast, delectable dinner, and 30% off adventure passes 
                from 1st April to 15th May 2025.
              </p>
              <Link href="#" className="btn btn-outline-primary">
                View Details →
              </Link>
            </div>
          </div>
        </div> */}
          <div className="col-md-4 mb-4">
          <div className="card h-100 shadow card-hover">
            <div className="card-body">
              <h5 className="card-title text-primary"style={{
                paddingBottom:"1rem"
              }}
              >2 Nights Ultimate Getaway</h5>
              <div className="mb-3">
                <h4 className="text-danger" style={{
                    paddingBottom:"1rem"
                }}
                >Luxurious Escapade</h4>
                <span className="text-muted">Exclusive Package</span>
              </div>
              <p className="card-text"
              style={{
                paddingBottom:"4rem"
              }}
              >
                Embark on a luxurious escapade at Della Resorts, Lonavala with our 
                exclusive 2-night getaway package! Indulge in ultimate relaxation 
                and excitement with our curated inclusions.
              </p>
              <Link href="#" className="btn btn-outline-primary">
                View Details →
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 - Ultimate Getaway */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow card-hover">
            <div className="card-body">
              <h5 className="card-title text-primary"style={{
                paddingBottom:"1rem"
              }}
              >2 Nights Ultimate Getaway</h5>
              <div className="mb-3">
                <h4 className="text-danger" style={{
                    paddingBottom:"1rem"
                }}
                >Luxurious Escapade</h4>
                <span className="text-muted">Exclusive Package</span>
              </div>
              <p className="card-text"
              style={{
                paddingBottom:"4rem"
              }}
              >
                Embark on a luxurious escapade at Della Resorts, Lonavala with our 
                exclusive 2-night getaway package! Indulge in ultimate relaxation 
                and excitement with our curated inclusions.
              </p>
              <Link href="#" className="btn btn-outline-primary">
                View Details →
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 - Celestial Luxe Retreat */}
        {/* <div className="col-md-4 mb-4">
          <div className="card h-100 shadow card-hover">
            <div className="card-body">
              <h5 className="card-title text-primary">Celestial Luxe Retreat</h5>
              <div className="mb-3">
                <h4 className="text-danger">Sky Garden Experience</h4>
                <span className="text-muted">Includes Food Credits</span>
              </div>
              <p className="card-text">
                Create cherished memories with luxury stay and exclusive experience 
                1500 feet up in the sky. Includes Sky dining experience and 
                food credits worth ₹2000.
              </p>
              <Link href="#" className="btn btn-outline-primary">
                View Details →
              </Link>
            </div>
          </div>
        </div> */}
            <div className="col-md-4 mb-4">
          <div className="card h-100 shadow card-hover">
            <div className="card-body">
              <h5 className="card-title text-primary"style={{
                paddingBottom:"1rem"
              }}
              >2 Nights Ultimate Getaway</h5>
              <div className="mb-3">
                <h4 className="text-danger" style={{
                    paddingBottom:"1rem"
                }}
                >Luxurious Escapade</h4>
                <span className="text-muted">Exclusive Package</span>
              </div>
              <p className="card-text"
              style={{
                paddingBottom:"4rem"
              }}
              >
                Embark on a luxurious escapade at Della Resorts, Lonavala with our 
                exclusive 2-night getaway package! Indulge in ultimate relaxation 
                and excitement with our curated inclusions.
              </p>
              <Link href="#" className="btn btn-outline-primary">
                View Details →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCards;