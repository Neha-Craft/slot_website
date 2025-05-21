import React from 'react'

function GoogleMap() {
  return (
    <div>
            <div className='container' style={{  height: "60vh",  borderRadius:"6px !important" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14319.0000333636!2d78.18082588948603!3d26.20480933564122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c41cad36d4ef%3A0xa8a44d5fbc80c4a3!2sCity%20Center%2C%20Jiwaji%20University%2C%20Mahalgaon%2C%20Gwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1747393305438!5m2!1sen!2sin"
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