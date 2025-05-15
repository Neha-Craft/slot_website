"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function OffcanvasMenu() {
  const closeOffcanvasMenu = () => {
    const offcanvasMenu = document.querySelector(".offcanvas-menu-wrapper")
    const offcanvasMenuOverlay = document.querySelector(".offcanvas-menu-overlay")

    offcanvasMenu?.classList.remove("show-offcanvas-menu-wrapper")
    offcanvasMenuOverlay?.classList.remove("active")
  }

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        closeOffcanvasMenu()
      }
    }

    document.addEventListener("keydown", handleEscKey)
    return () => document.removeEventListener("keydown", handleEscKey)
  }, [])

  return (
    <>
      <div className="offcanvas-menu-overlay" onClick={closeOffcanvasMenu}></div>
      <div className="offcanvas-menu-wrapper">
        <div className="canvas-close" onClick={closeOffcanvasMenu}>
          <i className="fa fa-close"></i>
        </div>
        <div className="search-icon search-switch">
          <i className="fa fa-search"></i>
        </div>
        <div className="header-configure-area">
          <a href="#" className="bk-btn">
            Booking Now
          </a>
        </div>
        <nav className="mainmenu mobile-menu">
          <ul>
            <li className="active">
              <Link href="/" onClick={closeOffcanvasMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/rooms" onClick={closeOffcanvasMenu}>
                Rooms
              </Link>
            </li>
            <li>
              <Link href="/about-us" onClick={closeOffcanvasMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={closeOffcanvasMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
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
      
        <ul className="top-widget">
          <li>
            <i className="fa fa-phone"></i> (12) 345 67890
          </li>
          <li>
            <i className="fa fa-envelope"></i> info.radhamadhavam@gmail.com
          </li>
        </ul>
      </div>
    </>
  )
}
