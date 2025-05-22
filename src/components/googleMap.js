import React from 'react'

function GoogleMap() {
  return (
    <div>
            <div className='container' style={{  height: "60vh",  borderRadius:"6px !important" }}>
        <iframe
 src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14662.056107630695!2d78.611135!3d26.4665609!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI4JzU5LjYiTiA3OMKwMzYnNDkuNCJF!5e0!3m2!1sen!2sin!4v1684613048302!5m2!1sen!2sin"
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