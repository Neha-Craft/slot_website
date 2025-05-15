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
                <p>
                  We inspire and reach millions of travelers
                  <br /> across 90 local websites
                </p>
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
                  <li>(12) 345 67890</li>
                  <li>info.radhamadhavam@gmail.com</li>
                  <li>Mau Rd, mehgaon, Banipura, Madhya Pradesh 477557</li>
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
      <div className="copyright-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <ul>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Terms of use</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Environmental Policy</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-5">
              <div className="co-text">
                <p>
                  Copyright &copy;{new Date().getFullYear()} All rights reserved
                  | This template is made with
                  <i className="fa fa-heart text-danger mx-1"></i> by{" "}
                  <a
                    href="https://colorlib.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Colorlib
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
