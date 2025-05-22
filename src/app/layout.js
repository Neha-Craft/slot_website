import { Inter, Lora, Cabin } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import OffcanvasMenu from "../components/offcanvas-menu";
import Header from "../components/header";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const cabin = Cabin({ subsets: ["latin"], variable: "--font-cabin" });

export const metadata = {
  title: "Shree Radhamadhavam Resort – AC/Non-AC Rooms in Gwalior",
  description:
    "Affordable resort near Dandrua Sarkar Temple, Gwalior. AC/Non-AC rooms from ₹2000/night. Ideal for events, marriages, and functions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/fevicon.jpeg" />
        <link rel="icon" type="image/jpeg" href="/fevicon.jpeg" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <meta
          name="keywords"
          content="Resort in Gwalior, AC rooms Gwalior, marriage hall, events near Dandrua Sarkar Temple, budget stay Gwalior"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://srmresort.in/lander" />

        <meta
          property="og:title"
          content="Shree Radhamadhavam Resort – Rooms & Events in Gwalior"
        />
        <meta
          property="og:description"
          content="Book AC & Non-AC rooms from ₹2000/night. Best venue for weddings and events near Dandrua Sarkar Temple."
        />
        <meta property="og:image" content="https://freeimage.host/i/3QZqRyb" />
        <meta property="og:url" content="https://srmresort.in/lander" />
        <meta property="og:type" content="website" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Shree Radhamadhavam Resort",
              description:
                "Affordable resort near Dandrua Sarkar Temple in Gwalior. AC and Non-AC rooms from ₹2000/night. Weddings, events, functions.",
              image: "https://srmresort.in/images/resort-cover.jpg",
              priceRange: "₹2000 - ₹5000",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Near Dandrua Sarkar Temple, Gwalior",
                addressLocality: "Gwalior",
                addressRegion: "MP",
                postalCode: "474001",
                addressCountry: "IN",
              },
              telephone: "+91-7772087177",
              geo: {
                "@type": "GeoCoordinates",
            latitude: 26.4665609,     // updated latitude
        longitude: 78.6137099, 
              },
              url: "https://srmresort.in/lander",
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Air Conditioned Rooms",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Event Hall",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Parking Available",
                  value: true,
                },
              ],
            }),
          }}
        />
      </head>

      <body className={`${inter.variable} ${lora.variable} ${cabin.variable}`}>
        <div id="preloder" style={{ display: "none" }}>
          <div className="loader"></div>
        </div>

        <OffcanvasMenu />
        <Header />
        {children}
        <Footer />

        <a
          href="https://wa.me/917772087177"
          target="_blank"
          rel="noopener noreferrer"
          className="position-fixed d-flex align-items-center justify-content-center whatsapp-text"
          aria-label="Chat on WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
        </a>

        <Script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
          integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
          crossOrigin="anonymous"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
          integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
