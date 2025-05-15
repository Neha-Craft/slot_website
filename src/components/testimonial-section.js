"use client"

import { useState } from "react"
import Image from "next/image"

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      text: "After a construction project took longer than expected, my husband, my daughter and I needed a place to stay for a few nights. As a Chicago resident, we know a lot about our city, neighborhood and the types of housing options available and absolutely love our vacation at Sona Hotel.",
      author: "Alexander Vasquez",
      rating: 4.5,
    },
    {
      id: 2,
      text: "After a construction project took longer than expected, my husband, my daughter and I needed a place to stay for a few nights. As a Chicago resident, we know a lot about our city, neighborhood and the types of housing options available and absolutely love our vacation at Sona Hotel.",
      author: "Alexander Vasquez",
      rating: 4.5,
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
                  <p>{testimonial.text}</p>
                  <div className="ti-author">
                    <div className="rating">{renderRating(testimonial.rating)}</div>
                    <h5> - {testimonial.author}</h5>
                  </div>
                  <div className="d-flex justify-content-center">
                  <Image src="/testimonial.png?height=60&width=150" alt="Testimonial Logo" width={100} height={100} />
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
