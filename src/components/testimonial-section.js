"use client"

import { useState } from "react"
import Image from "next/image"

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0)

const testimonials = [
  {
    id: 1,
    text: "The ambience, hospitality, and food were absolutely amazing. We hosted our sister’s wedding here and everything went perfectly! Highly recommend Shree RADHA Madhavam Resort for weddings and family gatherings.",
    author: "Ritika Sharma (Delhi)",
    rating: 5,
  },
  {
    id: 2,
    text: "We had lunch at the resort’s restaurant during our trip to Gwalior. The food was fresh, flavorful, and served with warmth. Truly felt like homemade food with a touch of luxury.",
    author: "Kavita Mehra (Indore)",
    rating: 4.5,
  },
  {
    id: 3,
    text: "The vegetarian dishes were outstanding! From the paneer tikka to the desserts, everything was top-notch. A must-visit restaurant for anyone passing through Gwalior.",
    author: "Rohit Sinha (Bhopal)",
    rating: 5,
  },
  {
    id: 4,
    text: "Our stay at the resort was peaceful and comfortable. The rooms were clean, the staff was polite, and the restaurant food tasted just like home. A great experience in Gwalior!",
    author: "Suresh Patil (Nagpur)",
    rating: 4,
  },
]


  const renderRating = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`star-${i}`} className="fa fa-star"></i>)
    }

    if (hasHalfStar) {
      stars.push(<i key="half-star" className="fa fa-star-half-alt"></i>)
    }

    return stars
  }

  return (
    <section className="testimonial-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <span>Testimonials</span>
              <h2>What Customers Say?</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="testimonial-slider">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className={`ts-item ${index === activeIndex ? "d-block" : "d-none"}`}>
                  <p style={{paddingBottom:"1rem"}}>{testimonial.text}</p>
                  <div className="ti-author">
                    <div className="rating">{renderRating(testimonial.rating)}</div>
                    <h5> - {testimonial.author}</h5>
                  </div>
            
                </div>
              ))}
              <div className="slider-nav mt-4 text-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`mx-1 btn btn-sm ${index === activeIndex ? "btn-warning" : "btn-secondary"}`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
