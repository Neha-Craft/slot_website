"use client"

import { useState } from "react"

export default function ContactInfo() {
  const [formData, setState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setState({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // Reset form after submission
    setState({ name: "", email: "", message: "" })
  }

  return (
    <div>

    <div className="container my-5">
      <div className="row">
        <div className="col-md-5">
          <p className="p-contact">Contact Info</p>
          <p className="contact-text">
            Landmark: Mau road, near Dandraua<br />
            Parties, Marriages, B'day parties
          </p>

          <div className="mb-2">
            <strong className="adress-table" style={{ marginRight: "10px" }}>Address:</strong>
            <span className="adress-table-info">Mau Road, District Bhind</span>
          </div>

          <div className="mb-2">
            <strong className="adress-table" style={{ marginRight: "10px" }}>Phone:</strong>
            <span className="adress-table-info">777-208-7177, 7974921544, 7000900196</span>
          </div>

          <div className="mb-2">
            <strong className="adress-table" style={{ marginRight: "10px" }}>Contact Person:</strong>
            <span className="adress-table-info">Pawan Sharm, Girraj Katare</span>
          </div>

          <div className="mb-2">
            <strong className="adress-table" style={{ marginRight: "10px" }} >Email:</strong>
            <span className="adress-table-info">info.colorlib@gmail.com</span>
          </div>

          <div className="mb-2">
            <strong className="adress-table" style={{ marginRight: "10px" }} >Fax:</strong>
            <span className="adress-table-info">+(12) 345 67890</span>
          </div>
        </div>

        <div className="col-md-7">
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col-md-6 mb-3 mb-md-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{padding:"1rem"}}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                    style={{padding:"1rem"}}
                  required
                />
              </div>
            </div>
              <div className="row mb-4">
              <div className="col-md-6 mb-3 mb-md-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Phone"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{padding:"1rem"}}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Contact person"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                    style={{padding:"1rem"}}
                  required
                />
              </div>
            </div>
               <div className="row mb-4">
              <div className="col-md-6 mb-3 mb-md-0">
                <input
                  type="date"
                  className="form-control"
                  placeholder="date"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{padding:"1rem"}}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Contact person"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                    style={{padding:"1rem"}}
                  required
                />
              </div>
            </div>
            
            

            <div className="mb-4">
              <textarea
                className="form-control"
                rows="6"
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn px-4 py-2"
              style={{ backgroundColor: "#e9b785", color: "white", border: "none", padding:"20px 40px !important" }}
            >
              SUBMIT NOW
            </button>
          </form>
        </div>
      </div>
    </div>
     <div style={{ width: '100%', height: '100vh',marginBottom:"1rem" }}>
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
