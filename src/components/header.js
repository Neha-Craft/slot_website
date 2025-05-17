



"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleOffcanvasMenu = () => {
    const offcanvasMenu = document.querySelector(".offcanvas-menu-wrapper");
    const offcanvasMenuOverlay = document.querySelector(
      ".offcanvas-menu-overlay"
    );

    offcanvasMenu?.classList.toggle("show-offcanvas-menu-wrapper");
    offcanvasMenuOverlay?.classList.toggle("active");
  };

  return (
  <header className="header-section">
      <div className="top-nav">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <ul className="tn-left">
                <li>
                  <i className="fa fa-phone"></i> (12) 345 67890
                </li>
                <li>
                  <i className="fa fa-envelope"></i> info.radhamadhavam@gmail.com
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="tn-right">
                <div className="top-social">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                <a href="#" className="bk-btn">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-item">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="logo">
                <Link href="/">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={250}
                    height={60}
                    style={{
                      width:"250px",
                  minHeight:"60px"
                    }}
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="nav-menu">
                <nav className="mainmenu">
                  <ul>
                    <li className="active">
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/rooms">Rooms</Link>
                    </li>
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMobile && (
        <div className="canvas-open" onClick={toggleOffcanvasMenu}>
          <i className="fa fa-bars"></i>
        </div>
      )}
    </header>
  );
}
