"use client"

import { useState, useEffect } from "react"

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
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === "phone") {
      // Allow only up to 10 digits for phone number
      if (value.length <= 10) {
        setState({
          ...formData,
          [name]: value,
        })
      }
    } else {
      setState({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate phone number length before submitting
    if (formData.phone.length !== 10) {
      // Do not show alert, just prevent submission by returning early
      return
    }

    setLoading(true)
    setSuccess(false)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await res.json()

      if (result.success) {
        setSuccess(true)
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
        setSuccess(false)
        console.error('Error:', result.message || 'Submission failed')
      }
    } catch (err) {
      setSuccess(false)
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [success])

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
                    <div className="col-md-6 mb-3">
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

                  {/* Event Details */}
                  <div className="row mb-4">
                    <div className="col-md-6 mb-3">
                      <label className="form-label mb-2">Event Type</label>
                      <select
                        name="event"
                        className="form-control"
                        value={formData.event}
                        onChange={handleChange}
                        required
                      >
                        <option value="">-- Select an event --</option>
                        <option value="wedding">Wedding Ceremony</option>
                        <option value="reception">Reception Party</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="birthday">Birthday Celebration</option>
                        <option value="anniversary">Anniversary Party</option>
                        <option value="retreat">Wellness Retreat</option>
                        <option value="team-building">Team Building Activity</option>
                        <option value="conference">Business Conference</option>
                        <option value="festival">Cultural Festival</option>
                        <option value="private-dinner">Private Dinner</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label mb-2">Event Date</label>
                      <input
                        type="date"
                        name="eventDate"
                        className="form-control"
                        value={formData.eventDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="row mb-4">
                    <div className="col-md-6 mb-3">
                      <label className="form-label mb-2">Contact Person</label>
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
                    <div className="col-md-6 mb-3">
                      <label className="form-label mb-2">Phone Number</label>
                      <input
                        type="number"
                        name="phone"
                        className="form-control"
                        placeholder="Enter 10-digit contact number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-4">
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

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="btn px-5 py-2"
                      disabled={loading}
                      style={{
                        backgroundColor: "#dfa974",
                        width: "200px",
                        color: "white",
                        fontSize: "1.1rem",
                        transition: "background-color 0.3s",
                        opacity: loading ? 0.7 : 1,
                        cursor: loading ? "not-allowed" : "pointer",
                        whiteSpace: "nowrap"
                      }}
                    >
                      {loading ? (
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      ) : null}
                      {loading ? "Sending..." : success ? "Sent ✓" : "Send Enquiry"}
                    </button>
                  </div>
                </form>

                {/* Success Message */}
                {success && (
                  <div
                    className="alert alert-success mt-4"
                    style={{
                      backgroundColor: "#d4edda",
                      color: "#155724",
                      border: "1px solid #c3e6cb",
                      padding: "1rem",
                      borderRadius: "0.5rem"
                    }}
                  >
                    🎉 Your enquiry has been sent successfully! Our team will get back to you shortly.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



// "use client"

// import { useState, useEffect } from "react"

// export default function ContactInfo() {
//   const [formData, setState] = useState({
//     name: "",
//     email: "",
//     message: "",
//     event: "",
//     contactPerson: "",
//     phone: "",
//     eventDate: "",
//   })
//   const [loading, setLoading] = useState(false)
//   const [success, setSuccess] = useState(false)

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setState({
//       ...formData,
//       [name]: value,
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setLoading(true)
//     setSuccess(false)

//     try {
//       const res = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       })

//       const result = await res.json()

//       if (result.success) {
//         setSuccess(true)
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
//         setSuccess(false)
//         console.error('Error:', result.message || 'Submission failed')
//       }
//     } catch (err) {
//       setSuccess(false)
//       console.error('Error:', err)
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     if (success) {
//       const timer = setTimeout(() => setSuccess(false), 5000)
//       return () => clearTimeout(timer)
//     }
//   }, [success])

//   return (
//     <div>
//       <div style={{ backgroundColor: "#f8f8f8" }} className="py-5">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-10">
//               <div className="text-center mb-5">
//                 <h2 className="mb-4" style={{ fontSize: "2.2rem", color: "#333" }}>Event Enquiry Form</h2>
//                 <p className="text-muted" style={{ fontSize: "1.1rem" }}>
//                   Complete the form below and our team will contact you within 24 hours
//                 </p>
//               </div>

//               <div className="bg-white p-4 rounded" style={{ boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.1)" }}>
//                 <form onSubmit={handleSubmit}>
//                   {/* Personal Information */}
//                   <div className="row mb-4">
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label mb-2">Your Name</label>
//                       <input
//                         type="text"
//                         name="name"
//                         className="form-control"
//                         placeholder="Enter your full name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label mb-2">Email Address</label>
//                       <input
//                         type="email"
//                         name="email"
//                         className="form-control"
//                         placeholder="Enter your email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                   </div>

//                   {/* Event Details */}
//                   <div className="row mb-4">
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label mb-2">Event Type</label>
//                       <select
//                         name="event"
//                         className="form-control"
//                         value={formData.event}
//                         onChange={handleChange}
//                         required
//                       >
//                         <option value="">-- Select an event --</option>
//                         <option value="wedding">Wedding Ceremony</option>
//                         <option value="reception">Reception Party</option>
//                         <option value="corporate">Corporate Event</option>
//                         <option value="birthday">Birthday Celebration</option>
//                         <option value="anniversary">Anniversary Party</option>
//                         <option value="retreat">Wellness Retreat</option>
//                         <option value="team-building">Team Building Activity</option>
//                         <option value="conference">Business Conference</option>
//                         <option value="festival">Cultural Festival</option>
//                         <option value="private-dinner">Private Dinner</option>
//                       </select>
//                     </div>
//                   <div className="col-md-6 mb-3">
//   <label className="form-label mb-2">Event Date</label>
//   <input
//     type="date"
//     name="eventDate"
//     className="form-control"
//     value={formData.eventDate}
//     onChange={handleChange}
//     min={new Date().toISOString().split('T')[0]} 
//     required
//   />
// </div>

//                   </div>

//                   {/* Contact Info */}
//                   <div className="row mb-4">
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label mb-2">Contact Person</label>
//                       <input
//                         type="text"
//                         name="contactPerson"
//                         className="form-control"
//                         placeholder="Enter organization or contact name"
//                         value={formData.contactPerson}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label mb-2">Phone Number</label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         className="form-control"
//                         placeholder="Enter contact number"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                   </div>

//                   {/* Message */}
//                   <div className="mb-4">
//                     <label className="form-label mb-2">Message</label>
//                     <textarea
//                       name="message"
//                       className="form-control"
//                       rows="5"
//                       placeholder="Describe your event requirements..."
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                     ></textarea>
//                   </div>

//                   {/* Submit Button */}
//                   <div>
//                     <button
//                       type="submit"
//                       className="btn px-5 py-2"
//                       disabled={loading}
//                       style={{
//                         backgroundColor: "#dfa974",
//                         width:"200px",
//                         color: "white",
//                         fontSize: "1.1rem",
//                         transition: "background-color 0.3s",
//                         opacity: loading ? 0.7 : 1,
//                         cursor: loading ? "not-allowed" : "pointer",
//                         whiteSpace:"nowrap"
//                       }}
//                     >
//                       {loading ? (
//                         <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
//                       ) : null}
//                       {loading ? "Sending..." : success ? "Sent ✓" : "Send Enquiry"}
//                     </button>
//                   </div>
//                 </form>

//                 {/* Success Message */}
//                 {success && (
//                   <div
//                     className="alert alert-success mt-4"
//                     style={{
//                       backgroundColor: "#d4edda",
//                       color: "#155724",
//                       border: "1px solid #c3e6cb",
//                       padding: "1rem",
//                       borderRadius: "0.5rem"
//                     }}
//                   >
//                     🎉 Your enquiry has been sent successfully! Our team will get back to you shortly.
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

  
  
//     </div>
//   )
// }




