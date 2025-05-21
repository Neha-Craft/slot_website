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

          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg> */}
        </div>
     
        <div className="header-configure-area">
          <a href="tel:+917772087177" className="bk-btn">
            Call Now
          </a>
        </div>
        <nav className="mainmenu mobile-menu">
          <ul >
            <li className="active" >
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
          </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div className="top-social">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
       
          <a href="https://www.instagram.com/shri_radhamadhavam_resort/">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <ul className="top-widget" style={{
                textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column"
          }}>
          <li style={{
              display: "flex",
  textAlign: "center",
   alignItems: "center",
   marginBottom:"12px"
            }}>
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
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <a href="tel:+917772087177" style={{ color: "inherit", textDecoration: "none" }}>
              (+91) 777-208-7177
            </a>
          </li>
          <li style={{
              display: "flex",
  textAlign: "center",
   alignItems: "center",
            }}>
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
            <a href="mailto:info.radhamadhavam@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>
              info.radhamadhavam@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}



// "use client"

// import Link from "next/link"
// import { useEffect } from "react"

// export default function OffcanvasMenu() {
//   const closeOffcanvasMenu = () => {
//     const offcanvasMenu = document.querySelector(".offcanvas-menu-wrapper")
//     const offcanvasMenuOverlay = document.querySelector(".offcanvas-menu-overlay")

//     offcanvasMenu?.classList.remove("show-offcanvas-menu-wrapper")
//     offcanvasMenuOverlay?.classList.remove("active")
//   }

//   useEffect(() => {
//     const handleEscKey = (e) => {
//       if (e.key === "Escape") {
//         closeOffcanvasMenu()
//       }
//     }

//     document.addEventListener("keydown", handleEscKey)
//     return () => document.removeEventListener("keydown", handleEscKey)
//   }, [])

//   return (
//     <>
//       <div className="offcanvas-menu-overlay" onClick={closeOffcanvasMenu}></div>
//       <div className="offcanvas-menu-wrapper">
//         <div className="canvas-close" onClick={closeOffcanvasMenu}>
//           <i className="fa fa-close"></i>
//         </div>
//         <div className="search-icon search-switch">
//           <i className="fa fa-search"></i>
//         </div>
//         <div className="header-configure-area">
//           <a href="#" className="bk-btn">
//             Call Now
//           </a>
//         </div>
//         <nav className="mainmenu mobile-menu">
//           <ul>
//             <li className="active">
//               <Link href="/" onClick={closeOffcanvasMenu}>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="/rooms" onClick={closeOffcanvasMenu}>
//                 Rooms
//               </Link>
//             </li>
//             <li>
//               <Link href="/about-us" onClick={closeOffcanvasMenu}>
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact" onClick={closeOffcanvasMenu}>
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </nav>
//         <div id="mobile-menu-wrap"></div>
//             <div className="top-social">
//                   <a href="#">
//                     <i className="fab fa-facebook-f"></i>
//                   </a>
//                   <a href="#">
//                     <i className="fab fa-twitter"></i>
//                   </a>
//                   <a href="#">
//                     <i className="fab fa-instagram"></i>
//                   </a>
//                 </div>
      
//         <ul className="top-widget">
//           <li>
//             <i className="fa fa-phone"></i> (+91) 777-208-7177
//           </li>
//           <li>
//             <i className="fa fa-envelope"></i> info.radhamadhavam@gmail.com
//           </li>
//         </ul>
//       </div>
//     </>
//   )
// }
