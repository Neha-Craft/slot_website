"use client"

import { useState } from "react"

export default function ContactInfo() {
  const [formData, setState] = useState({
    name: "",
    email: "",
    message: "",
    event: "",
    contactPerson: "",
    phone: "",
    eventDate: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setState({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const result = await res.json()
      if (result.success) {
        alert('Email sent successfully!')
        setState({
          name: '',
          email: '',
          message: '',
          event: '',
          contactPerson: '',
          phone: '',
          eventDate: '',
        })
      } else {
        alert('Failed to send email.')
      }
    } catch (err) {
      console.error('Error:', err)
      alert('Error sending email.')
    }
  }

  return (
    <div>
      <div style={{ backgroundColor: "#f8f8f8" }} className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center mb-5">
                <h2 className="mb-4" style={{ fontSize: "2.2rem", color: "#333" }}>Event Enquiry Form</h2>
                <p className="text-muted" style={{ fontSize: "1.1rem" }}>
                  Complete the form below and our team will contact you within 24 hours
                </p>
              </div>
              
              <div className="bg-white p-4 rounded" style={{ boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.1)" }}>
                <form onSubmit={handleSubmit}>
                  {/* Personal Information */}
                  <div className="row mb-4">
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label className="form-label mb-2">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label className="form-label mb-2">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="row mb-4">
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label className="form-label mb-2">Event Type</label>
                        <select
                          name="event"
                          className="form-control"
                          value={formData.event}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Event Type</option>
                          <option value="wedding">Wedding Ceremony</option>
                          {/* Keep other options same */}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label className="form-label mb-2">Event Date</label>
                        <input
                          type="date"
                          name="eventDate"
                          className="form-control"
                          value={formData.eventDate}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="row mb-4">
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label className="form-label mb-2">Organization/Contact Person</label>
                        <input
                          type="text"
                          name="contactPerson"
                          className="form-control"
                          placeholder="Enter organization or contact name"
                          value={formData.contactPerson}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label className="form-label mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          className="form-control"
                          placeholder="Enter contact number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-4">
                    <div className="form-group">
                      <label className="form-label mb-2">Message</label>
                      <textarea
                        name="message"
                        className="form-control"
                        rows="5"
                        placeholder="Describe your event requirements..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div >
                    <button
                      type="submit"
                      className="btn px-5 py-2"
                      style={{
                        backgroundColor: "#e9b785",
                        color: "white",
                        fontSize: "1.1rem",
                        transition: "background-color 0.3s"
                      }}
                    >
                      Send Enquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keep map unchanged */}
          <div style={{ width: "100%", height: "100vh", marginBottom: "1rem" }}>
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

// "use client"

// import { useState } from "react"

// export default function ContactInfo() {
//   const [formData, setState] = useState({
//     name: "",
//     email: "",
//     message: "",
//     event: "",          // new field
//     contactPerson: "",  // new field
//     phone: "",          // new field
//     eventDate: "",      // new field
//   })

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setState({
//       ...formData,
//       [name]: value,
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     try {
//       const res = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       })

//       const result = await res.json()

//       if (result.success) {
//         alert('Email sent successfully!')
//         setState({
//           name: '',
//           email: '',
//           message: '',
//           event: '',
//           contactPerson: '',
//           phone: '',
//           eventDate: '',
//         })
//       } else {
//         alert('Failed to send email.')
//       }
//     } catch (err) {
//       console.error('Error:', err)
//       alert('Error sending email.')
//     }
//   }

//   return (
//     <div>
//       {/* Contact Form Section */}
//       <div style={{ backgroundColor: "#f8f8f8" }} className="py-5">
//         <div className="container">
//           <div className="row">
//             <p className="p-contact">Enquiry Form</p>
//              <p className="lead text-muted text-center">Fill out the form below and we'll get back to you shortly</p>
//             <div className="bg-white p-4 rounded shadow-sm">
//               <form onSubmit={handleSubmit}>
//                 {/* Existing name and email inputs */}
//                 <div className="row mb-4">
//                   <div className="col-md-6 mb-3 mb-md-0">
//                        <label htmlFor="event" className="form-label">
//                         Name
//                        </label>
//               <input
//   type="text"
//   name="name"
//   className="form-control"
//   placeholder="Contact Person"
//   value={formData.name}
//   onChange={handleChange}
//   required
// />

//                   </div>
//                   <div className="col-md-6">
//                        <label htmlFor="event" className="form-label">
//                         Enter Email
//                        </label>
//                        <input
//   type="email"
//   name="email"
//   className="form-control"
//   placeholder="Contact Person"
//   value={formData.email}
//   onChange={handleChange}
//   required
// />

                  
//                   </div>
//                 </div>

//                 {/* New select event */}
//                 <div className="mb-3">
//                   <label htmlFor="event" className="form-label">Select Event</label>
//                   <select
//                     id="event"
//                     name="event"
//                     className="form-select"
//                     value={formData.event}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="">-- Select an event --</option>
//                     <option value="wedding">Wedding Ceremony</option>
//                     <option value="reception">Reception Party</option>
//                     <option value="corporate">Corporate Event</option>
//                     <option value="birthday">Birthday Celebration</option>
//                     <option value="anniversary">Anniversary Party</option>
//                     <option value="retreat">Wellness Retreat</option>
//                     <option value="team-building">Team Building Activity</option>
//                     <option value="conference">Business Conference</option>
//                     <option value="festival">Cultural Festival</option>
//                     <option value="private-dinner">Private Dinner</option>
//                   </select>
//                 </div>

//                 {/* Contact Person */}
//                 <div className="mb-3">
//                   <label htmlFor="contactPerson" className="form-label">Contact Person</label>
//                   <input
//                     type="text"
//                     id="contactPerson"
//                     name="contactPerson"
//                     className="form-control"
//                     placeholder="Contact Person"
//                     value={formData.contactPerson}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 {/* Phone Number */}
//                 <div className="mb-3">
//                   <label htmlFor="phone" className="form-label">Phone Number</label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     className="form-control"
//                     placeholder="e.g., +1 234 567 8901"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 {/* Event Date */}
//                 <div className="mb-3">
//                   <label htmlFor="eventDate" className="form-label">Event Date</label>
//                   <input
//                     type="date"
//                     id="eventDate"
//                     name="eventDate"
//                     className="form-control"
//                     value={formData.eventDate}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 {/* Message */}
//                 <div className="mb-4">
//                   <textarea
//                     className="form-control"
//                     rows="6"
//                     placeholder="Your Message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   className="btn px-4 py-2"
//                   style={{
//                     backgroundColor: "#e9b785",
//                     color: "white",
//                     border: "none",
//                     padding: "20px 40px",
//                   }}
//                 >
//                   SUBMIT NOW
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Google Map iframe here... */}
//       <div style={{ width: "100%", height: "100vh", marginBottom: "1rem" }}>
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14319.0000333636!2d78.18082588948603!3d26.20480933564122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c41cad36d4ef%3A0xa8a44d5fbc80c4a3!2sCity%20Center%2C%20Jiwaji%20University%2C%20Mahalgaon%2C%20Gwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1747393305438!5m2!1sen!2sin"
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </div>
//     </div>
//   )
// }
