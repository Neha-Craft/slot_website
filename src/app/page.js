import Header from"@/src/components/header"
import HeroSection from "@/src/components/hero-section"
import AboutSection from "@/src/components/about-section"
import ServicesSection from "@/src/components/services-section"
import RoomSection from "@/src/components/room-section"
import TestimonialSection from "@/src/components/testimonial-section"
import BlogSection from "@/src/components/blog-section"
import Footer from "@/src/components/footer"
import SearchModel from "@/src/components/search-model"
import OffcanvasMenu from "@/src/components/offcanvas-menu"
import FacilitiesInfo from "@/src/components/facilities-info"
import Specialoccassions from "@/src/components/special-occassions"
import Services from "@/src/components/services"
import Features from "@/src/components/features"
import ContactInfo from "@/src/components/contactus"

import OfferCards from "@/src/components/OfferCards"
import AttractionSection from "@/src/components/attractionSection"

export default function Home() {
  return (
    <main>
         <OffcanvasMenu />  
        <Header />  
         {/* <FacilitiesInfo/>  */}
    
        
            <HeroSection />   
           <AboutSection />    
           <ServicesSection />      
         {/* <RoomSection />      */}
       
          
           {/* <BlogSection />       */}
              <Specialoccassions/> 
            {/* < OfferCards/>  */}
                 <Services/> 
                 <AttractionSection/>
        <Features/>
          
        <ContactInfo/>
           <TestimonialSection />     
          <Footer />   
         <SearchModel />         
    </main>
  )
}
