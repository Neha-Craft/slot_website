import { Inter, Lora, Cabin } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" })
const cabin = Cabin({ subsets: ["latin"], variable: "--font-cabin" })

export const metadata = {
  title: "Shree Radhamadhavam Resort",
  description: "Shree Radhamadhavam Resort",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
      </head>
      <body className={`${inter.variable} ${lora.variable} ${cabin.variable}`}>
        <div id="preloder" style={{ display: "none" }}>
          <div className="loader"></div>
        </div>

        {/* Page Content */}
        {children}

        {/* Floating WhatsApp Button */}
     
     <a
  href="https://wa.me/917772087177"
  target="_blank"
  rel="noopener noreferrer"
  className="position-fixed d-flex align-items-center justify-content-center"
  style={{
    bottom: '125px',
    right: '20px',
    backgroundColor: '#25D366',
    color: 'white',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    fontSize: '20px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    zIndex: 1050,
  }}
  aria-label="Chat on WhatsApp"
>
  <i className="fab fa-whatsapp"></i>
</a>



        {/* Bootstrap Scripts */}
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
  )
}





