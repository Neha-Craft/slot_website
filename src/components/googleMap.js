import React from 'react'

function GoogleMap() {
  return (
    <div>
            <div className='container' style={{  height: "60vh",  borderRadius:"6px !important" }}>
        <iframe
 src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3571.649629878814!2d78.61003727542416!3d26.46702057691568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDI4JzAxLjMiTiA3OMKwMzYnNDUuNCJF!5e0!3m2!1sen!2sin!4v1748237056833!5m2!1sen!2sin" 
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  )
}

export default GoogleMap