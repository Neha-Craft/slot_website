import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-text">
          <div className="row">
            <div className="col-lg-4">
              <div className="ft-about">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/footer-logo.png"
                      alt="Footer Logo"
                      width={277}
                      height={60}
                    />
                  </Link>
                </div>
             
                <div className="fa-social">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="ft-contact">
                <h6>Contact Us</h6>
                <ul>
                  <li>(+91) 777-208-7177</li>
                  <li>797-492-1544</li>
            
                  <li>Pawan Sharma, Girraj Katare</li>
                  <li>Landmark: Mau Road, near Dandraua</li>
                  <li>District Bhind, Madhya Pradesh</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="ft-newslatter">
                <h6>New latest</h6>
                <p>Get the latest updates and offers.</p>
                <form action="#" className="fn-form">
                  <input type="text" placeholder="Email" />
                  <button type="submit">
                    <i className="fa fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </footer>
  );
}