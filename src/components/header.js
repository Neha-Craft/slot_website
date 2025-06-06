"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

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
                  <i className="fa fa-phone"></i>
                  <a
                    href="tel:+917772087177"
                    style={{
                      marginLeft: "5px",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    (+91) 777-208-7177
                  </a>
                </li>
                <li>
                  <i className="fa fa-envelope"></i>
                  <a
                    href="mailto:info.radhamadhavam@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginLeft: "5px",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    hello@srmresort.in
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="tn-right">
                <div className="top-social">
                  <a href="#">
                    <i
                      className="fab fa-facebook-f"
                      target="_blank"
                      rel="noopener noreferrer"
                    ></i>
                  </a>

                  <a
                    href="https://www.instagram.com/shri_radhamadhavam_resort/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                <a href="tel:+917772087177" className="bk-btn">
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
                    src="/srmlogo.png"
                    alt="Logo"
                    width={250}
                    height={60}
                    style={{
                      width: "auto",
                      maxHeight: "90px",
                    }}
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="nav-menu">
                <nav className="mainmenu">
                  <ul>
                    <li className={pathname === "/" ? "active" : ""}>
                      <Link href="/">Home</Link>
                    </li>
                    <li className={pathname === "/about-us" ? "active" : ""}>
                      <Link href="/about-us">About Us</Link>
                    </li>
                    <li className={pathname === "/contact" ? "active" : ""}>
                      <Link href="/contact">Contact</Link>
                    </li>
                    <li className={pathname === "/eventsgallery" ? "active" : ""}>
                      <Link href="/eventsgallery">Events</Link>
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



// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState, useEffect } from "react";

// export default function Header() {
//   const [isMobile, setIsMobile] = useState(false);
//   const[selectedIndex, setSelectedIndex]=useState()

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 991);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const toggleOffcanvasMenu = () => {
//     const offcanvasMenu = document.querySelector(".offcanvas-menu-wrapper");
//     const offcanvasMenuOverlay = document.querySelector(
//       ".offcanvas-menu-overlay"
//     );

//     offcanvasMenu?.classList.toggle("show-offcanvas-menu-wrapper");
//     offcanvasMenuOverlay?.classList.toggle("active");
//   };

//   return (
//     <header className="header-section">
//       <div className="top-nav">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6">
//               <ul className="tn-left">
//                 <li>
//                   <i className="fa fa-phone"></i>
//                   <a
//                     href="tel:+917772087177"
//                     style={{
//                       marginLeft: "5px",
//                       color: "inherit",
//                       textDecoration: "none",
//                     }}
//                   >
//                     (+91) 777-208-7177
//                   </a>
//                 </li>
//                 <li>
//                   <i className="fa fa-envelope"></i>
//                   <a
//                     href="mailto:info.radhamadhavam@gmail.com"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     style={{
//                       marginLeft: "5px",
//                       color: "inherit",
//                       textDecoration: "none",
//                     }}
//                   >
//                     hello@srmresort.in
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div className="col-lg-6">
//               <div className="tn-right">
//                 <div className="top-social">
//                   <a href="#">
//                     <i
//                       className="fab fa-facebook-f"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     ></i>
//                   </a>

//                   <a
//                     href="https://www.instagram.com/shri_radhamadhavam_resort/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i className="fab fa-instagram"></i>
//                   </a>
//                 </div>
//                 <a href="tel:+917772087177" className="bk-btn">
//                   Call Now
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="menu-item">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-3">
//               <div className="logo">
//                 <Link href="/">
//                   <Image
//                     src="/srmlogo.png"
//                     alt="Logo"
//                     width={250}
//                     height={60}
//                     style={{
//                       width: "auto",
//                       maxHeight: "90px",
//                     }}
//                   />
//                 </Link>
//               </div>
//             </div>
//             <div className="col-lg-9">
//               <div className="nav-menu">
//                 <nav className="mainmenu">
//                   <ul>
//                     <li className="active">
//                       <Link href="/">Home</Link>
//                     </li>

//                     <li>
//                       <Link href="/about-us">About Us</Link>
//                     </li>
//                     <li>
//                       <Link href="/contact">Contact</Link>
//                     </li>
//                     <li>
//                       <Link href="/eventsgallery">Events</Link>
//                     </li>
//                   </ul>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {isMobile && (
//         <div className="canvas-open" onClick={toggleOffcanvasMenu}>
//           <i className="fa fa-bars"></i>
//         </div>
//       )}
//     </header>
//   );
// }
