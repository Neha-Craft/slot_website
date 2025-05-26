"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function OffcanvasMenu() {
  const closeOffcanvasMenu = () => {
    const offcanvasMenu = document.querySelector(".offcanvas-menu-wrapper");
    const offcanvasMenuOverlay = document.querySelector(
      ".offcanvas-menu-overlay"
    );

    offcanvasMenu?.classList.remove("show-offcanvas-menu-wrapper");
    offcanvasMenuOverlay?.classList.remove("active");
  };

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        closeOffcanvasMenu();
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, []);

  return (
    <>
      <div
        className="offcanvas-menu-overlay"
        onClick={closeOffcanvasMenu}
      ></div>
      <div
        className="offcanvas-menu-wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div className="canvas-close" onClick={closeOffcanvasMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>

        <div
          className="header-configure-area"
          style={{
            marginBottom: "2rem",
            marginTop: "2rem",
          }}
        >
          <a href="tel:+917772087177" className="bk-btn">
            Call Now
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
              <Link href="/about-us" onClick={closeOffcanvasMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={closeOffcanvasMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/eventsgallery">Events</Link>
            </li>
          </ul>
        </nav>

        <ul
          className="top-widget"
          style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            paddingTop: "4rem",
          }}
        >
          <li
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginRight: "8px" }}
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <a
              href="mailto:info.radhamadhavam@gmail.com"
              className="hamburger-bar"
            >
              hello@srmresort.in
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
